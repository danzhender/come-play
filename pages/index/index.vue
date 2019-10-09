<template>
	<view>
		<scroll-view scroll-y class="page">
			<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		<Serch></Serch>
		<view class="swiper-contains">
		<Swiper></Swiper>
		</view>
		<merchants-users></merchants-users>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>

		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<image src="/static/tabbar/about.png"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">我的</view>
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
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.page {
		height: 30vh;
	}
	.swiper-contains{
		position: relative;
		top:-30rpx;
	}
	.blank{
		height: 20rpx;
	}
</style>
