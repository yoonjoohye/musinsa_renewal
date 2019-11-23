<template>
  <div>
    <Nav v-if="$store.state.open"></Nav>
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from '@/components/layouts/Header.vue';
    import Footer from '@/components/layouts/Footer.vue';
    import Nav from '@/components/layouts/Nav.vue';


    export default {
        components: {Header, Footer, Nav},
    }
</script>

