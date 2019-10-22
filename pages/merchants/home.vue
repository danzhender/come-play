<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">商家详情</block>
		</cu-custom>
		<view class="contains">
			<image class="backgroundImg" :src=merchantsList.backgroundImg alt="网络故障" />
			<view class="content">
				<P class="title">{{merchantsList.title}}</P>
				<view class="appraise">
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
				<!-- 聊天室 -->
				<view>
					<chat-button :chantsid="chantsid" ></chat-button>
				</view>
				
				<view class="Separator"></view>
				<view>
				<button class="cu-btn block bg-blue margin-tb-sm lg" >
					<text class="cuIcon-game"></text>
					<text class="Icon-font">玩小游戏赢代金卷</text>
				</button>
				</view>
				<view class="Separator"></view>
				<view class="Coupon-contains">
					<view class="cu-avatar radius margin-left bg-orange">
						<text>卷</text>
					</view>
					<text class="content-first">代金券</text>
					<view class="Coupon">
						<view class="Coupon-first">
							<text>100元代金券</text>
							<text>周一至周五|全场通用</text>
							<text>¥95</text>
						</view>
						<view class="Coupon-second">
							<view class="Coupon-Rush">抢购</view>
							<text>半年售 654</text>
						</view>
					</view>
				</view>
			</view>
			</view>
			
			<view class="cu-item arrow concentration">

					<text class="text-black">精选点评</text>
			</view>
			
			<comment-card></comment-card>
			<view class="cu-tabbar-height"></view>
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" @tap="NavChange('./commentOn')" >
				<view class="cu-item" >
					<text class="lg text-gray cuIcon-comment"></text>
					<text>评论</text>
				</view>
				</view>
				<view class="action" @tap="collectChange" v-if="collectStatus">
				<view class="cu-item" >
					<text class="lg text-gray cuIcon-favor"></text>
					<text>收藏</text>
				</view>
				</view>
				<view class="action" @tap="collectChange" v-else>
				<view class="cu-item" >
					<text class="lg text-gray cuIcon-favorfill"></text>
					<text>收藏</text>
				</view>
				</view>
				<view class="action" >
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='plugin'?'text-green':'text-gray'">分享</view>
				</view>
				<view class="action"  >
					<view class='cuIcon-cu-image'>
						<image src="/static/tabbar/about.png"></image>
					</view>
					<view :class="PageCur=='my'?'text-green':'text-gray'">打卡</view>
				</view>
			</view>
			
	</view>
</template>

<script>
	var MerchantsList =require('../../static/merchants.js')
	import ChatButton from "../chat/chatButton"
	import CommentCard from "./commentCard"
	export default {
		data() {
			return {
				MerchantsList: MerchantsList.MerchantsList,
				merchantsList: {},
				collected: 0,
				chantsid: 0,
				collectStatus:false,
			}
		},
		methods:{
			NavChange: function(url) {
				
				
				uni.navigateTo({
					url:`${url}?id=${this.chantsid}`
					// url:`./commentOn?id=${this.chantsid}`
				})
			},
			collectChange:function(){
				this.collectStatus=!this.collectStatus
			}
		},
		components: {
			ChatButton,
			CommentCard
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			var id = option.id
			this.chantsid = id
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

	.icon-status {
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

	.appraise {
		/* margin-left: 50rpx; */
		margin-top: 30rpx;
		width: 500rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.appraise-number {
		font-size: 30rpx;
	}

	.appraise-price {
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

	.Separator {
		/* margin-top: 35rpx; */
		margin: 20rpx 0;
		background-color: #8799A3;
		width: 100%;
		height: 1px;
	}

	.cuIcon-communityfill {

		font-size: 35rpx;
		position: absolute;
		left: 190rpx;
	}

	.Icon-font {
		/* text-align: center; */
		position: relative;
		left: 40rpx;
	}

	.Coupon {
		font-size: 30rpx;
		width: 650rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FDE6D2;
		border: 3rpx solid #DD514C;
		margin-top: 30rpx;
	}

	.Coupon-contains {
		margin: 20rpx 0;
	}

	.Coupon-first {
		display: flex;
		flex-direction: column;
		margin: 20rpx;
	}

	.Coupon-second {
		display: flex;
		flex-direction: column;
		margin: 20rpx;
	}

	.Coupon-Rush {
		font-size: 35rpx;
		font-style: bold;
		color: white;
		text-align: center;
		width: 120rpx;
		height: 60rpx;
		background-color: #F37B1D;
		border: 2rpx solid #F37B1D;
		border-radius: 20rpx;
	}

	.Coupon-first>text {
		margin: 5rpx;
	}

	.Coupon-second>text {
		margin: 10rpx;
	}

	.content-first {
		font-size: 35rpx;
		margin-left: 20rpx;

	}
	
	.concentration{
		margin-left: 50rpx;
		margin-top: 30rpx;
		font-size: 40rpx;
		font-style: bold;
		}

	button {

		width: 650rpx;
		margin-top: 35rpx;
	}

	/* 	.Coupon-contains > text{
		margin
	} */
</style>
