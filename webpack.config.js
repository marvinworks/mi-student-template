var debug = process.env.NODE_ENV !== "production";
console.log(debug);
var webpack = require('webpack');

module.exports = {
  context: __dirname+"/src",
  devtool: debug ? "inline-sourcemap" : "eval",
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
  ] : [
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  }
};
