import { getCurrentInstance } from 'vue'
import axios from 'axios';

const sendRequest = (context, method, url, body = {}, params = {}, session = null) => {
	return new Promise(async(resolve, reject) => {
		try {
			const configGlobal = context?.appContext.config.globalProperties.$config_global		
			console.log(configGlobal,"configGlobal")	
			console.log(process.env)
			const api = configGlobal.api[process.env.ENV_1AUTO]
			const headers = Object.assign({}, api.headers)
			console.log(api)
			return
			let query_string = ''
			let body_data = ''
			if(params !== null && Object.keys(params).length > 0) {
				query_string = `?${new URLSearchParams(params)}`
			}
			if(body !== null && Object.keys(body).length > 0) {
				body_data = body
			}
			if(session !== null) {
				headers['authorization'] = `Bearer ${session}`
			}
			
			const request = new Request(`${api.url}${url}${query_string}`, {
				method: method.toUpperCase(),
				headers: headers,
				body: body_data != '' ? JSON.stringify(body_data) : null
			})

			await fetch(request)
			.then(response => {
				if([401].includes(response.status)) {
					return {
						http: {
							code: 401,
							status: 'deny',
						},
						error: ['Unauthorized']
					}
				}
				else {
					return response.json()
				}
			})
			.then((response => {
				if(response.http.code === 401 && response.http.status === 'deny'){
					resolve({
						success: false,
						error: 'Unauthorized'
					})
				}
				if(response.http.code === 200 && response.http.status === 'success'){
					resolve({
						success: true,
						data: response.content.data,
					})
				}
				else {
					resolve({
						success: false,
						data: response.content,
					})
				}
			}))
			.catch((err) => {
				console.error(err)
				resolve({
					success: false,
					error: 'Unauthorized',
				})
			})
		}
		catch(err) {
			console.error(err)
			resolve({
				success: false,
				error: 'error_catch',
			})
		}
	})
}

const sendRequestAxios = (context, method, url, body = {}, params = {}, session = null) => {
	return new Promise(async(resolve, reject) => {
		try {
			const configGlobal = context?.appContext.config.globalProperties.$config_global			
			const api = configGlobal.api[process.env.ENV_1AUTO]

			/* Redirect Google */
        	window.location.href = `${api.url}${url}`
		}
		catch(err) {
			console.error(err)
			resolve({
				success: false,
				error: 'error_catch',
			})
		}
	})
}

const sendRequestFiles = (context, method, url, formData, session = null) => {
	return new Promise(async(resolve, reject) => {
		try {
			const configGlobal = context?.appContext.config.globalProperties.$config_global			
			const api = configGlobal.api[process.env.ENV_1AUTO]
			const headers = Object.assign({}, api.headers)

			if(session !== null) {
				headers['content-type'] = 'multipart/form-data;'
				headers['authorization'] = `Bearer ${session}`
			}
			
			await axios.post(`${api.url}${url}`, formData, {
	          headers: headers,
	        }).then((response => {
				if(response.data.http.code === 200 && response.data.http.status === 'success'){
					resolve({
						success: true,
						data: response.data.content.data,
					})
				}
				else {
					resolve({
						success: false,
						data: response.data.content,
					})
				}
			}))
			.catch((err) => {
				console.error(err)
				resolve({
					success: false,
					error: 'Unauthorized',
				})
			})

			// const request = new Request(`${api.url}${url}`, {
			// 	method: method.toUpperCase(),
			// 	headers: headers,
			// 	body: formData
			// })

			// await fetch(request)
			// .then(response => {
			// 	if([401].includes(response.status)) {
			// 		return {
			// 			http: {
			// 				code: 401,
			// 				status: 'deny',
			// 			},
			// 			error: ['Unauthorized']
			// 		}
			// 	}
			// 	else {
			// 		return response.json()
			// 	}
			// })
			// .then((response => {
			// 	if(response.http.code === 401 && response.http.status === 'deny'){
			// 		resolve({
			// 			success: false,
			// 			error: 'Unauthorized'
			// 		})
			// 	}
			// 	if(response.http.code === 200 && response.http.status === 'success'){
			// 		resolve({
			// 			success: true,
			// 			data: response.content.data,
			// 		})
			// 	}
			// 	else {
			// 		resolve({
			// 			success: false,
			// 			data: response.content,
			// 		})
			// 	}
			// }))
			// .catch((err) => {
			// 	console.error(err)
			// 	resolve({
			// 		success: false,
			// 		error: 'Unauthorized',
			// 	})
			// })
		}
		catch(err) {
			console.error(err)
			resolve({
				success: false,
				error: 'error_catch',
			})
		}
	})
}

export {
	sendRequest,
	sendRequestAxios,
	sendRequestFiles,
}