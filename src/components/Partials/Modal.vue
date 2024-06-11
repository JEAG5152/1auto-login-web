<template>
	<!-- Modal -->
	<div
	  data-te-modal-init
	  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
	  :id="id"
	  tabindex="-1"
	  aria-labelledby="exampleModalLabel"
	  aria-hidden="true">
	  <div
	    data-te-modal-dialog-ref
	    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
	    <div
	      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
	      <div class="rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
	      	<div class="flex flex-shrink-0 items-center justify-between">
		        <button
		          type="button"
		          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
		          data-te-modal-dismiss
		          aria-label="Close">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            stroke-width="1.5"
		            stroke="currentColor"
		            class="h-6 w-6">
		            <path
		              stroke-linecap="round"
		              stroke-linejoin="round"
		              d="M6 18L18 6M6 6l12 12" />
		          </svg>
		        </button>
		    </div>
	      	<!--Modal title-->
	        <div class="text-center">
	        	<h5
		          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
		          id="exampleModalLabel">
		          {{title}}
		        </h5>
	        </div>
	        <!--Close button-->
	      </div>


	      <!--Modal body-->
	      <slot name="body"></slot>

	      <!--Modal footer-->
	      <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
	        <!-- <button
	          type="button"
	          class="inline-block rounded border-2 border-red-light_red px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-light_red transition duration-150 ease-in-out hover:border-red-light_red hover:bg-red-dark_red hover:bg-opacity-10 hover:text-red-light_red focus:border-red-light_red focus:text-red-light_red focus:outline-none focus:ring-0 active:border-red-light_red active:text-ed-light_red dark:hover:bg-red-dark_red dark:hover:bg-opacity-10 rounded-full shadow m-2"
	          data-te-modal-dismiss
	          data-te-ripple-init
	          data-te-ripple-color="light">
	          Cancelar
	        </button> -->
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
	import { ref } from "vue"

	export default {
		props: {
			title: {
				type: String,
	            required: true,
	            default: ""
			},
	        id: {
	            type: String,
	            required: true,
	            default: "default"
	        }
		}
		// setup(props, { emit }) {
			
		// }
	}
</script>