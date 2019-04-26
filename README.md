# 欢迎使用 todolist


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
