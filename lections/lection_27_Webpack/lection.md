# Lection 27 - Webpack

[Webpack](https://webpack.js.org)

### Core concept:

* Entry
* Output
* Loaders
* Plugins
* Mode

### Browser Compability >IE8


### Entry

  Путь к файлу, который является точкой входа. Начиная с данного файла webpack будет строить дерево зависимостей. 

  ```js
// webpack.config.js
    module.exports = {
      entry: 'src/index.js',
    };
  ```

### Output

  Путь указывающий куда webpack'у сохранить собранный билд и как его назвать.

  ```js
// webpack.config.js
  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js',
    },
  };
  ```

### Loaders

  Из коробки webpack поддерживает только Javascript и JSON файлы. Loaders позволяют конвертировать файлы другого типа в модули, которые будут использованы в приложении. 

  ```js
// webpack.config.js
  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js',
    },
    module: {
      rules: [
        {
          test: \/.css$\,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
  ```

### Plugins

Plugins выполняют различные действия над bundle'ом. Например: сжатие, подключить js bundle в .html файл и тд.

  ```js
// webpack.config.js
  const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
  const webpack = require('webpack'); //to access built-in plugins

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js',
    },
    module: {
      rules: [
        {
          test: \/.css$\,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
    ],
  };
  ```


## Babel JS

[BabelJs](https://babeljs.io/docs/en/)

**Babel JS** - утилита, которая позволять сконвертировать ECMAScript 2015+ в код с обратной совместимостью со старыми браузерами.


Использование с webpack:

```sh
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## Полезные webpack plugin'ы

* [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin) - удаляет содержимое output перед созданием нового билда
* [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - создает **index.html**

* [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - отделяет CSS и сохраняет в файлы

## Полезные библиотеки

* [WebpackDevServer](https://github.com/webpack/webpack-dev-server)
* [WebpackMerge](https://github.com/survivejs/webpack-merge)


## Loaders

* [style-loader](https://webpack.js.org/loaders/style-loader/), [css-loader](https://webpack.js.org/loaders/css-loader/) - позволяют импортировать стили
* [sass-loader](https://webpack.js.org/loaders/sass-loader/) - позволяет импортировать SASS(SCSS) стили
* [babel-loader](https://webpack.js.org/loaders/babel-loader/) - позволяет выполнять соврменные фичи языка в старых браузерах.

-----------

* Установить webpack
* Запустить без настроек
* Добавить entry, output
* CleanWebpackPlugin
* HTMLWebpackPlugin
* template for HTMLWebpackPlugin
* Разделяем конфиг на dev, prod

```json
"scripts": {
  "build": "webpack --config=webpack.config.prod.js",
  "build-dev": "webpack --config=webpack.config.dev.js",
  "start": "webpack serve --config=webpack.config.dev.js"
}
```
* webpack-dev-server
* [style-loader, css-loader]
* sass-loader

* Babel

