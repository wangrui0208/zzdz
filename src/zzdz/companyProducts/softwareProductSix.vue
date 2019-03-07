<template>
  <div class="softwareProductThree">
    <div class="OneTitle">
      <span class="OneNumber">06</span>
      <img
        src="../../../static/images/companyProducts/TravelOneContent.png"
        alt=""
      >
      <span class="Title">智慧旅游云平台</span>
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
          智慧旅游的提出就是利用云计算、物联网等新技术，通过互联网或移动互联网，借助便携的终端上网设备，主动感知旅游资源、经济、活动和旅游者等方面的信息并及时发布，让人们能够及时了解这些信息，及时安排和调整工作与旅游计划，从而达到对各类旅游信息的智能感知、方便利用的效果，通过便利的手段实现更加优质的服务。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg">
          <img
            src="../../../static/images/companyProducts/TravelTwoContent.png"
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
          1.全面物联——智能传感设备将旅游景点、文物古迹、城市公共设施物联成网，对旅游产业链上下游运行的核心系统实时感测。</div>
        <div class="ContentP brandPOne">
          2.充分整合——实现全市景区、景点、酒店、交通等设施的物联网与互联网系统完全连接和融合，将数据整合为旅游资源核心数据库，提供智慧的旅游服务基础设施。
        </div>
        <div class="ContentImg brandPImgOne">
          <img
            src="../../../static/images/companyProducts/TravelThreeContent.png"
            alt=""
          >
        </div>
        <div class="ContentP brandPOne">
          3.协同运作——基于智慧的旅游服务基础设施，实现旅游产业链上下游各个关键系统和谐高效地协作，达成城市旅游系统运行的最佳状态。</div>
        <div class="ContentP brandPOne">
          4.激励创新——鼓励政府、旅游企业和旅游者在智慧的旅游服务基础设施之上进行科技、业务和商业模式的创新应用，为城市提供源源不断的发展动力。</div>
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
          <b>泰山惠玩网，</b> 泰山惠玩网（简称泰惠玩）作为泰安市旅游局官方唯一智慧旅游电商平台，由泰安紫蜂旅游信息技术有限公司在泰安市旅游局的政策监管下设计开发，采取商业化市场运作，致力于汇集泰安最全面的旅游产品资源，为景区提供统一的互联网平台和旅游大数据支撑，为游客提供最优惠最可信最全面的旅游选择，助力泰安旅游行业的大发展。
        </div>
        <!-- eslint-enable -->
        <div class="ContentImg caseImg">
          <img
            src="../../../static/images/companyProducts/TravelFourContent.jpg"
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
  margin-top:20px;
}
.ContentImg img {
  width:90%;
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
  margin-bottom:10px;
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
