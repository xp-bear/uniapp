import request from "@/api/request.js";

// 首页轮播图请求的数据
export function bannerAds() {
	return request({
		url: '/lejuClient/home/bannerAds',
	})
}

// 登录接口封装
export function doLogin(data) {
	return request({
		url: '/lejuClient/login/doLogin',
		method: 'post',
		data: data
	})
}

// 产品分类参数
export function findCategory(id) {
	return request({
		url: `/lejuClient/productCategory/findCategory/${id}`
	})
}
