<template>
    <div class="item">
      <img :src="require(`../assets/image/codi${index}.jpg`)">
    </div>
</template>

<script>
    export default {
        name: "Style",
        props:{index:Number}
    }
</script>

<style scoped>

</style>
