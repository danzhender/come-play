<template>
	<view>
	<view v-for="(item,index) in mechantsList"  :key="item.id" class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">{{item.title}}</view></view>
				<view class="content">
					<image :src=item.img></image>
					<view class="desc">
						<view class="text-content">{{item.content}}</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
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
				isCard: false,
				mechantsList:[
					{
						id: 0,
						title:'阿甘锅贴',
						img:'../../static/阿甘锅贴.png',
						content:'生煎锅贴  |  孙河 孙河康营家园易事达购物中心'
					},
					{
						id: 1,
						title:'阿甘锅贴',
						img:'../../static/阿甘锅贴.png',
						content:'生煎锅贴  |  孙河 孙河康营家园易事达购物中心'
					},
					{
						id: 2,
						title:'阿甘锅贴',
						img:'../../static/阿甘锅贴.png',
						content:'生煎锅贴  |  孙河 孙河康营家园易事达购物中心'
					},
					{
						id: 3,
						title:'阿甘锅贴',
						img:'../../static/阿甘锅贴.png',
						content:'生煎锅贴  |  孙河 孙河康营家园易事达购物中心'
					},
				]
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
		}
	}
</script>

<style>
/* 	.cu-card{
		position: relative;
		top: 80rpx;
	} */
</style>
