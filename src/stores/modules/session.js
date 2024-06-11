import { defineStore } from 'pinia'
import { computed, reactive } from "vue";
import { sendRequest, sendRequestAxios } from "#/libs/request.js"

export const useSessionStore = defineStore('useSessionStore', () => {
	/* Initial values */
    const objectSession = {
        active: false,
		email: null,
		name: null,
		first_name: null,
		last_name: null,
		email_verified: null,
		package_name: null,
		cell_phone: null,
		package_id: null,
		cell_phone_verified: null,
		session: null,
		session_expires: null,
		ads_availability: 0
    }

	/* State */
	let state = reactive({...objectSession})

	/* Actions */
	const googleLogin = async(context) => {
		return new Promise(async(resolve, reject) => {
	      	//state.value.loading = value
			const response = await sendRequestAxios(context,'GET','/site/customer/auth/google')
			
			// if(response.success) {
			// 	state.value.vehicles_list = response.data
			// }

			// return response.data
			resolve({
				success: true
			})
		})
    }

    const metaLogin = async(context) => {
		return new Promise(async(resolve, reject) => {
	      	//state.value.loading = value
			const response = await sendRequestAxios(context,'GET','/site/customer/auth/facebook')
			
			// if(response.success) {
			// 	state.value.vehicles_list = response.data
			// }

			// return response.data
			resolve({
				success: true
			})
		})
    }

	const register = async(context, payload) => {
		return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'POST','/site/customer/register', payload)

			if(response.success) {
				/* Active session */
				response.data['active'] = true
				/* Set Store */
				Object.assign(state, response.data)

				resolve({
					success: true,
				})
			}
			else {
				resolve({
					success: false,
					errors: response.data.errors
				})
			}
		})
    }

	const auth = (context,payload) => {
		return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'POST','/site/customer/auth', payload)
			
			if(response.success) {
				/* Active session */
				response.data['active'] = true
				/* Set Store */
				Object.assign(state, response.data)

				resolve({
					success: true,
				})
			}
			else {
				resolve({
					success: false,
					errors: response.data.errors
				})
			}
		})
    }

    const setSession = (payload) => {
		return new Promise(async(resolve, reject) => {
			payload['active'] = true
			/* Set Store */
			Object.assign(state, payload)

			resolve({
				success: true,
			})
		})
    }

    const checkSession = (context) => {
		return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'get','/site/customer/check_session')
			
			if(response.success) {
				resolve({
					success: true,
				})
			}
			else {
				resolve({
					success: false,
				})
			}
		})
    }

    const verifiedContact = (context, payload) => {
		return new Promise(async(resolve, reject) => {
			let session = null
			if('session' in payload){
				session = payload.session
				delete payload.session
			}

			const response = await sendRequest(context,'put','/site/verified/code', payload, null, session)
			
			if(response.success) {
				resolve({
					success: true,
				})
			}
			else {
				resolve({
					success: false,
				})
			}
		})
    }

    const sendCode = (context, payload) => {
		return new Promise(async(resolve, reject) => {
			let session = null
			if('session' in payload){
				session = payload.session
				delete payload.session
			}

			const response = await sendRequest(context,'post','/site/verified/code', payload, null, session)
			
			if(response.success) {
				resolve({
					success: true,
				})
			}
			else {
				resolve({
					success: false,
				})
			}
		})
    }

    const logout = (value) => {
    	Object.assign(state, objectSession)
    }

    /* Getters */
    const getSession = computed(() => state);
    const getTokenSession = computed(() => state.session);
    const getSessionActive = computed(() => state.active);

	return {
		/* State */
		state,
		/* Actions */
		googleLogin,
		metaLogin,
		register,
		auth,
		logout,
		checkSession,
		verifiedContact,
		sendCode,
		setSession,
		/* Getters */
		getSession,
		getSessionActive,
		getTokenSession
	}
},
{
	persist: true
})