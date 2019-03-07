<template>
  <div class="softwareProductFour">
    <div class="OneTitle">
      <span class="OneNumber">04</span>
      <img
        src="../../../static/images/companyProducts/priceOneContent.png"
        alt=""
      >
      <span class="Title">智慧物价云平台</span>
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
          系统实时获取各行业价格信息，使物价部门更准确及时的获取重要行业价格，以便民化、数字化、智能化为基础，通过互联网、4G移动技术、手机App、微信、社区显示牌、公交站点显示屏、电子报刊、电视广播等众多介质，将“价比三家”、“低价导航”、“比价地图”、价格分析和预警等价格信息公共服务，及时向市民公布各行各业价格。
        </div>
        <div class="ContentImg">
          <img src="../../../static/images/companyProducts/priceTwoContent.jpg" alt="">
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
         系统实时获取各行业价格信息，使物价部门更准确及时的获取重要行业价格，以便民化、数字化、智能化为基础，通过互联网、4G移动技术、手机App、微信、社区显示牌、公交站点显示屏、电子报刊、电视广播等众多介质，将“价比三家”、“低价导航”、“比价地图”、价格分析和预警等价格信息公共服务，及时向市民公布各行各业价格；真正让市民做到货比三家、放心消费，企业或商家还可以通过此平台发布商品简介、价格信息、促销活动等信息，供市民免费查看；同时，并可在公众微信平台上进行互动交流，扩大公共信息资源公开范围，助推“阳光物价、服务于民”的发展。
        </div>
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
          <b> 泰安市智慧物价云平台</b>  泰安市智慧物价云平台是泰安市物价局监管下的智慧价格平台。本平台实时获取各行业价格信息，使物价部门更准确及时的获取重要行业价格，以便民化、数字化、智能化为基础，通过互联网、4G移动技术、手机App、微信、社区显示牌、公交站点显示屏、电子报刊、电视广播等众多介质，将“价比三家”、“低价导航”、“比价地图”、价格分析和预警等价格信息公共服务，及时向市民公布各行各业价格；真正让市民做到货比三家、放心消费，企业或商家还可以通过此平台发布商品简介、价格信息、促销活动等信息，供市民免费查看；同时，并可在公众微信平台上进行互动交流，扩大公共信息资源公开范围，助推“阳光物价、服务于民”的发展，进而为政府职能部门改善民生、完善价格监测网络、维护市场价格秩序、促进社会和谐发展提供科学的决策依据。
        </div>
        <div class="ContentImg caseImg">
          <img src="../../../static/images/companyProducts/priceThreeContent.png" alt="">
        </div>
        <!-- eslint-enable -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareProductFour',
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
