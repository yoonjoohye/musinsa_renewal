<template>
  <div>
    <div class="w-full h-full bg-black opacity-50 fixed" @click="$store.state.open = !$store.state.open"></div>
    <div class="w-1/3 h-full bg-white fixed overflow-y-scroll">
      <!--닫기-->
      <div class="p-8 bg-black text-white flex justify-center justify-between">
        <div class="text-xl">MUSINSA STORE</div>
        <div class="text-xl cursor-pointer" @click="$store.state.open = !$store.state.open">X</div>
      </div>

      <div class="p-8">
        <!--상품-->
        <div>
          <div class="border-b border-gray-500 text-lg py-2">상품</div>
          <div class="p-5">
            <div>상의(Top)</div>
            <div>아우터(Outer)</div>
            <div>바지(Pants)</div>
            <div>치마(Skirt)</div>
            <div>신발(Shoes)</div>
          </div>
        </div>
        <!--스페셜-->
        <div>
          <div class="border-b border-gray-500 text-lg py-2">스페셜</div>
          <div class="p-5">
            <div>상의(Top)</div>
            <div>아우터(Outer)</div>
            <div>바지(Pants)</div>
            <div>치마(Skirt)</div>
            <div>신발(Shoes)</div>
          </div>
        </div>
        <!--콘텐츠-->
        <div>
          <div class="border-b border-gray-500 text-lg py-2">콘텐츠</div>
          <div class="p-5">
            <div>상의(Top)</div>
            <div>아우터(Outer)</div>
            <div>바지(Pants)</div>
            <div>치마(Skirt)</div>
            <div>신발(Shoes)</div>
          </div>
        </div>
        <!--이벤트-->
        <div>
          <div class="border-b border-gray-500 text-lg py-2">이벤트</div>
          <div class="p-5">
            <div>상의(Top)</div>
            <div>아우터(Outer)</div>
            <div>바지(Pants)</div>
            <div>치마(Skirt)</div>
            <div>신발(Shoes)</div>
          </div>
        </div>
        <!--코디-->
        <div>
          <div class="border-b border-gray-500 text-lg py-2">코디</div>
          <div class="p-5">
            <div>상의(Top)</div>
            <div>아우터(Outer)</div>
            <div>바지(Pants)</div>
            <div>치마(Skirt)</div>
            <div>신발(Shoes)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>
