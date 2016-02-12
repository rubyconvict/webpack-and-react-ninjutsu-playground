'use strict';
var path = require('path'),
srcPath = path.join(__dirname, 'src'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
autoprefixer = require('autoprefixer'),
//precss       = require('precss'),
webpack = require('webpack'),
// bower_dir = __dirname + '/bower_components',
srcPath = path.join(__dirname, 'src'),
// nodeModulesPath = path.resolve(__dirname, 'node_modules'),
dist_dir = process.env.NODE_ENV === 'production' ? 'dist' : 'build',
assets_dir = 'assets',
buildPath = path.resolve(__dirname, 'public', dist_dir, assets_dir);

root.console.log('-------------------------');
root.console.log(srcPath);
root.console.log(dist_dir);
root.console.log('-------------------------');

var cdn_url = '/'; //'https://xxx.cloudfront.net/';
var cdn = (process.env.NODE_ENV === 'production' ? cdn_url : 'http://localhost:8080/');

var config = {
    // Makes sure errors in console map to the correct file
    // and line number
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
    target: 'web',
    cache: process.env.NODE_ENV === 'production',
    debug: process.env.NODE_ENV !== 'production',
    stats: {
        colors: true,
        reasons: process.env.NODE_ENV !== 'production'
    },
    plugins: [
      // We want WebPack to put modules used by multiple entry points into a common chunk.
      // The first argument refers to what entry point we want to put the shared code.
      // The default entry point name is 'entry', which points to ['./src/components/entry.js'].
      // The second argument would be the name of the file, that holds the shared code,
      // but since we already have an output for our main entry point (bundle.js) we leave it at null.
      // The third argument tells webpack to look for common modules in our lazely required modules.
      // There is actually a fourth argument here too which is a number.
      // The number states how many of these lazy modules that needs to share a module
      // before it is put into our main bundle.
      // An important note here is that the modules (main.js, Home.js or Admin.js)
      // themselves does not have to require the common module, any dependency within a dependency will count.
      // new webpack.optimize.CommonsChunkPlugin('entry', null, false),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
      // new webpack.optimize.CommonsChunkPlugin('common.js', 2),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new ExtractTextPlugin('[name].css?[contenthash]', {
          allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        cdn: cdn,
        dist_dir: dist_dir,
        title: 'Hello Title',
        template: 'src/template.html', // Load a custom template
        inject: true,
        hash: true,
        chunks: ['app', 'vendors', 'Admin'],
        publicPath: cdn
      }),
      // development
      new webpack.NoErrorsPlugin()//,
      // new webpack.HotModuleReplacementPlugin()
      // TODO: in production
      //new webpack.optimize.DedupePlugin(),
      //new webpack.optimize.UglifyJsPlugin(),
      //new webpack.optimize.OccurenceOrderPlugin(),
      //new webpack.optimize.AggressiveMergingPlugin()
    ],
    entry: {
      app: getEntrySources([
        './src/components/entry.js'
      ]),
      vendors: ['react', 'alt', 'jquery', 'bootstrap.js'],
      // lazy loaded:
      Admin: ['./src/components/Admin.js']
    },
    resolve: {
      root: srcPath,
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: ['node_modules', 'src'],
      alias: {}
    },
    output: {
        publicPath: cdn + assets_dir + '/',
        filename: 'bundle.js',
        path: buildPath,
        pathInfo: true
    },
    module: {
        preLoaders: [
            {
              test: /\.(js|jsx)$/,
              include: srcPath,
              loader: 'eslint-loader'
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'source-map'
            }
        ],
        loaders: [
            {
              test: /\.scss$/,
              include: /src/,
              loaders: [
                  'style',
                  'css?browsers=last 3 versions', // not sure if it works
                  'sass?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './node_modules')),
                  ExtractTextPlugin.extract('css!sass')
              ]
            },
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-sass-loader has access to the jQuery object
            //{
            //  test: /bootstrap-sass\/assets\/javascripts\//,
            //  loader: 'imports?jQuery=jquery'
            //},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file'
            }, {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            { test: /\.css$/,
              loader: 'style!css!postcss?sourceMap' }, // not sure if postcss works ok as autoprefixer
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: [
                'react-hot',
                'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
              ]
            }
        ],
        noParse: [] // /\.min\.js/
    },
    addVendor: function (name, path) {
      this.resolve.alias[name] = path;
      // this.module.noParse.push(new RegExp('^' + name + '$'));
      this.module.noParse.push(new RegExp('^' + name + '$'));
    },
    postcss: function () {
        return [autoprefixer]; //, precss
    }
};

config.addVendor('jquery', __dirname + '/node_modules/jquery/dist/jquery.js');
config.addVendor('bootstrap.js', __dirname + '/node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
// config.addVendor('twitter-bootstrap.css', bower_dir + '/bootstrap/bootstrap.min.css')
// usage:
// require('bootstrap');
// require('bootstrap.css');
config.addVendor('lodash', __dirname + '/node_modules/lodash/index.js');

module.exports = config;

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}
