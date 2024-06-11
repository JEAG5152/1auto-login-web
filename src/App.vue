<template>
     <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Loading />

        <!-- Site header -->
        <Header />
        
        <!-- Page content -->
        <main class="grow">
            <router-view />
        </main>

        <!-- Site footer -->
        <Footer />  
    </div>
</template>

<script>
    import Header from '#/components/Header.vue'
    import Loading from '#/components/Partials/Loading.vue'
    import Footer from '#/components/Footer.vue'

    export default {
        name: 'Home',
        components: {
            Loading,
            Header,
            Footer
        },
    }
</script>

