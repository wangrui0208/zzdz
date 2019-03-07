<template>
  <div class="NewsOne">
    <div class="NewsOneTitle">
      <h1>开门红！山东众志电子签约宿松县保安服务公司“押运综合管理平台”项目</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2019-02-15</div>
      <hr />
    </div>
    <div class="NewsOneContent">
      <p>人勤春来早，奋进喜来报。山东众志电子有限公司签约宿松县保安服务公司“押运综合管理平台”项目，迎来2019新春开门红！</p>
      <img
        src="../../../static/images/newsInformation/companyNews10.jpg"
        alt=""
      >
      <!-- eslint-disable -->
      <p class="imgBottom">据悉，宿松县保安服务公司成立于2005年，是目前安徽宿松县唯一集武装押运（值守）、人防、技防为一体的专业安保服务企业。目前公司具有专业保安员400余人，服务客户涵盖全县城乡机关团体、企事业单位、金融机构、医疗卫生、中小学校等 。</p>
      <p>传统的管理模式和单一的管理系统已无法满足宿松县保安服务公司的业务发展，急需一套整合现有资源并能提升服务水平、保障安全能力、提高经济效益的综合性管理系统。</p>
      <p>山东众志电子有限公司为宿松县保安服务公司打造了金融押运全产业链信息化、智能化的整体解决方案并合作签约。该方案采用物联网RFID溯源技术，结合互联网、移动互联网、生物识别、指纹识别、超高频批量识别技术，主要功能覆盖押运调度管理、枪支物品领用管理、金库款箱出入库管理、车辆在途监控管理、银行网点交接管理、现金库清分管理，形成了一套多系统一体化的综合性管理平台，该平台的应用将大幅提升管理运营水平，降低管理成本，提高工作效率。</p>
      <!-- eslint-enable -->
    </div>
     <div class="Hyperlink">
      <div>
        <router-link to="./NewsTwo">上一篇:初七！山东众志电子举行2019首场新春内部培训活动</router-link>
      </div>
      <div>
        <div>下一篇:没有了</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsOne',
};
</script>

<style scoped>
.NewsOne {
  margin: 10px 10px;
}
/* title */
.NewsOneTitle {
  text-align: center;
}
.NewsOneTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.NewsOneTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.NewsOneTitle div {
  font-size: 14px;
  margin-bottom: 10px;
}

/* content */
.NewsOneContent {
  margin-bottom:30px;
}
.NewsOneContent img {
  width: 100%;
}
.NewsOneContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.NewsOneContent p:nth-child(1) {
  margin-bottom:15px;
}
.NewsOneContent p.imgBottom {
  margin-top:15px;
}

/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top:20px;
  margin-bottom:10px;
}
.Hyperlink div a {
  color:#666;
  font-size: 14px;
}

.Hyperlink div div {
  color:#666;
  font-size: 14px;
  padding-bottom:20px;
}
p {
  line-height: 1.8em;
}
</style>
