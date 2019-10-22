<template>
	<view>
		<view scroll-y class="page">
			<image src="/static/BasicsBg.png"
			 mode="widthFix" class="response"></image>
			<view class="cu-tabbar-height"></view>
		</view>
		<view v-if="PageCur=='home'">
			<Serch></Serch>
			<view class="swiper-contains">
			<Swiper></Swiper>
			</view>
			<view class="cu-tabbar-height"></view>
			<merchants-users></merchants-users>
		</view>

<!-- 		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin> -->
		<post v-if="PageCur=='post'"></post>
		<chatroom v-if="PageCur=='chat'"></chatroom>
		<my v-if="PageCur=='my'"></my>
		<view class="cu-tabbar-height"></view>
		<view class="cu-bar tabbar bg-white shadow foot">

			<view class="action" @click="NavChange" data-cur="home">
				<view class="cu-item"  v-if="PageCur=='home'">
					<text class="lg text-green cuIcon-shopfill"></text>
					<text>主页</text>
				</view>
				<view class="cu-item"  v-else>
					<text class="lg text-green cuIcon-shop"></text>
					<text>主页</text>
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="post">
				<view class="cu-item"  v-if="PageCur=='post'">
					<text class="lg text-green cuIcon-picfill"></text>
					<text>帖子</text>
				</view>
				<view class="cu-item"  v-else>
					<text class="lg text-green cuIcon-pic"></text>
					<text>帖子</text>
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="chat">
				<view class="cu-item"  v-if="PageCur=='chat'">
					<text class="lg text-green cuIcon-messagefill"></text>
					<text>消息</text>
				</view>
				<view class="cu-item"  v-else>
					<text class="lg text-green cuIcon-message"></text>
					<text>消息</text>
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class="cu-item"  v-if="PageCur=='my'">
					<text class="lg text-green cuIcon-peoplefill"></text>
					<text>我的</text>
				</view>
				<view class="cu-item"  v-else>
					<text class="lg text-green cuIcon-people"></text>
					<text>我的</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Swiper from "./swiper";
	import Serch from "./serch/serch";
	import MerchantsUsers from "./merchantsUsers";
	export default {
		  components:{
		    Swiper,
			Serch,
			MerchantsUsers
		  },
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(this.PageCur)
			}
		}
	}
</script>

<style>
	.page {
		height: 30vh;
	}
/* 	.swiper-contains{
		position: relative;
		top:-30rpx;
	} */
/* 	.blank{
		height: 20rpx;
	} */
</style>
