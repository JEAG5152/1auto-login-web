<template>
	<div>
	    <select data-te-select-init data-te-select-filter="true" data-te-select-size="lg" v-model="value" @change="keyHandler(value)">
	    	<option>--</option>
	        <option v-for="(key,index) of data" :key="index" :value="key.key">{{ key.value }}</option>
	    </select>
	    <label data-te-select-label-ref>{{ label }}</label>
	</div>
</template>

<script>
	import { watch } from 'vue'
	import { ref, computed } from "vue"

	export default {
		props: {
			modelValue: Number,
			data: {
	            type: Array,
	            required: true,
	            default: []
	        },
	        label: {
	            type: String,
	            required: true,
	            default: ""
	        }
		},
		setup(props, { emit }) {
			const label = ref(props.label)
			const data = computed(() => props.data)
			const value = ref('')

			// Whatch event change
	        const keyHandler = (item) => {
	            emit('update:modelValue', item)
	        }

	        watch(() => {
	        	console.log("Event Cahnge ")
		      	value.value = props.modelValue;
		    })

			return {
				label,
				data,
				value,
				keyHandler
			}
		}
	}
</script>