## vue cli2.0 创建组建发布到npm

1. down下代码地址:[https://github.com/onlySparrow/vue-npm.git](https://github.com/onlySparrow/vue-npm.git)
2. 执行命令安装依赖 npm install
3. 打开 package.json进行如下操作
   ```json
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
