// static-site-generator-webpack-plugin but it actually works.
// Tailored to this specific project setup, it requires the files directly.
const RawSource = require('webpack-sources/lib/RawSource')
const path = require('path')
require('@babel/register')

class StaticSiteGeneratorWebpackPlugin {
  constructor (options) {
    if (arguments.length > 1) {
      options = legacyArgsToOptions.apply(null, arguments)
    }
    options = options || {}
    this.entry = options.entry
    this.paths = Array.isArray(options.paths) ? options.paths : [options.paths || '/']
    this.locals = options.locals
    this.globals = options.globals
    this.crawl = Boolean(options.crawl)
  }

  apply (compiler) {
    const self = this
    addThisCompilationHandler(compiler, function (compilation) {
      addOptimizeAssetsHandler(compilation, function (_, done) {
        const webpackStats = compilation.getStats()
        const webpackStatsJson = webpackStats.toJson()
        try {
          let render = require('./src/server')
          if (Object.prototype.hasOwnProperty.call(render, 'default')) {
            render = render.default
          }

          const assets = getAssetsFromCompilation(compilation, webpackStatsJson)

          renderPaths(self.crawl, self.locals, self.paths, render, assets, webpackStats, compilation)
            .then(() => done()).catch(err => done(err))
        } catch (err) {
          compilation.errors.push(err.stack)
          done()
        }
      })
    })
  }
}

function renderPaths (crawl, userLocals, paths, render, assets, webpackStats, compilation) {
  const renderPromises = paths.map(function (outputPath) {
    const locals = {
      path: outputPath,
      assets: assets,
      webpackStats: webpackStats
    }

    for (const prop in userLocals) {
      if (Object.prototype.hasOwnProperty.call(userLocals, prop)) {
        locals[prop] = userLocals[prop]
      }
    }

    const renderPromise = render.length < 2
      ? Promise.resolve(render(locals))
      : Promise.fromNode(render.bind(null, locals))

    return renderPromise
      .then(function (output) {
        const outputByPath = typeof output === 'object' ? output : makeObject(outputPath, output)

        const assetGenerationPromises = Object.keys(outputByPath).map(function (key) {
          const rawSource = outputByPath[key]
          const assetName = pathToAssetName(key)
          if (compilation.assets[assetName]) return Promise.resolve()
          compilation.assets[assetName] = new RawSource(rawSource)
          /* if (crawl) {
            const relativePaths = relativePathsFromHtml({
              source: rawSource,
              path: key
            })
            return renderPaths(crawl, userLocals, relativePaths, render, assets, webpackStats, compilation)
          } else */ return Promise.resolve()
        })

        return Promise.all(assetGenerationPromises)
      })
      .catch(function (err) {
        compilation.errors.push(err.stack)
      })
  })

  return Promise.all(renderPromises)
}

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
function getAssetsFromCompilation (compilation, webpackStatsJson) {
  const assets = {}
  for (const chunk in webpackStatsJson.assetsByChunkName) {
    let chunkValue = webpackStatsJson.assetsByChunkName[chunk]

    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first JS element?
      chunkValue = chunkValue.find(function (filename) {
        return /\.js$/.test(filename)
      })
    }

    if (compilation.options.output.publicPath) {
      chunkValue = compilation.options.output.publicPath + chunkValue
    }
    assets[chunk] = chunkValue
  }

  return assets
}

function pathToAssetName (outputPath) {
  let outputFileName = outputPath.replace(/^(\/|\\)/, '') // Remove leading slashes for webpack-dev-server

  if (!/\.(html?)$/i.test(outputFileName)) {
    outputFileName = path.join(outputFileName, 'index.html')
  }

  return outputFileName
}

function makeObject (key, value) {
  const obj = {}
  obj[key] = value
  return obj
}

/* function relativePathsFromHtml (options) {
  const html = options.source
  const currentPath = options.path

  const $ = cheerio.load(html)

  const linkHrefs = $('a[href]')
    .map(function (i, el) {
      return $(el).attr('href')
    })
    .get()

  const iframeSrcs = $('iframe[src]')
    .map(function (i, el) {
      return $(el).attr('src')
    })
    .get()

  return []
    .concat(linkHrefs)
    .concat(iframeSrcs)
    .map(function (href) {
      if (href.indexOf('//') === 0) {
        return null
      }

      const parsed = new url.URL(href)

      if (parsed.protocol || typeof parsed.path !== 'string') {
        return null
      }

      return parsed.path.indexOf('/') === 0
        ? parsed.path
        : new url.URL(currentPath, parsed.path)
    })
    .filter(function (href) {
      return href != null
    })
} */

function legacyArgsToOptions (entry, paths, locals, globals) {
  return {
    entry: entry,
    paths: paths,
    locals: locals,
    globals: globals
  }
}

function addThisCompilationHandler (compiler, callback) {
  if (compiler.hooks) {
    compiler.hooks.thisCompilation.tap('static-site-generator-webpack-plugin', callback)
  } else {
    compiler.plugin('this-compilation', callback)
  }
}

function addOptimizeAssetsHandler (compilation, callback) {
  if (compilation.hooks) {
    compilation.hooks.optimizeAssets.tapAsync('static-site-generator-webpack-plugin', callback)
  } else {
    compilation.plugin('optimize-assets', callback)
  }
}

module.exports = StaticSiteGeneratorWebpackPlugin
