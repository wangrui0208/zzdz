<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="../assets/images/banner1.jpg"
          alt=""
        >
      </div>
      <div class="swiper-slide">
        <img
          src="../assets/images/banner2.jpg"
          alt=""
        ></div>
      <div class="swiper-slide">
        <img
          src="../assets/images/banner3.jpg"
          alt=""
        ></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'bannerPage',
  mounted() {
    /* eslint-disable */
    new Swiper('.swiper-container', {
      loop: true,
      loopAdditionalSlides: 3,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    /* eslint-ensable */
  },
};
</script>

<style scoped>
.swiper-container {
  font-size: 14px;
  margin-bottom:10px;
}
.swiper-slide img {
  width: 100%;
  height: 150px;
}
</style>

