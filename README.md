## vue cli2.0 创建组建发布到npm

------------
## 组建开发上传私有仓库说明

1, down下代码地址:[https://github.com/onlySparrow/vue-npm.git](https://github.com/onlySparrow/vue-npm.git)
2, 执行命令安装依赖 npm install
3, package.json配置说明
	
	{
		"name": "edpGlobal",// npm包的名字,在npm中是唯一的,可在 NPM 上测试搜索
		"description": "edp模块汇总",//对组件库的描述
		"version": "0.1.0",//版本号，默认是 0.1.0 ，之后每次发布，都要修改版本号
		"private": false,//设置为 false 才能发布
		"main": "./dist/edpGlobal-module.min.js",,//入口文件，指向我们打包好的 js 文件
		 "keywords": [],        //关键字,方便别人搜索
		"author": "",         //用户名 需要跟npm注册的用户名一致
		"scripts": {
			"dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
			"build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
		},
		"dependencies": {
			"less": "^3.9.0",
			"less-loader": "^4.1.0",
			"vue": "^2.5.11"
		},
		"browserslist": [
			"> 1%",
			"last 2 versions",
			"not ie <= 8"
		],
		"devDependencies": {
			"babel-core": "^6.26.0",
			"babel-loader": "^7.1.2",
			"babel-preset-env": "^1.6.0",
			"babel-preset-stage-3": "^6.24.1",
			"cross-env": "^5.0.5",
			"css-loader": "^0.28.7",
			"file-loader": "^1.1.4",
			"node-sass": "^4.5.3",
			"sass-loader": "^6.0.6",
			"vue-loader": "^13.0.5",
			"vue-template-compiler": "^2.4.4",
			"webpack": "^3.6.0",
			"webpack-dev-server": "^2.9.1"
		}
	}
	```

4, webpack.config.js配置说明

   ```json
 var path = require('path')
 var webpack = require('webpack')
 const NODE_ENV = process.env.NODE_ENV
 module.exports = {
	//打包npm ./src/index.js  本地运行 ./src/main.js
	//入口文件，就是在src目录下的index.js文件
	  entry: NODE_ENV == 'development' ? './src/main.js' : './src/index.js',
	  output: {
		path: path.resolve(__dirname, './dist'),//输出路径dist目录
		publicPath: '/dist/',
		//打包后输出的文件名字,需要和package.json文件下main('dist/toast.min.js')保持一致
		filename: 'todoList.min.js',
		//library,libraryTarget：为了支持多种使用场景，我们需要选择合适的打包格式。libraryTarget是可以控制 library 以不同方式暴露的选项。
		library: 'vueTodoList',
		libraryTarget: 'umd',
		umdNamedDefine: true
	  }
  }
  //判断环境
  if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

```
**备注**
1.需要配置 library , libraryTarget 和 umdNamedDefine: true
	  格式化导出库。
- "var" 通过设置一个变量导出：var Library =xxx (默认)
- "this" 通过设置一个this的属性导出：var Library =xxx
- "commonjs" 通过设置一个exports 的一个属性导出: exports["Library"] = xxx
- "commonjs2" 通过设置一个module.exports 导出: module.exports=xxx
- "amd" 导出到AMD(随便命名 -通过library选项来设置 名称)
- "umd" 导出到AMD，CommonJS2或者作为root的一个属性

	
  libraryTarget使 library 能够在所有的模块定义下都可运行的方式（并且导出的完全不是模块）。
 如:CommonJS, AMD 环境下运行 详情参考webpack配置:
	  https://webpack.docschina.org/guides/author-libraries

如果 output.libraryTarget 设置为umd 而且output.library 也设置了。这个设为true，将为AMD模块命名

5, 增加组件步骤
  + 在 src/components 创建新的文件夹并添加.vue和index.js
  + 并在 src/index. js文件下加载组件
  
6, 
## 组建使用说明
## Install
```shell
npm install edpGlobal -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import edpGlobal from 'edpGlobal'
Vue.use(edpGlobal);

```


## Api
### Properties
| Name                 | Type      | Default      | Description                                                        |
|----------------------|-----------|--------------|--------------------------------------------------------------------|
| todos            | `Array` | ` ` |  添加数据 |
| liClass          | `class` | ` ` | class添加默认样式|
| styleObject      | `style` | ` ` |  添加行内样式 |
| ==================== | ========= | ============ | =================== |


## Simple usage



```vue
<template>
	<div>
		<npmcomponentdemo  :styleObject="styleObject" :todos="todos"></npmcomponentdemo>
	</div>
</template>

<script>
	import npmcomponentdemo from 'npmcomponentdemo'
	export default {
		components: {
			npmcomponentdemo
		},
		data() {
			return {
				styleObject:{
					color: 'blue',
    				fontSize: '28px',
    				width:'100%',
    				
				},
				todos: [{
						id: 1,
						title: '1 Do the dishes000',
					},
					{
						id: 2,
						title: '2 Take out the trash',
					},
					{
						id: 3,
						title: '3 Mow the lawn'
					}
				],
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.liClass{
		background: purple;
	}
</style>
```