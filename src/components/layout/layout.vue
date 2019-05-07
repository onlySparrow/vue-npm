<template>
	<div>
		<section class="container">
			<header class="mi-header" style="height: 60px;">Header</header>
			<section class="mi-container">
				<aside class="mi-aside" style="width: 200px;">Aside</aside>
				<main class="mi-main">Main</main>
			</section>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'layout',
		data() {
			return {}
		},
		props: {}
	}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.container{
	text-align: center;
}
.mi-header{
	background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.mi-container{
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
}
.mi-aside{
	width: 200px;
    background-color: #d3dce6;
    text-align: center;
    line-height: 200px;
}
.mi-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    display: block;
    flex: 1;
    flex-basis: auto;
    padding: 20px;
    box-sizing: border-box;
}
</style>