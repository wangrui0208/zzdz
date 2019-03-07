<template>
  <div class="softwareProductThree">
    <div class="OneTitle">
      <span class="OneNumber">03</span>
      <img
        src="../../../static/images/companyProducts/FinanceOneContent.png"
        alt=""
      >
      <span class="Title">智慧金融监管云平台</span>
    </div>
    <hr class="hrStyle">
    <div class="productOverview">
      <div class="subHeading">
        <div class="leftImg">
          <img
            src="../../../static/images/companyProducts/left.png"
            alt=""
          >
        </div>
        <div class="centerTitle">
          产品概述
        </div>
        <div class="rightImg">
          <img
            src="../../../static/images/companyProducts/right.png"
            alt=""
          >
        </div>
      </div>
      <div class="overviewContent">
        <!-- eslint-disable -->
        <div class="ContentP">
          智慧金融组织监管云平台在分析金融工作的实际业务需求的基础上提出建设的，该系统的建设可以满足金融工作办公室人员对于监管对象的数据采集、数据分析汇总及自动预警功能，能极大的提高金融监管工作的效率和科学性，提高金融组织监管部门的管理水平，促进金融组织的健康发展，为地方经济发展营造健康的金融发展环境。
        </div>
        <div class="ContentImg">
          <img
            src="../../../static/images/companyProducts/FinanceTwoContent.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="brandAdvantage">
      <div class="subHeading">
        <div class="leftImg">
          <img
            src="../../../static/images/companyProducts/left.png"
            alt=""
          >
        </div>
        <div class="centerTitle">
          品牌优势
        </div>
        <div class="rightImg">
          <img
            src="../../../static/images/companyProducts/right.png"
            alt=""
          >
        </div>
      </div>
      <div class="brandContent">
        <!-- eslint-disable -->
        <div class="ContentP brandPOne">
          1.极大的提高金融监管工作的效率和科学性
        </div>
        <div class="ContentImg brandPImgOne">
          <img
            src="../../../static/images/companyProducts/FinanceThreeContent.png"
            alt=""
          >
        </div>
        <div class="ContentP brandPOne">
          2.数据管理 数据安全 数据分析
        </div>
        <div class="ContentImg brandPImgTwo">
          <img
            src="../../../static/images/companyProducts/FinanceFourContent.png"
            alt=""
          >
        </div>
        <!-- eslint-enable -->
      </div>
    </div>
    <div class="successfulCase">
      <div class="subHeading">
        <div class="leftImg">
          <img
            src="../../../static/images/companyProducts/left.png"
            alt=""
          >
        </div>
        <div class="centerTitle">
          成功案例
        </div>
        <div class="rightImg">
          <img
            src="../../../static/images/companyProducts/right.png"
            alt=""
          >
        </div>
      </div>
      <div class="caseContent">
        <div class="ContentP caseP">
          <!-- eslint-disable -->
          <b>泰安市地方金融组织监管系统，</b> 是为泰安市金融办定制开发的行业监管平台。该平台在为小额贷款企业提供便捷无纸化的办公环境的同时，集成了全市小额贷款公司的业务数据以及客户的金融信用数据。从而加强了泰安金融工作办公室对小额贷款公司的日常监管，规范小额贷款公司的经营行为，做到及时发现、化解重大风险隐患。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg caseImg">
          <img
            src="../../../static/images/companyProducts/FinanceFiveContent.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareProductThree',
};
</script>

<style scoped>
.softwareProductThree {
  margin-top: 5px;
}

/* title的设置 */
.OneTitle {
  position: relative;
  margin-left: 15px;
}
/* 数字01设置 */
.OneNumber {
  font-size: 20px;
  color: #1d87e2;
  position: absolute;
  top: 10px;
  font-family: "Microsoft yahei";
}

/* title 的img设置 */
.OneTitle img {
  width: 22%;
  margin-left: 15px;
}
/* title的title设置 */
.OneTitle .Title {
  font-size: 22px;
  color: #1d87e2;
  position: absolute;
  top: 10px;
  right: 45px;
}
.hrStyle {
  height: 2px;
  border: none;
  width: 95%;
  border-top: 1px solid #1d87e2;
  margin-top: -7px;
}

/* 分标题设置 */
.subHeading {
  text-align: center;
  margin-top: 40px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
  font-family: 微软雅黑;
  position: relative;
}
.subHeading div {
  display: inline-block;
}
.subHeading div.leftImg {
  position: absolute;
  left: 12%;
}
.subHeading div.rightImg {
  position: absolute;
  right: 12%;
}
.subHeading div.centerTitle {
  font-size: 18px;
}

/* 段落p设置 */
.ContentP {
  text-indent: 2em;
  margin: 10px;
  color: #666;
  font-size: 14px;
  height: 40%;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 25px;
}
.ContentImg {
  text-align: center;
  margin-top: 20px;
}
.ContentImg img {
  width: 90%;
}
/* 牌品优势 */
.brandPOne {
  height: 20%;
  line-height: 1.8em;
}
.brandPTwo {
  height: 28%;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* 图片1设置 */
.brandPImgOne {
  display: inline-block;
  margin-bottom: 10px;
}
.brandPImgOne img {
  width: 85%;
}
/* 图片2设置 */
.brandPImgTwo {
  margin-bottom:-20px;
}
/* 成功案例 */
.successfulCase {
  margin-bottom: 20px;
}
.caseP {
  height: 100%;
  line-height: 1.8em;
  margin-bottom: 25px;
}
.caseTwoP {
  height: 100%;
  line-height: 24px;
  margin-bottom: 25px;
}
.caseImg img {
  width: 90%;
  margin-bottom: 15px;
}
.caseP b,
.caseTwoP b {
  color: #000;
}
</style>
