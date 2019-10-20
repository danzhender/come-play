<template>
	<view>
	<cu-custom bgColor="bg-gradual-pink" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">写点评</block>
	</cu-custom>

	<view class="merchantTile">{{merchantsList.title}}</view>
	
<!-- 	<view class="grid col-5 padding-sm submit-button" >
		<view class="margin-tb-sm text-center">
			<button class="cu-btn round" :class="['bg-' + 'orange' , shadow?'shadow':'']">提交</button>
		</view>
	-->

	<view class="cu-form-group margin-top">
		<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" 
		placeholder="亲,请分享口味,环境服务,食材等方面的体验"></textarea>
	</view>
	<!-- 照片上传模块 -->
	<view class="cu-bar bg-white margin-top">
		<view class="action">
			图片上传
		</view>
		<view class="action">
			{{imgList.length}}/9
		</view>
	</view>
	<view class="cu-form-group">
		<view class="grid col-3 grid-square flex-sub">
			<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
			 <image :src="imgList[index]" mode="aspectFill"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='cuIcon-close'></text>
				</view>
			</view>
			<view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
				<text class='cuIcon-cameraadd'></text>
			</view>
		</view>
	</view>
	<view class="cu-form-group margin-top">
		<view class="title">人均</view>
		<input placeholder="¥ 请输入消费金额" name="input"></input>
	</view>
	<view class="cu-form-group margin-top">
		<view class="title">匿名点评</view>
		<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
	</view>
	<view class="anonymous">
		选择匿名点评后,商家将无法获取你的个人信息,同时你的点评也将不再对粉丝展示
	</view>
	<view class="padding flex flex-direction">
		
		<button class="cu-btn bg-orange margin-tb-sm lg">提交</button>
	</view>
	</view>
	
</template>
	
<script>
	import MerchantsList from "../../static/merchants.json"
	export default{
		data(){
			return {
				chantsid:0,
				merchantsList:{},
				imgList: [],
				shadow: false,
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			}
		},
		methods:{
			ChooseImage() {
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '亲爱的顾客',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			SetShadow(e) {
				this.shadow = e.detail.value
			},
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.chantsid=option.id
			this.merchantsList=MerchantsList.data[this.chantsid]
		
		}
	}

</script>
	
<style scoped>

	.merchantTile{
		/* display: inline-block; */

		font-size: 40rpx;
		margin: 30rpx;
	}
	.anonymous{
		margin: 20rpx;
	}
	.submit-button{
		/* position: relative; */
/* 		margin-left: 600rpx;
		margin-top: -130rpx;
		width: 200rpx; */
		}
	textarea{
		font-size: 35rpx;
		height:500rpx;
		line-height: 30rpx;
		
		
		}
	
</style>
