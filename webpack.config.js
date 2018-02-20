// ここ後で調整
// リリースモード判定フラグ
let IS_REL = (() => {
  let _arg = process.argv.slice(1)[2];
  console.log(process.argv);
  return !!(_arg && _arg.indexOf("rel") !== -1);
})();
console.log("リリースモード：" + IS_REL);
IS_REL = true;


const webpack = require("webpack"),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE = `${__dirname}/node_modules/`;
const NOOP = () => { };
const DEV = `${__dirname}/develop/assets/`;
const DOC = `${__dirname}/htdocs/assets/`;


/*--------------------------------------------------------------------------
  config
--------------------------------------------------------------------------*/
let config = {
  entry: {
    bundle: `${DEV}js/bundle.js`,
    app: `${DEV}js/app-es/index.js`
  },

  output: {
    path: `${DOC}js`,
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.(glsl|vert|frag)$/,
        loader: "webpack-glsl-loader"
      },
      {
        test: /\.js[x]?$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["env", {
                targets: { browsers: ["last 2 versions"] },
                modules: false
              }]
            ]
          }
        }],
        exclude: NODE,
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { drop_console: IS_REL}
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  devServer: {
    port: 8080,
    progress: false,
    inline: true,
    contentBase: `${__dirname}/htdocs/`,
    publicPath: "/assets/",
    watchOptions: {
      poll: true
    }
  }
};


/*--------------------------------------------------------------------------
  configCSS
--------------------------------------------------------------------------*/
let configCSS = {
  entry: {
    styles: `${DEV}css/styles.scss`,
  },

  output: {
    path: `${DOC}css/`,
    filename: "[name].css"
  },

  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: false
          }
        }, {
          loader: "postcss-loader",
          options: {
            plugins: (loader) => [
              require("autoprefixer")(
                { browsers: ["last 2 versions"] }
              )
            ],
            sourceMap: false
          }
        }, {
          loader: "sass-loader",
          options: {
            outputStyle: IS_REL ? "compressed" : "expanded",
            sourceMap: false
          }
        }
        ]
      }),
      exclude: NODE
    }]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};


/*==========================================================================
  exports
==========================================================================*/
module.exports = [config, configCSS];
