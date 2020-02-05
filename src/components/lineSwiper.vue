<template>
  <div name="lineSwiper" class="line_swiper">
    <!-- 折线图-轮播 -->
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="images_swiper" v-lazy="image" style="width: 6.8rem; height: 3.62rem;"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'lineSwiper',
  data () {
    return {
      images: [
        'https://img1.dxycdn.com/2020/0208/268/3395436479513185497-135.png',
        'https://img1.dxycdn.com/2020/0208/356/3395436496692894611-135.png',
        'https://img1.dxycdn.com/2020/0208/718/3395441242632008089-135.png',
        'https://img1.dxycdn.com/2020/0208/602/3395441255516910756-135.png',
        'https://img1.dxycdn.com/2020/0208/338/3395441279139232665-135.png'
      ]
    }
  }
}
</script>

<style>
 .line_swiper {
   margin: .35rem auto;
   width: 100%;
   img {
     width: 3.4rem;
     height: 1.8rem;
   }
 }
</style>
