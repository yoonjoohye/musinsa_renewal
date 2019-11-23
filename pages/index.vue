<template>
  <section class="w-screen min-h-screen flex justify-center">
    <div class="container py-10">

      <div class="mb-10">
        <div class="flex justify-center justify-between">
          <div class="text-xl mb-3">타임세일</div>
          <div class="text-blue-500">보러가기 ></div>
        </div>
        <div class="flex flex-wrap">
          <Sale v-for="x in 8" v-bind:key="x" :index="x"></Sale>
        </div>
      </div>

      <div class="mb-10">
        <div class="flex justify-center justify-between">
          <div class="text-xl mb-3">전체랭킹</div>
          <div class="text-blue-500">보러가기 ></div>
        </div>
        <Rank></Rank>
      </div>

      <div class="mb-10">
        <div class="text-xl mb-3">오늘의 코디</div>
        <div class="flex mb-10">
          <Today v-for="x in 6" v-bind:key="x" :index="x"></Today>
        </div>
        <div class="masonry">
          <Style v-for="x in 7" v-bind:key="x" :index="x"></Style>
        </div>

      </div>

      <div class="mb-10">
        <Banner></Banner>
      </div>

      <div class="flex justify-center mb-10">
        <div class="w-1/2 p-5 border-r border-gray-300">
          <div class="flex justify-center justify-between">
            <div class="text-xl mb-3">디자이너</div>
            <div class="text-blue-500">보러가기 ></div>
          </div>
          <div class="flex flex-wrap justify-between">
            <Designer v-for="x in 6" v-bind:key="x"></Designer>
          </div>
        </div>

        <div class="w-1/2 p-5">
          <div class="flex justify-center justify-between">
            <div class="text-xl mb-3 ">브랜드</div>
            <div class="text-blue-500">보러가기 ></div>
          </div>
          <div class="flex flex-wrap justify-between">
            <Brand v-for="x in 9" v-bind:key="x"></Brand>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Sale from '../components/Sale.vue';
    import Rank from '../components/Rank.vue';
    import Today from '../components/Today.vue';
    import Style from '../components/Style.vue';
    import Banner from '../components/Banner.vue';
    import Designer from '../components/Designer.vue';
    import Brand from '../components/Brand.vue';

    export default {
        components: {
            Rank, Today, Style, Sale, Banner, Designer, Brand
        }
    }
</script>
