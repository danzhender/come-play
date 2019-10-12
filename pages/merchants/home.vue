<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">商家详情</block>
		</cu-custom>
		<view class="contains">
			<img class="backgroundImg" :src=merchantsList.backgroundImg alt="网络故障" />
			<view class="content">
				<P class="title">{{merchantsList.title}}</P>
				<view class="appraise" >
					<view v-if="collected">
						<text class="icon-like cuIcon-likefill" @click="collected=!collected"></text>
						<text class="icon-status">已收藏</text>
					</view>
					<view v-else>
						<text class="icon-like cuIcon-like" @click="collected=!collected"></text>
						<text class="icon-status">未收藏</text>
					</view>
					<text class="appraise-number">{{merchantsList.collected.number}}条</text>
					<text class="appraise-price">{{merchantsList.collected.price}}/人</text>
				</view>
				<view class="Separator"></view>
				<button class="cu-btn block bg-green margin-tb-sm lg">
					<text class="cuIcon-communityfill"></text>进入商家聊天室</button>
				<view class="Separator"></view>
				<view>
					<view class="cu-avatar radius margin-left">
						<text>卷</text>
					</view>
					<text>代金券</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import MerchantsList from "../../static/merchants.json"
	export default {
		data() {
			return {
				MerchantsList: MerchantsList.data,
				merchantsList: {},
				collected: 0

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			var id = option.id

			this.merchantsList = this.MerchantsList[id]
			
		}
	}
</script>

<style scoped>
	.contains {

		/* display: inline-flex; */
	}

	.icon-like {
		font-size: 50rpx;
	}
	.icon-status{
		margin-left: 20rpx;
		font-size: 30rpx;
	}
	.content {
		margin-top: 50rpx;
		margin-left: 50rpx;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
	}
	.appraise{
		/* margin-left: 50rpx; */
		margin-top: 30rpx;
		width:500rpx;
		display: flex;
		justify-content:space-between;
		align-items: flex-end;
	}
	.appraise-number{
		font-size: 30rpx;
	}
	.appraise-price{
		font-size: 30rpx;
	}
	.backgroundImg {
		/* justify-content: center; */
		margin-left: 50rpx;
		margin-top: 50rpx;
		width: 650rpx;
		height: 400rpx;
		border-radius: 40rpx;
	}

	.title {
		font-size: 40rpx;
		font-weight: bold;
	}
	.Separator{
		margin-top: 35rpx;
		background-color: #8799A3;
		width: 100%;
		height: 1px;
	}
	.cuIcon-communityfill{
		
		font-size: 35rpx;
		position: absolute;
		left:190rpx;
	}

	button{
		margin-top: 35rpx;
	}
	
</style>
