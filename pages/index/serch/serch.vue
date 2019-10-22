<template>
	<view class="cu-bar search bg-white">
		<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
		<view class="search-form round">
			<text class="cuIcon-search"></text>
			<input @focus="InputFocus"  :adjust-position="false" type="text" placeholder="点击搜索所有商家" confirm-type="search"></input>
		</view>
		<view class="action">
			<text>北京</text>
			<text class="cuIcon-triangledownfill"></text>
		</view>
	</view>
</template>
			
<script>
	export default {
		data() {
			return {
				InputBottom: 0
			};
		},
		methods: {

			InputFocus(e) {

				uni.navigateTo({
				    url: './serch/SerchDetail',

				})
			}

		}
	}
</script>

<style>
	.box {
		margin: 20upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
