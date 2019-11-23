<template>
  <div class="flex justify-center">
    <div class="w-1/3 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
      <div class="text-xs font-medium">1위</div>
      <div class="flex justify-center items-center">
        <img class="w-4/5" src="../assets/image/rank7.jpg">
      </div>
      <div class="text-sm">
        <div class="font-light">커버낫 블랙 맨투맨</div>
        <div class="font-medium">29,000원</div>
      </div>
    </div>
    <div class="w-3/5">
      <div class="flex justify-between">
        <div class="w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">2위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank1.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">3위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank2.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">4위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank3.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">5위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank4.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">6위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank5.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">7위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank6.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">8위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank2.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
        <div class=" w-56 flex flex-col justify-center p-3  hover:bg-gray-200 cursor-pointer">
          <div class="text-xs font-medium">9위</div>
          <div class="flex justify-center items-center">
            <img class="h-40" src="../assets/image/rank3.jpg">
          </div>
          <div class="text-sm">
            <div class="font-light">커버낫 블랙 맨투맨</div>
            <div class="font-medium">29,000원</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                banners: [
                    'rank3.jpg',
                    'rank4.jpg',
                    'rank5.jpg'
                ],
            }
        },
    }
</script>


<style lang="scss" scoped>
  .swiper {
    width: 100%;
    position: relative;
  }

  .swiper-slide {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

  }

  .swiper-image {
    position: relative;
    display: inline-block;
    height: 14.2rem;
    margin-right: 1.25rem;
  }

  .swiper-btn {
    top: 40%;
  }
</style>
