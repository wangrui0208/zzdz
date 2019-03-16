<template>
  <div class="companyProfile">
    <div class="companyProfileTitle">
      <h1>公司简介</h1>
      <a href="#"><span>>></span></a>
    </div>
    <div class="companyProfileContent">
      <!-- eslint-disable -->
      <p>
        山东众志电子有限公司（以下简称“公司”）是国家高新技术企业，位于泰安国家高新技术产业开发区。公司以云计算创新行业应用、物联网产品研发与应用、大数据、城市一卡通、软件开发与服务为主要业务，是<b class="Ellipsis" :style="{display:show[0]}">...</b>
        <span
          class="detailedIntroduction"
          @click="showContent" :style="{display:show[1]}"
        >[ 详细介绍 ]</span>
        <span class="hideContent" :style="{display:show[2]}">信息化综合解决方案提供商和区域领先的云计算运营服务商、智慧城市建设运营商。公司通过ISO9001国际质量管理体系认证，获得国家信息系统集成及服务三级资质、涉密信息系统集成和运维乙级资质、山东省安全技术防范工程设计施工一级资质，国家信息技术服务标准认证（ITSS）二级资质，获得ISP和IDC运营牌照，是山东省首批工信部认证的“两化融合管理体系贯标咨询服务机构”“山东省企业上云行业云平台服务商”。</span>
        <span
          class="SecondHideContent"
          @click="hideContent" :style="{display:show[3]}"
        >[ 收起 ]</span>
      </p>
      <!-- eslint-disable -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyProfile',
  data() {
    return {
      isTrue: 'addClassNone',
      isFalse: 'addClassInline',
      show: ['inline', 'inline', 'none', 'none'],
    };
  },
  methods: {
    showContent() {
      this.show = ['none', 'none', 'inline', 'inline'];
    },
    hideContent() {
      this.show = ['inline', 'inline', 'none', 'none'];
    },
  },
};
</script>

<style scoped>
/* 设置全局样式 */
.companyProfile {
  font-family: "Microsoft yahei";
  font-size: 14px;
  padding-bottom: 10px;
}
/* 设置标题样式 */
.companyProfileTitle {
  background: #f8f8f8;
  height: 40px;
  line-height: 40px;
  margin:15px 0px;
}
.companyProfileTitle h1 {
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 78%;
  margin-left: 15px;
}
/* 设置>> */
.companyProfileTitle a span {
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
}

/* 内容设置 */
.companyProfileContent {
  margin: 0 10px;
}
.companyProfileContent p {
  margin-top: 10px;
  font-size: 15px;
  text-indent: 2em;
  color: #666;
  font-family: "Microsoft yahei";
  text-align: justify;
  height:20%;
  line-height: 1.6em;
  letter-spacing: 1px;
}

/* 详细介绍 */
.detailedIntroduction,
.SecondHideContent {
  color: red;
  font-weight: 600;
}

.hideContent {
  display: none;
}

/* 收起 */
.SecondHideContent {
  display: none;
}
</style>
