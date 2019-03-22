<template>
  <div class="myHheader">
    <div class="myHeaderLogo">
     <router-link to="/MainIndex">
       <img src="static/images/logo.jpg">
     </router-link>
    </div>
    <div class="myHeaderList">
      <div class="listFirstLine">
        <div><router-link to="/mainIndex">网站首页</router-link></div>
        <div><router-link to="/EnterZZ">走进众志</router-link></div>
        <div><router-link to="/NewsInformation">新闻动态</router-link></div>
        <div><router-link to="/companyProducts">公司产品</router-link></div>
      </div>
      <div class="listSecondLine">
        <div><router-link to="/industryPlan">行业方案</router-link></div>
        <div><router-link to="/corporateCulture">企业文化</router-link></div>
        <div><router-link to="/partyBuilding">公司党建</router-link></div>
        <div><router-link to="/talentRecruitment">人才招聘</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
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
