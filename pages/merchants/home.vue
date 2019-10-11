<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">聊天</block>
		</cu-custom>
		<view class="contains">
			<img class="backgroundImg" :src=merchantsList.backgroundImg alt="网络故障" />
			<view class="content">
				<P class="title">{{merchantsList.title}}</P>
				<view class="appraise">

					<view v-if="collected">
						<text class="icon-like cuIcon-likefill">已收藏</text>
					</view>
					<view v-else>
						<text class="icon-like cuIcon-like">未收藏</text>
					</view>
					<text class="appraise-number">条</text>
					<text class="appraise-price">/人</text>
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
		width:550rpx;
		display: flex;
		justify-content:space-between;
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
</style>
