<template>
	<view>
		<view v-for="(item,index) in merchantsList" :key="item.id" 
		class="cu-card article" :class="isCard?'no-card':''" @tap="merchantsDetail(item.id)">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">{{item.title}}</view>
				</view>
				<view class="content">
					<image :src=item.img />
					<view class="desc">
						<view class="text-content">{{item.description}}</view>
<!-- 						<view>
							<view class="cu-tag bg-red light sm round">美味</view>
							<view class="cu-tag bg-green light sm round">环境好</view>
						</view> -->
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	// import MerchantsList from "/static/merchants.js"
	var MerchantsList =require('../../static/merchants.js')
	export default {
		data() {
			return {
				isCard: false,
				merchantsList:MerchantsList.MerchantsList
			};
		},
		methods: {
			// IsCard(e) {
			// 	this.isCard = e.detail.value
				
			// },
			merchantsDetail(id){
				 console.log(this.merchantsList)
				uni.navigateTo({
					url:`../merchants/home?id=${id}`
				})
			}
		},

		
	}
</script>

<style>
	.text-cut{
		text-align: center;
	}
</style>
