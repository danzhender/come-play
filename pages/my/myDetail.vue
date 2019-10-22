<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">个人详情</block>
		</cu-custom>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
				<view class="content flex-sub ">
					<view class="flex justify-between avatar-content">
						<view>隔壁老李</view>
						<view class='cu-tag round bg-orange'>Lv3</view>
					</view>
					<view class="text-gray text-sm flex justify-between nameCard">
						<view>北京</view>
						<view>粉丝2</view>
						<view>关注0</view>
					</view>
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
				{{item.name}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabList:[
					{
						name:'动态'
					},
					{
						name:"点评"
					},
					{
						name:"相册"
					},
					{
						name:"攻略"
					},
					{
						name:"打卡"
					},
					{
						name:"去过的地方"
					},
					{
						name:"其他"
					},
					
				]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style scoped>
	.nameCard{
		width: 300rpx;
		margin-top: 10rpx;
	}
	.avatar-content{
		width: 450rpx;
		
	}
	.avatar-content .cu-tag{
		font-size: 30rpx;
	}
</style>
