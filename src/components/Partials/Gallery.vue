<template>
	<div class="carousel rounded shadow-md relative">
	    <div
	      v-for="(item, index) in items"
	      :key="index"
	      :class="{ 'hidden': index !== currentIndex, 'block': index === currentIndex }"
	      class="relative rounded-md overflow-hidden">
	      	
	      	<img :src="item.image" :alt="item.alt" class="w-full h-full object-cover" />
	      
	      	<button @click="prev" class="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl">
		        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  	<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
		    </button>
		    <button @click="next" class="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl">
		        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  	<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
		    </button>
	    </div>
	    <div v-if="items.length === 0" class="relative rounded-md overflow-hidden">
	    	<img src="@/banner/photo.png" alt="Cargando" class="w-full h-full object-cover" />
	    	<div class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
		        <p class="text-white">Cargando...</p>
		    </div>
	    </div>
	</div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
	props: {
		images: {
            type: Array,
            required: true,
            default: []
        },
	},
	setup(props) {
	    const items = computed(() => props.images)

	    const currentIndex = ref(0)
	    const autoRotateInterval = 5000 // Intervalo de rotación automática en milisegundos (5 segundos en este ejemplo)
	    let autoRotateTimer

	    const next = () => {
	      	currentIndex.value = (currentIndex.value + 1) % items.value.length
	      	resetAutoRotate()
	    };

	    const prev = () => {
	      	currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length
	      	resetAutoRotate()
	    };

	    const startAutoRotate = () => {
		    autoRotateTimer = setInterval(() => {
		        next();
		    }, autoRotateInterval)
	    };

	    const stopAutoRotate = () => {
	      	clearInterval(autoRotateTimer)
	    };

	    const resetAutoRotate = () => {
	      	stopAutoRotate()
	      	startAutoRotate()
	    };

	    onMounted(() => {
	      	startAutoRotate()
	    });

	    onBeforeUnmount(() => {
	      	stopAutoRotate()
	    });

	    return {
	      	items,
	      	currentIndex,
	      	next,
	      	prev,
	    }
	}
}
</script>

<style scoped>
.carousel {
  max-width: 900px;
  margin: auto;
}

.hidden {
  display: none;
}
</style>