<template>
  <div class="newsInformation">
    <NewsInformationHeader></NewsInformationHeader>
    <div class="companyNewsTitle">
      <img
        src="../../assets/images/newsInformation/newsTitle.jpg"
        alt=""
      >
    </div>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/footer';
import NewsInformationHeader from '../NewsInformation/NewsInformationHeader';

export default {
  name: 'newsInformation',
  components: {
    NewsInformationHeader,
    myFooter,
  },
};
</script>

<style scoped>
.companyNewsTitle {
  margin: 10px 0px;
}
.companyNewsTitle img {
  width: 100%;
}
</style>

