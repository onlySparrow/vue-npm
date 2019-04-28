## vue cli2.0 创建组建发布到npm

1. down下代码地址:[https://github.com/onlySparrow/vue-npm.git](https://github.com/onlySparrow/vue-npm.git)
2. 执行命令安装依赖 npm install
3. 打开 package.json进行如下操作
		
		{
			"name": "npmcomponentdemo",//添加项目名称并保证在npm中是唯一的
			"description": "a vue component of todolist",
			"version": "0.1.0",
			"private": false,
			"main": "./dist/todoList.min.js",
			"scripts": {
				"dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
				"build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
			},
			"dependencies": {
				"vue": "^2.5.11",
				"vue-todolist": "^1.0.3"
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
				"vue-loader": "^13.0.5",
				"vue-template-compiler": "^2.4.4",
				"webpack": "^3.6.0",
				"webpack-dev-server": "^2.9.1"
			}
		}
		```
	 参数说明
	 
		| 参数                 | 说明      |
		|---------------------|-----------|
		| name      | 组件名字，确保不会和别人的组件重名，可在 NPM 上测试搜索|
		| author    | 如果有用户名 需要跟npm注册的用户名一致|
		| version   | 版本号，默认是 0.1.0 ，之后每次发布，都要修改版本号 |
		| private   | 设置为 false 才能发布|
		| main      | 入口文件，指向我们打包好的 js 文件|
		| ==================== | =================== |

4. 打开 webpack.config.js进行如下操作

   ```json
 module.exports = {
	//打包npm ./src/index.js  本地运行 ./src/main.js
	  entry: './src/index.js',
	  output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'todoList.min.js',
		library: 'vueTodoList',
		libraryTarget: 'umd',
		umdNamedDefine: true
	  }
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

## 使用 todolist
## Install
```shell
npm install npmcomponentdemo -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import npmcomponentdemo from 'npmcomponentdemo'
Vue.use(npmcomponentdemo);

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
