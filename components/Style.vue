<template>
  <div class="item">
    <div class="relative">
      <img v-lazy="require(`../assets/image/codi${index}.jpg`)">
      <div class="absolute top-0 w-full h-full style-box text-white z-10 flex justify-center items-center cursor-pointer">
        <div class="p-5 border">
          <div class="flex">
            <div class="mr-3">
              <img v-lazy="require('../assets/image/rank2.jpg')">
            </div>
            <div class="flex flex-col justify-between">
              <div class="text-xs">
                <div class="font-light">내셔널 오그래픽임 아무튼 그럼</div>
                <div class="font-medium">20,000원</div>
              </div>
              <div>
                <button class="text-center text-white border border-white w-full hover:bg-white hover:text-black" @click="show">보러가기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Style",
        props: {index: Number},
        methods:{
            show(){
                location.href='/detail';
            }
        }
    }
</script>

<style lang="scss" scoped>

  .style-box{
    background-color:rgba(0,0,0,0.55);
  }
</style>
