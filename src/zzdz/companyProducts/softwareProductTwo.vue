<template>
  <div class="softwareProductTwo">
    <div class="OneTitle">
      <span class="OneNumber">02</span>
      <img
        src="../../../static/images/companyProducts/ylTitle.png"
        alt=""
      >
      <span class="Title">智慧养老平台</span>
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
          依托泰安市云计算中心提供的SAAS服务，利用信息、网络等现代技术，根据“益券养老”的金融创新养老模式，自主研发一套结构严密、安全可靠、运行稳定、性能达标、易于维护和扩充的金融创新养老服务业综合管理平台系统以及进行健康养老创新体系示范推广。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg">
          <img
            src="../../../static/images/companyProducts/ylOneContent.jpg"
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
          1.首次将金融创新“益券”养老商业模式应用于养老服务业。</div>
        <div class="ContentP brandPOne">
          2.利用大数据采集技术解决传统信息不对称、统计不及时等问题；利用大数据分析技术解决海量数据分析问题；利用大数据挖掘技术提炼海量数据中的精准有效信息，为养老服务的改进，深层次的需求提供有利的数据依托和支撑。</div>
        <div class="ContentP brandPOne">
          3.运用大数据技术进行数据采集、数据分析、数据挖掘和预测。为老人们提供更精准的个性化、定制化标准服务。</div>
        <div class="ContentP brandPOne">
          4.首次运用云计算的SaaS（软件即服务）技术和SOA（面向服务）技术，自主研发了金融创新养老服务业综合管理平台。
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
          <b> 益金养老公司，</b> 经过前期的大量试验，在市政府的组织领导下，由泰安高新区参股，山东众志电子有限公司注资成立泰安市益金养老管理有限公司，负责益金的投资管理。泰安市养老基金设立管理委员会及其办公室、政策审查委员会、专家评审委员会等机构，有效的保证了益金管理公司的安全高效运营，极大地防范了基金风险，实现了益金养老的目标。2014年，山东众志电子有限公司作为试点单位具体实施，在泰山区选择了50户居家老人展开试点，用益券卡的付费方式，专门向65岁以上老人提供居家养老服务。益券卡由众志电子旗下公司泰安安捷信一卡通科技服务有限公司研制；综合服务体系是由众志电子依托泰安云计算中心构建一卡通综合业务平台、养老服务管理平台、客户资源管理平台。该项目依托泰安市云计算中心，实现大数据管理。现在该项目在泰安宁阳、新泰、肥城、东平和泰山区等县区开始落地。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg caseImg">
          <img
            src="../../../static/images/companyProducts/ylThreeContent.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareProductTwo',
};
</script>

<style scoped>
.softwareProductTwo {
  margin-top: 5px;
}

/* title的设置 */
.OneTitle {
  position: relative;
  margin-left: 15px;
}
/* 数字设置 */
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
  height: 165px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 25px;
}
.ContentImg {
  text-align: center;
}
.ContentImg img {
  width: 90%;
}
/* 牌品优势 */
.brandPOne {
  height: 40%;
  line-height: 1.8em;
}

/* 图片1设置 */
.brandPImgOne {
  display: inline-block;
}
.brandPImgOne img {
  width: 45%;
}
.brandPImgOne img:nth-child(1) {
  margin-right: 10px;
}

/* 图片2设置 */
.brandPImgTwo {
  margin-bottom: 30px;
}

.brandPImgTwo div {
  display: inline-block;
  width: 46%;
}
.brandPImgTwo div:nth-child(1) {
  width: 90%;
}
.brandPImgTwo div img {
  width: 60%;
}
.brandPImgTwo div:nth-child(1) img {
  width: 90%;
}

.brandPImgTwo div:nth-child(1) > p {
  margin-top: -5px;
}
.brandPImgTwo div > p {
  margin-top: 15px;
}

/* 成功案例 */
.successfulCase {
  margin-bottom: 30px;
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
.caseP b {
  color: #000;
  font-size: 14px;
}
</style>
