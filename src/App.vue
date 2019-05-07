<template>
	<div id="app">
		<edpglobal-list :styleObject="styleObject" :listData="listData" ></edpglobal-list>
		<layout style="margin: 10px 0;"></layout>
		<!--<div class="edpglobal-item">
			<label>Button:</label>
			<edpglobal-button class="edpglobal-btn" @click="onClick">确定</edpglobal-button>
			<edpglobal-button class="edpglobal-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</edpglobal-button>
			<edpglobal-button class="edpglobal-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</edpglobal-button>
			<edpglobal-button class="edpglobal-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</edpglobal-button>
			<edpglobal-button class="edpglobal-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</edpglobal-button>
		</div>-->
		<div class="edpglobal-item">
			<label>Switch: </label>
			<edpglobal-switch v-model="lightSwitch">开关(开):</edpglobal-switch>
			<edpglobal-switch v-model="switchLight">开关(关):</edpglobal-switch>
		</div>
	</div>
</template>

<script>
	//	 import layout from './components/layout/layout.vue'
//	import HelloWorld from './components/HelloWorld.vue'
	export default {
		name: 'app',
		data() {
			return {
				lightSwitch: false,
				switchLight: true,
				styleObject: {
					color: 'grey',
					fontSize: '28px',
					width: '100%',

				},
				listData: [{
						id: 1,
						title: '1 listData',
					},
					{
						id: 2,
						title: '2 listData',
					},
					{
						id: 3,
						title: '3 listData'
					}
				],
			}
		},
		methods: {
			onClick: function(e) {
				console.log('click', e);
			},
			handlePrint() {
				console.log('selectValue', this.selectValue);
				console.log('input1:', this.input1);
				console.log('input2:', this.input2);
			}
		},
		watch: {
			lightSwitch: newValue => console.log('开关：', newValue),
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>