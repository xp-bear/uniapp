import baseUrl from "./baseUrl.js";

export default function(config) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url,
			method: config.method,
			timeout: 5000,
			data: config.data,
			success(res) {
				resolve(res.data)
			}
		})
	})
}
