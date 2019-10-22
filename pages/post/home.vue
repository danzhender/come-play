<template>
	<view>
	<!-- <view class="cu-bar tabbar bg-white shadow foot"> -->
	<view class="cu-tabbar-height"></view>
	<view class="cu-card case" :class="isCard?'no-card':''" @tap="commentDetail">
		<view class="cu-item shadow">
			<view class="image">
				<image src="/static/cake.jpg"
				 mode="widthFix"></image>
				<view class="cu-tag bg-blue">精品</view>
				<view class="cu-bar bg-shadeBottom"> <text class="text-cut">最喜欢吃得奶油蛋糕!哈哈哈哈哈哈哈哈!</text></view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
					<view class="content flex-sub">
						<view class="text-grey">隔壁老李</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	

	<view class="cu-card case" :class="isCard?'no-card':''" @tap="commentDetail">
		<view class="cu-item shadow">
			<view class="image">
				<image src="/static/cake.jpg"
				 mode="widthFix"></image>
				<view class="cu-tag bg-blue">精品</view>
				<view class="cu-bar bg-shadeBottom"> <text class="text-cut">最喜欢吃得奶油蛋糕!哈哈哈哈哈哈哈哈!</text></view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
					<view class="content flex-sub">
						<view class="text-grey">隔壁老李</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
	
	<view class="cu-card case" :class="isCard?'no-card':''" @tap="commentDetail">
		<view class="cu-item shadow">
			<view class="image">
				<image src="/static/cake.jpg"
				 mode="widthFix"></image>
				<view class="cu-tag bg-blue">精品</view>
				<view class="cu-bar bg-shadeBottom"> <text class="text-cut">最喜欢吃得奶油蛋糕!哈哈哈哈哈哈哈哈!</text></view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
					<view class="content flex-sub">
						<view class="text-grey">隔壁老李</view>
						<view class="text-gray text-sm flex justify-between">
							十天前
							<view class="text-gray text-sm">
								<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
								<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
								<text class="cuIcon-messagefill margin-lr-xs"></text> 30
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				isCard: false
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			commentDetail(e){
				uni.navigateTo({
					url:'/pages/merchants/commentDetail'
				})
			}
		}
	}
</script>

<style>
</style>
