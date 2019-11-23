<template>
  <div class="p-2">
    <img class="h-10" :src="require(`../assets/image/brand${index}.png`)">
  </div>
</template>

<script>
    export default {
        name: "Brand",
        props:{index:Number}
    }
</script>

<style scoped>

</style>
