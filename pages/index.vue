<template>
  <section class="container">
    <Rank></Rank>

    <Today></Today>

    <Sale></Sale>

    <Banner></Banner>

    <Designer></Designer>

    <Brand></Brand>
  </section>
</template>

<script>
    import Rank from '../components/Rank.vue';
    import Today from '../components/Today.vue';
    import Sale from '../components/Sale.vue';
    import Banner from '../components/Banner.vue';
    import Designer from '../components/Designer.vue';
    import Brand from '../components/Brand.vue';

    export default {
        components: {
            Rank, Today, Sale, Banner, Designer, Brand
        }
    }
</script>
