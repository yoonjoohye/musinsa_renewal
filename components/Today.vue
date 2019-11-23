<template>
  <div class="w-48 flex flex-col p-3 hover:bg-gray-200 cursor-pointer">
    <div class="mb-2">
      <img class="w-full" :src="require(`../assets/image/style${index}.jpeg`)">
    </div>
    <div class="flex">
      <div class="mr-3">
        <img src="../assets/image/rank2.jpg">
      </div>
      <div>
        <div class="text-xs font-light">내셔널 오그래픽임 아무튼 그럼</div>
        <div>
          <span class="text-xs font-medium">20,000원</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Today",
        props: {index: Number},
    }
</script>

<style scoped>

</style>
