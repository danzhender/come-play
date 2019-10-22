<template>
	<view>
	<button class="cu-btn block bg-green margin-tb-sm lg" @click="chatRouter(chantsid)">
		<text class="cuIcon-communityfill"></text>
		<text class="Icon-font">进入商家聊天室</text>
	</button>
	</view>
</template>
		
<script>
	 
	export default{
		props:{
			chantsid:Number
		},
		methods:{
			chatRouter (chantsid){
				uni.navigateTo({
					url:'../chat/home?id='+chantsid,
				})
			}
		}
	}
</script>

<style scoped>
	.cu-btn{
		width: 650rpx;
	}
	.cuIcon-communityfill{
		
		font-size: 35rpx;
		position: absolute;
		left:190rpx;
	}
	.Icon-font{
		/* text-align: center; */
		position: relative;
		left: 40rpx;
	}
</style>
