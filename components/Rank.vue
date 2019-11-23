<template>
  <div>
    <swiper class="flex" :options="swiperOption">
      <swiper-slide v-for="(banner,index) in banners" v-bind:key="banner">
          <div class="absolute rounded text-xs text-white bg-blue-500 px-2 py-1" v-if="index===0">1위</div>
          <img :src="require(`../assets/image/${banner}`)">
          <div class="p-2">
            <div class="text-sm font-light">라퍼지스토어 미니멀 푸퍼 다운.</div>
            <div>
              <span class="text-sm font-light line-through">52,000원</span>
              <span class="text-sm font-medium">20,000원</span>
            </div>
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
<!--    <div class="swiper-pagination swiper-pagination-bullets"></div>-->
  </div>
</template>

<script>
    export default {
        data () {
            return {
                banners: [
                    'rank3.jpg',
                    'rank4.jpg',
                    'rank5.jpg'
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                // swiperOption: {
                //     loop: true,
                //     slidesPerView: 'auto',
                //     centeredSlides: true,
                //     spaceBetween: 30,
                //     pagination: {
                //         el: '.swiper-pagination',
                //         dynamicBullets: true
                //     },
                //     on: {
                //         slideChange() {
                //             console.log('onSlideChangeEnd', this);
                //         },
                //         tap() {
                //             console.log('onTap', this);
                //         }
                //     }
                // }
            }
        },
        mounted() {
            // console.log('app init', this)
            // setTimeout(() => {
            //     this.banners.push('rank6.jpg')
            //     console.log('banners update')
            // }, 3000)
            // console.log(
            //     'This is current swiper instance object', this.mySwiper,
            //     'I will slideTo banners 3')
            // this.mySwiper.slideTo(3,1000,false);
        }
    }
</script>


<style lang="scss" scoped>
</style>
