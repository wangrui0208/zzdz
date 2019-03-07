<template>
  <div class="companyHonor">
    <div class="companyHonorTitle">
      <img
        src="../../assets/images/EnterZZ/honorTitle.jpg"
        alt=""
      >
    </div>
    <div class="companyHonorContent">
      <!-- eslint-disable -->
      <p>
        众志电子公司是“山东省双软认定企业”，“ 山东省物联网产业重点企业”、“信用等级AAA级企业”；“山东省正版产品经营示范单位”、 “山东省诚信企业”，首批“泰安市创新型企业”，“泰安市管理创新企业”，泰安市企业与企业家联合会副会长单位、泰安市信息化协会会长单位，山东省信息化协会会员单位，中国云计算市场与应用联盟副秘书长单位、农业大数据产业技术创新战略联盟秘书长单位。中国电子工业标准化技术协会信息技术服务分会会员单位，全国信息技术标准化技术委员会大数据标准工作组成员单位。2014年公司“居家养老”项目团队被评为山东省服务业创新团队。2015、2016年连续两年入选《中国大数据企业排行榜》，2016年位列“农业行业”排名第四位,“智慧农业”领域排名第二位。公司董事长李松和入选国家科技创新创业人才，荣获“2015年度中国火炬创业导师”称号；2015年荣获“山东省信息化行业优秀企业家”和“山东省电子信息行业优秀企业家”；2016年入选第二批国家“万人计划”科技创业领军人才。李松和董事长主持承担科技创新和成果转化项目国家级3项，省级项目 10 项，市级项目5项。
      </p>
      <!-- eslint-enable -->
    </div>
    <div class="companyHonorImg">
      <img
        src="../../assets/images/EnterZZ/honorLeft.png"
        alt=""
      >
      <img
        src="../../assets/images/EnterZZ/honorRight.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyHonor',
};
</script>

<style scoped>
/* titleIMg */
.companyHonorTitle {
  margin-top:20px;
}
.companyHonorTitle img {
  width: 100%;
}

/* 内容设置 */
.companyHonorContent {
  margin: 15px 10px;
}
.companyHonorContent p {
  padding: 5px;
  text-indent: 2em;
  font-size: 15px !important;
  text-align: justify;
  letter-spacing: 1px;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
  color:#666;
  font-size: 15px;
  font-family: "Microsoft yahei";
  line-height: 1.8em;
}

/* 荣誉图片设置 */
.companyHonorImg {
  margin: 5px 5px 10px 5px;
  text-align: center;
}
.companyHonorImg img {
  width:90%;
}
</style>

