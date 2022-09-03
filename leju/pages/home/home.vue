<template>
	<view>home</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		uni.request({
			url: "http://leju.bufan.cloud/lejuclient/home/bannerAds",
			method: "GET",
			timeout: 5000,
			success(res) {
				console.log(res.data);
			},
		});
	},
};
</script>

<style lang="scss"></style>
