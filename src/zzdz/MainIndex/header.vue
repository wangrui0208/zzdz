<template>
  <div class="myHheader">
    <div class="myHeaderLogo">
     <router-link to="/MainIndex">
       <img src="../../assets/images/logo.jpg">
     </router-link>
    </div>
    <div class="myHeaderList">
      <div class="listFirstLine">
        <div><a @click="home">网站首页</a></div>
        <div><a @click="EnterZZ">走进众志</a></div>
        <div><a @click="NewsInformation">新闻动态</a></div>
        <div><a @click="companyProducts">公司产品</a></div>
      </div>
      <div class="listSecondLine">
        <div><a @click="industryPlan">行业方案</a></div>
        <div><a @click="corporateCulture">企业文化</a></div>
        <div><a @click="partyBuilding">公司党建</a></div>
        <div><a @click="talentRecruitment">人才招聘</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  methods: {
    EnterZZ() {
      this.$router.push({
        path: '/enterZZ',
      });
    },
    home() {
      this.$router.push({
        path: '/mainIndex',
      });
    },
    NewsInformation() {
      this.$router.push({
        path: '/NewsInformation',
      });
    },
    companyProducts() {
      this.$router.push({
        path: '/companyProducts',
      });
    },
    industryPlan() {
      this.$router.push({
        path: '/industryPlan',
      });
    },
    corporateCulture() {
      this.$router.push({
        path: '/corporateCulture',
      });
    },
    partyBuilding() {
      this.$router.push({
        path: '/partyBuilding',
      });
    },
    talentRecruitment() {
      this.$router.push({
        path: '/talentRecruitment',
      });
    },
  },
};
</script>

<style scoped>
.myHeader {
  font-size: 14px;
}
/* logo */
.myHeaderLogo {
  padding-top: 10px;
}
/* 标题设置 */
.myHeaderList {
  text-align: center;
  background: #f3f0f0;
}
.listFirstLine,
.listSecondLine {
  font-size: 0px;
}
.listFirstLine > div {
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
.listSecondLine > div {
  border-right: 2px solid #fff;
}
.listFirstLine > div,
.listSecondLine > div {
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  font-size: 16px;
  height: 55px;
  line-height: 55px;
}
.listFirstLine > div:nth-child(4),
.listSecondLine > div:nth-child(4) {
  border-right: none;
}
</style>
