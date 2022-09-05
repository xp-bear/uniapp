<template>
	<view>
		<swiper
			class="swiper"
			circular
			:indicator-dots="indicatorDots"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
		>
			<swiper-item v-for="(item, index) in list" :key="index">
				<image :src="item.pic" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { bannerAds, doLogin, findCategory } from "@/api/home/index.js";
export default {
	data() {
		return {
			list: [],
			background: ["color1", "color2", "color3"],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
		};
	},
	// 页面加载
	onLoad() {
		// 请求的封装
		bannerAds().then(res => {
			// console.log(res);
			this.list = res.data.items;
		});
		doLogin({
			password: "123456",
			username: "17596496508",
		}).then(res => {
			// console.log(res.data);
		});
		findCategory("1308336521684599809").then(res => {
			console.log(res.data);
		});
		// const _this = this;
		// uni.request({
		// 	url: "http://leju.bufan.cloud/lejuClient/home/bannerAds",
		// 	method: "GET",
		// 	timeout: 5000,
		// 	success(res) {
		// 		_this.list = res.data.data.items;
		// 	},
		// });
	},
};
</script>

<style lang="scss"></style>
