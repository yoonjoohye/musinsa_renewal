<template>
  <header class="w-screen bg-black text-white flex justify-center items-center" @click="search($event)">
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
      <div class="flex justify-center w-full">
        <div class="text-center inline">
          <div class="flex justify-center items-center cursor-pointer" @click="openService=!openService">
            <div class="text-5xl mr-5">MUSINSA STORE</div>
            <img class="drop-menu w-5" :class="openService ? 'click' : ''"
                 src="../../assets/image/icon/down-button.svg">
          </div>
        </div>
      </div>

      <!--다른 서비스로 이동-->
      <div class="flex justify-center">
        <Service v-if="openService"></Service>
      </div>

      <!--검색-->
      <div class="flex justify-center w-full mt-5">
        <div class="relative text-center w-1/2">
          <div class="bg-white flex justify-center items-center">
            <input class="focus:outline-none text-black w-full px-5 py-4 search" @focus="openSearch = true" type="text"
                   placeholder="상품을 검색하세요">
            <img class="cursor-pointer w-5 mr-5" src="../../assets/image/icon/search.svg">
          </div>
          <!--키워드창-->
          <transition v-if="openSearch">
            <div class="absolute bg-white text-black border w-full text-left">
              <div class="flex text-center p-3 text-gray-600">
                <div class="cursor-pointer w-1/2 border-r" :class="recentSearch ? 'text-blue-500':''" @click="recent">최근 검색어</div>
                <div class="cursor-pointer w-1/2" :class="popularSearch ? 'text-blue-500':''" @click="popular">인기 검색어</div>
              </div>

              <div v-if="recentSearch" class="border-t p-5">
                <div class="flex justify-between p-2">필루미네이트
                  <div class="text-red-500">X</div>
                </div>
              </div>

              <div v-if="popularSearch" class="border-t p-5">
                <div class="flex justify-between p-2">롱패딩
                  <div class="text-red-500">X</div>
                </div>
              </div>
            </div>
          </transition>

          <div class="text-right mt-3">
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
                openSearch: false,
                recentSearch: true,
                popularSearch: false,

            }
        },
        methods: {
            search(event) {
                let className = event.target.className;
                if (className.indexOf('search') !== -1) {
                    this.openSearch = true;
                } else {
                    this.openSearch = false;
                }
            },
            recent() {
                this.recentSearch = true;
                this.popularSearch = false;
            },
            popular() {
                this.recentSearch = false;
                this.popularSearch = true;
            }
        }
    }
</script>

<style lang="scss">
</style>
