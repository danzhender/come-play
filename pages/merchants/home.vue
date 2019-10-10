<template>
	<view>
		<p>12345</p>
	</view>
</template>

<script>
	import MerchantsList from "../../static/merchants.json"
	export default {
		data(){
			return {
				MerchantsList:MerchantsList.data
			}
		},
	    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		var id=option.id
		console.log(this.MerchantsList[id])
			
	    }
	}
</script>

<style>
</style>
