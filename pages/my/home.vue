<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
				<view class="content flex-sub ">
					<view class="flex justify-between avatar-content">
						<view>隔壁老李</view>
						<view class='cu-tag round bg-orange'>Lv3</view>
						<view class='cu-tag round bg-blue' @tap="mydetail">个人主页>>></view>
					</view>
					<view class="text-gray text-sm flex justify-between nameCard">
						<view>北京</view>
						<view>粉丝2</view>
						<view>关注0</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border">
		<view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-likefill text-red"></text>
				<text class="text-grey">收藏</text>
			</view>
		</view>
		<view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-form text-green"></text>
				<text class="text-grey">优惠券</text>
			</view>
		</view>
		<view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-calendar text-orange"></text>
				<text class="text-grey">最近浏览</text>
			</view>
		</view>
		<view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-news text-blue"></text>
				<text class="text-grey">订单</text>
			</view>
		</view>
		<view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-settingsfill text-grey"></text>
				<text class="text-grey">设置</text>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				menuArrow:true,
			}
			
		},
		methods:{
			mydetail(e){
				uni.navigateTo({
					url:'/pages/my/myDetail'
				})
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
