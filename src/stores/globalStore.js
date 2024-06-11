import { defineStore } from 'pinia'
import { computed, ref } from "vue";
import { sendRequest } from "#/libs/request.js"

export const useGlobalStore = defineStore('useGlobalStore', () => {
	/* State */
	const state = ref({
		loading: false,
		preload: {
			body_type: [],
			car_brands: [],
			configs: [],
			states: []
		},
		listModels: [],
		listTownship: [],
		listSerie: [],
		listTrim: [],
		listSpecifications: {},
		search_car: {}
	})

	/* Actions */
	const setLoading = (value) => {
      	state.value.loading = value
    }

    const setSearch = (value) => {
      	state.value.search_car = value
    }

    const preload = (context) => {
    	return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'GET',`/site/preload`)

			if(response.success) {
				state.value.preload = response.data
				resolve({
					success: true
				})
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const listModels = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'GET',`/site/preload/models/${payload.id}`)

			if(response.success) {
				state.value.listModels = response.data
				resolve({
					success: true
				})
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const listTownship = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
			const response = await sendRequest(context,'GET',`/site/preload/township/${payload.id}`)

			if(response.success) {
				state.value.listTownship = response.data
				resolve({
					success: true
				})
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const listSerie = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
    		let session = null
    		let params = {}
			if('session' in payload){
				session = payload.session
				delete payload.session
			}
			if('list_years' in payload) {
				params['list_years'] = payload.list_years
				delete payload.params
			}
			if('serie_id' in payload) {
				params['serie_id'] = payload.serie_id
				delete payload.params
			}
			
			const response = await sendRequest(context,'GET',`/site/serie_list/${payload.id}`, null, params, session)

			if(response.success) {
				if('list_years' in payload && 'serie_id' in payload) {
					resolve({
						success: true,
						data: response.data
					})	
				}
				else {
					state.value.listSerie = response.data
					resolve({
						success: true
					})
				}
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const listTrim = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
    		let session = null
			if('session' in payload){
				session = payload.session
				delete payload.session
			}

			const response = await sendRequest(context,'GET',`/site/trim_list/${payload.id}`, null, null, session)

			if(response.success) {
				state.value.listTrim = response.data
				resolve({
					success: true
				})	
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const listSpecifications = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
    		let session = null
			if('session' in payload){
				session = payload.session
				delete payload.session
			}

			const response = await sendRequest(context,'GET',`/site/specifications/${payload.id}`, null, null, session)

			if(response.success) {
				state.value.listSpecifications = response.data
				resolve({
					success: true
				})
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }
    const getAds = (context, payload) => {
    	return new Promise(async(resolve, reject) => {
    		let session = null
			if('session' in payload){
				session = payload.session
				delete payload.session
			}

			const response = await sendRequest(context,'GET',`/site/customer/ads`, null, null, session)

			if(response.success) {
				state.value.listTrim = response.data
				resolve({
					success: true,
					data: response.data
				})	
			}
			else {
				resolve({
					success: false
				})	
			}
    	})
    }

    /* Getters */
    const getLoading = computed(() => state.value.loading);
    const getBodyTypes = computed(() => state.value.preload.body_type);
    const getCarBrands = computed(() => state.value.preload.car_brands);
    const getConfig = computed(() => state.value.preload.configs);
    const getStates = computed(() => state.value.preload.states);
    const getListModels = computed(() => state.value.listModels);
    const getTownships = computed(() => state.value.listTownship);
    const getSpecifications = computed(() => state.value.listSpecifications);
    const getSerie = computed(() => state.value.listSerie);
    const getTrim = computed(() => state.value.listTrim);
    const getSearch = computed(() => state.value.search_car);

	return {
		/* State */
		state,
		/* Getters */
		setLoading,
		getLoading,
		getBodyTypes,
		getCarBrands,
		getConfig,
		getStates,
		getListModels,
		getTownships,
		getSerie,
		getTrim,
		getSpecifications,
		getSearch,
		/* Functions */
		preload,
		listModels,
		listTownship,
		listSerie,
		listTrim,
		listSpecifications,
		getAds,
		setSearch,
	}
},
{	
	persist: true
})