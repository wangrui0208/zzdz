<template>
  <div class="industryPlan">
    <div class="HeaderLogo">
      <div>
        <router-link to="/MainIndex">
          <img src="../../assets/images/logo.jpg">
     </router-link>
      </div>
      <div class="home" @click="goBackHome">首页</div>
      <div class="plan" @click="industryPlan">行业方案</div>
    </div>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '../MainIndex/footer';

export default {
  name: 'industryPlan',
  components: {
    myFooter,
  },
  methods: {
    goBackHome() {
      this.$router.push({
        path: '/MainIndex',
      });
    },
    industryPlan() {
      this.$router.push({
        path: '/industryPlan',
      });
    },
  },
};
</script>

<style scoped>
.HeaderLogo div {
  display: inline-block;
}
.HeaderLogo {
  position: relative;
  margin-top:10px;
}
.HeaderLogo div:nth-child(1) {
  width:48%;
}
.HeaderLogo div.home,.HeaderLogo div.plan {
  position: absolute;
  height:40px;
  font-size: 16px;
  line-height: 40px;
  width:21%;
  margin-top:10px;
  border-radius: 10px;
  border:1px solid #0585EA;
  box-sizing: border-box;
}
.HeaderLogo div.home {
  right:26%;
  text-align: center;
}
.HeaderLogo div.plan {
  right:10px;
  text-align: center;
  background: #0585EA;
  color:#fff;
}
</style>
