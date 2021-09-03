const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HandlebarsPlugin = require("handlebars-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'https://anton-sakharov-hub.github.io/goit-js-hw-10-food-service/src'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: "images/",
            publicPath: '/images/',
          },
        },
      ],
      },
      {
        test: /\.hbs/,
        loader: "handlebars-loader",
        exclude: /(node_modules|bower_components)/,
      }
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
    // stats: 'errors-only',
    },

  plugins: [new HtmlWebpackPlugin({ template: "src/index.html", inject: 'body' }), new MiniCssExtractPlugin(),
    // new HandlebarsPlugin({
//     // путь к файлу (ам) записи hbs. Также поддерживает вложенные каталоги при записи path.join (process.cwd (), "app", "src", "**", "* .hbs") , 
    // entry: path.join(process.cwd(), "src", "* .hbs"),
//     // путь вывода и имя файла (файлов). Это должно находиться в папке вывода webpacks 
//     // если опущен, будет использоваться входной 
// output: path.join(process.cwd(), "build", "[name] .html"),
//     // вы также можете добавить переменную [path], которая будет выдавать файлы с их относительным путем, например 
//     // output: path.join (process.cwd ( ), "сборка", [путь], "[имя] .html"),
      
//     // данные, передаваемые в основной шаблон hbs: `main-template (data)` 
    // data: require("menu.json"),
//     // или добавляем его как путь к файлу для восстановления данных при изменении с помощью webpack-dev -Server 
//     // данные: путь.присоединиться(__dirname, "приложение / данные / проект.json"),
  // })
],
};