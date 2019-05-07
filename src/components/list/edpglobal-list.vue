<template>
	<div>
		<ul>
			<li class="liClass" :style="styleObject" v-for="(item, index) in listData" :key="item.id">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'edpglobalList',
		data() {
			return {}
		},
		props: {
			styleObject: { //Array/Object类型，返回值必须是js对象
				type: Object,
				default: function() {
					return {

					}
				}
			},
			listData: { //Array/Object类型，返回值必须是js对象
				type: Array,
				default: function() {
					return {
						id: 0,
						title: 'listData',
					}
				}
			}
		}
	}
</script>
<style scoped>
	ul li {
		list-style: none;
		padding: 10px;
		border: 1px solid red;
		border-top: none;
	}
	
	ul li:first-child {
		border-top: 1px solid red;
	}
</style>