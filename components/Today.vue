<template>
  <div class="w-56 flex flex-col mr-5">
    <div class="mb-2">
      <img class="w-full" :src="require(`../assets/image/style${index}.jpeg`)">
    </div>
    <div class="flex">
      <div class="mr-3">
        <img src="../assets/image/rank2.jpg">
      </div>
      <div>
        <div class="text-sm font-light">내셔널지오그래픽인데 아무튼 그럼 퉷</div>
        <div>
          <span class="text-sm font-medium">20,000원</span>
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
