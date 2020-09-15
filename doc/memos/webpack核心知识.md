# webpack 核心知识

## [entry](https://webpack.js.org/concepts/#entry)

`webpack`的入口文件（`*.js`），构建的起点
当`webpack`开始构建时，会读取这个入口文件,并从这个文件开始解析依赖，在内部构建一个依赖图，这个依赖图会引用项目中使用到的各个模块，然后开始打包，生成一个或者多个`bundle`文件

`webpack`默认入口文件路径:`./src/index.js`,开发者可以根据实际情况修改

具体配置参看[官方文档](https://webpack.js.org/concepts/#entry)

## [output](https://webpack.js.org/concepts/#output)

`webpack`的输出，即是`webpack`最终构建出来的静态资源

`webpack`默认输出文件路径:`./dist/index.js`,开发者可以根据实际情况修改

具体配置参看[官方文档](https://webpack.js.org/concepts/#loaders)

### [loader](https://webpack.js.org/concepts/#output)

在实际的前端项目中，我们使用的静态资源不只是`.js`文件，还有`CSS`代码，图片、模板文件等，但是`webpack`本质上只能处理`javascript`，要处理其他类型的文件就需要通过相应的`loader`将对应类型的文件内容转换为`javascript`，然后交由`webpack`进行打包处理

具体配置参看[官方文档](https://webpack.js.org/concepts/#loaders)

### [plugin](https://webpack.js.org/concepts/#plugins)

`webpack`中的`plugin`用于处理`loader`之外的所有其他任何工作

具体配置参看[官方文档](https://webpack.js.org/concepts/#plugins)

### mode

`webpack4.x`引入的新概念，`webpack`的构建模式，取值有`development`,`production`,`none`

`development` 模式用于开发时使用

`production` 模式用于线上生产时使用

`none` 则是不需要任何默认优化配置时使用

`development` `vs` `production`

这两个模式会使用 [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) 来将 `process.env.NODE_ENV` 的值分别设置为 `development` 和 `production`，方便开发者在项目业务代码中判断当前构建模式

`production` 模式会启用 [TerserPlugin](https://github.com/webpack-contrib/terser-webpack-plugin) 来压缩 `JS` 代码，让生成的代码文件更小

`development` 模式会启用 `devtools: 'eval'` 配置，提升构建和再构建的速度

# 学习网址

[官网](https://webpack.js.org/)