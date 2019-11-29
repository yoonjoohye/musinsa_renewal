<template>
  <section class="w-screen min-h-screen flex justify-center">
    <div class="container py-10">
      <div class="flex justify-center py-10">
        <div class="w-1/2 p-5 border-r">
          <div class="flex justify-center justify-between mb-8">
            <div class="text-2xl font-light">디자이너</div>
            <div class="text-gray-500">전체보기 ></div>
          </div>
          <div class="flex flex-wrap justify-between">
            <Designer v-for="x in 5" v-bind:key="x"></Designer>
          </div>
        </div>
        <div class="w-1/2 p-5">
          <div class="flex justify-center justify-between mb-8">
            <div class="text-2xl font-light">브랜드</div>
            <div class="text-gray-500">전체보기 ></div>
          </div>
          <div class="flex flex-wrap justify-between">
            <Brand v-for="x in 8" v-bind:key="x" :index="x"></Brand>
          </div>
        </div>
      </div>

      <div class="border-b py-10">
        <div class="flex justify-center mb-8">
          <div class="flex justify-center w-full text-2xl font-light">타임세일 <img class="w-5 ml-1" src="../assets/image/icon/time.svg"></div>
          <span class="text-gray-500 w-20">보러가기 ></span>
        </div>
        <div class="flex flex-wrap justify-between">
          <Sale v-for="x in 6" v-bind:key="x" :index="x"></Sale>
        </div>
      </div>

      <div class="border-b py-10">
        <div class="flex justify-center mb-8">
          <div class="w-full flex flex-col items-center">
            <div class="text-2xl text-center font-light">전체 랭킹</div>
            <div class="flex mb-2 font-light text-gray-500">
              <div class="px-2 py-1 mr-3 cursor-pointer underline">상품</div>
              <div class="px-2 py-1 cursor-pointer ">브랜드</div>
            </div>
          </div>
          <span class="text-gray-500 w-20">보러가기 ></span>
        </div>
        <Rank></Rank>
      </div>

      <div class="border-b py-10">
        <div class="flex justify-center mb-8">
          <div class="w-full flex flex-col items-center">
            <div class="text-2xl font-light">무신사 추천</div>
            <div class="flex mb-2 font-light text-gray-500">
              <div class="px-2 py-1 mr-3 cursor-pointer underline">스태프</div>
              <div class="px-2 py-1 cursor-pointer ">코디</div>
            </div>
          </div>
          <span class="text-gray-500 w-20">보러가기 ></span>
        </div>
        <div class="flex flex-wrap justify-between mb-10">
          <Today v-for="x in 6" v-bind:key="x" :index="x"></Today>
        </div>
        <div class="masonry">
          <Style v-for="x in 6" v-bind:key="x" :index="x"></Style>
        </div>
      </div>

      <div class=" py-10">
        <Banner></Banner>
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
        },
        data(){
            return{
                today:false,
            }
        }
    }
</script>

