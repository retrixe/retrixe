module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', {
    corejs: 3,
    targets: 'defaults',
    useBuiltIns: 'usage'
  }]]
}
