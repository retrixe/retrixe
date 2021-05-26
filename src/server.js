import ReactDOMServer from 'react-dom/server'
import React from 'react'
import Main from './main'
import { StaticRouter } from 'react-router-dom'

export default function render (locals) { // TODO: Add favicon.
  const markup = ReactDOMServer.renderToString( // We aren't using context rn.
    <StaticRouter location={locals.path} context={{}}><Main /></StaticRouter>
  )
  return `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Use minimum-scale=1 to enable GPU rasterization -->
  <meta
    name='viewport'
    content='user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
  />
  <title>retrixe</title>
  <meta property='og:type' content='website' />
  <meta property='og:title' content='retrixe' />
  <meta property='og:image' content='/icon.png' />
  <meta property='og:description' content='A website about me.' />
  <meta name='Description' content='A website about me.'} />
  <meta name='theme-color' content='#43d98e' />
  <script>window.path = '${locals.path}'</script>
  <script src='/${locals.assets.runtime.substring(4)}'></script>
  <script src='/${locals.assets.vendors.substring(4)}'></script>
  <script src='/${locals.assets.main.substring(4)}'></script>
  <link rel='icon' href='/icon.png' />
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
</head>
<body>
  <div id="app">${markup}</div>
</body>
</html>
`
}
