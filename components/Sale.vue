<template>
    <div class="w-1/6 flex flex-col mb-5 mr-5">
      <div class="flex justify-center items-center w-full">
        <img class="h-48" :src="require(`../assets/image/rank${index}.jpg`)">
      </div>
      <div>
        <div class="mb-1">
          <span class=" text-xs text-white bg-red-600 rounded px-2 py-1">D-2</span>
        </div>
        <div class="text-sm font-light">라퍼지스토어 미니멀 푸퍼 다운.</div>
        <div>
          <span class="text-sm font-light line-through">52,000원</span>
          <span class="text-sm font-medium">20,000원</span>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Sale",
        props:{index:Number}
    }
</script>

<style scoped>

</style>
