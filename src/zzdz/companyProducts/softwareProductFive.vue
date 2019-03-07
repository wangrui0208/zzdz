<template>
  <div class="softwareProductFive">
    <div class="OneTitle">
      <span class="OneNumber">05</span>
      <img
        src="../../../static/images/companyProducts/securityOneContent.png"
        alt=""
      >
      <span class="Title">智慧金融安全云平台</span>
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
          随着金融押运业的发展，现有金融押运靠人工识别管理模式已经不适应现在业务量大、任务频繁、验证频繁、数据繁杂等押运业现状。目前的管理模式出现了保密性差、人力物力耗费大、数据难于管理、效率低下等多种弊端。智能化金融安全云管理平台，通过云服务提供统一在线数据服务，为金融押运公司、银行、金库等用户实时提供业务数据与业务监管。平台采用泰安市云计算中心先进的资源自动取调、故障自动转移、五级数据安全保证等先进技术，保证平台的安全运行。
        </div>
        <div class="ContentImg">
          <img
            src="../../../static/images/companyProducts/securityTwoContent.jpg"
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
          平台是行业首创、国内首个利用云计算、数据、物联网技术和现代武装押运业务相结合的创新型互联网服务平台，泰安市云计算中心可以提供全国武装押运行业的云服务。提高武装押运公司的智能化管理水平，提高整个押运过程中的高效性、安全性管理。
        </div>
        <div class="ContentImg brandPImgOne">
          <img
            src="../../../static/images/companyProducts/securityThreeContent.png"
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
          <b>智能化守押云平台系统，</b>  山东众志智能化守押云平台系统，是一套利用云计算、大数据、新一代物联网技术和现代武装押运业务相结合的创新型智能押运系统，旨在提高金融押运公司的管理水平、提高整个押运过程中的高效性和安全性。该系统可以建立适合金融押运公司的运行机制、考核机制和科学合理、高效的管理模式-集中指派、统一调度、统一指挥；实现尾箱在途安全、业务智能排班、金库盘点、尾箱出入监控、网点交接认证、枪支安全监管、绩效考核评估等全方位在线功能服务；以全程无纸化、电子化、自动化、智能化操作的工作方式，符合中央大力提倡的节能创新工作方式；规范业务流程标准化，降低运营风险，提高便捷高效的工作效率，符合公安部针对武装押运明确提出《加强新时期安保工作指导意见若干要求》的标准化要求。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg caseImg">
          <img
            src="../../../static/images/companyProducts/securityFourContent.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareProductFive',
};
</script>

<style scoped>
.softwareProductFive {
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
/* 图片1设置 */
.brandPImgOne {
  display: inline-block;
  margin-bottom: 10px;
}
.brandPImgOne img {
  width: 85%;
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
