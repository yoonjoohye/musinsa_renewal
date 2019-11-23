<template>
  <div class="w-screen bg-black text-white px-5 py-8 flex flex-col justify-center">
    <div class="text-right">
      <span class="mr-10">로그인</span>
      <span>회원가입</span>
    </div>
    <div class="flex justify-center items-center mb-5">
      <div class="text-5xl">MUSINSA STORE</div>
      <div>
        <button @click="open">V</button>
      </div>
    </div>

    <div class="text-center">
      <input class="w-2/6 px-5 py-3" type="text" placeholder="상품을 입력하세요">
    </div>

  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
