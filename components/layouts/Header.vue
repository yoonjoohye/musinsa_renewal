<template>
  <header class="w-screen bg-black text-white flex justify-center items-center">
    <div class="container py-12">
      <!--nav-->
      <div class="flex justify-center justify-between">
        <div><img class="w-5 cursor-pointer" src="../../assets/image/icon/list-menu.svg"
                  @click="$store.state.open = !$store.state.open"></div>
        <div>
          <span class="cursor-pointer mr-10">로그인</span>
          <span class="cursor-pointer">회원가입</span>
        </div>
      </div>

      <!--musinsa-->
      <div class="flex justify-center items-center">
        <div class="text-5xl mr-5">MUSINSA STORE</div>
        <button @click="openService=!openService"><img class="w-5" src="../../assets/image/icon/down-button.svg">
        </button>
      </div>
      <!--다른 서비스로 이동-->
      <div class="flex justify-center">
        <Service v-if="openService"></Service>
      </div>

      <!--검색-->
      <div class="flex justify-center w-full mt-5">
        <div class="text-center w-1/2">
          <div class="bg-white rounded flex justify-center items-center mb-3">
            <input class="focus:outline-none text-black rounded w-full px-3 py-4 " type="text" placeholder="상품을 검색하세요">
            <img class="cursor-pointer w-5 mr-3" src="../../assets/image/icon/search.svg">
          </div>
          <div class="text-right">
            <div class="text-sm cursor-pointer">2등 필루미네이트 <span class="text-red-600">▲ 7</span></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    import Service from './Service.vue'

    export default {
        components: {
            Service
        },
        data() {
            return {
                openService: false,
            }
        }
    }
</script>

<style lang="scss">
</style>
