<template>
  <div class="industryDynamicsOne">
    <div class="industryDynamicsOneTitle">
      <h1>国务院印发《关于深化“互联网+先进制造业”发展工业互联网的指导意见》</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2017-11-28</div>
      <hr />
    </div>
    <!-- eslint-disable -->
    <div class="industryDynamicsOneContent">
      <p>经李克强总理签批，国务院日前印发《关于深化“互联网+先进制造业”发展工业互联网的指导意见》（以下简称《意见》）。</p>
      <p>《意见》指出，要深入贯彻落实党的十九大精神，以全面支撑制造强国和网络强国建设为目标，围绕推动互联网和实体经济深度融合，聚焦发展智能、绿色的先进制造业，构建网络、平台、安全三大功能体系，增强工业互联网产业供给能力，持续提升我国工业互联网发展水平，深入推进“互联网+”，形成实体经济与网络相互促进、同步提升的良好格局，有力推动现代化经济体系建设。</p>
      <p>《意见》提出三个阶段发展目标：到2025年，覆盖各地区、各行业的工业互联网网络基础设施基本建成，工业互联网标识解析体系不断健全并规模化推广，基本形成具备国际竞争力的基础设施和产业体系；到2035年，建成国际领先的工业互联网网络基础设施和平台，工业互联网全面深度应用并在优势行业形成创新引领能力，重点领域实现国际领先；到本世纪中叶，工业互联网创新发展能力、技术产业体系以及融合应用等全面达到国际先进水平，综合实力进入世界前列。</p>
      <p>《意见》明确了建设和发展工业互联网的主要任务：一是夯实网络基础，推动网络改造升级提速降费，推进标识解析体系建设。二是打造平台体系，通过分类施策、同步推进、动态调整，形成多层次、系统化的平台发展体系，提升平台运营能力。三是加强产业支撑，加大关键共性技术攻关力度，加快建立统一、综合、开放的工业互联网标准体系，提升产品与解决方案供给能力。四是促进融合应用，提升大型企业工业互联网创新和应用水平，加快中小企业工业互联网应用普及。五是完善生态体系，建设工业互联网创新中心，有效整合高校、科研院所、企业创新资源，开展工业互联网产学研协同创新，构建企业协同发展体系，形成中央地方联动、区域互补的协同发展机制。六是提升安全防护能力，建立数据安全保护体系，推动安全技术手段建设。七是推动开放合作，鼓励国内外企业跨领域、全产业链紧密协作。《意见》还部署了7项重点工程：工业互联网基础设施升级改造工程，工业互联网平台建设及推广工程，标准研制及试验验证工程，关键技术产业化工程，工业互联网集成创新应用工程，区域创新示范建设工程，安全保障能力提升工程。</p>
      <p>《意见》提出，要建立健全法规制度；扩大市场主体平等进入范围，实施包容审慎监管，营造良好市场环境；重点支持网络体系、平台体系、安全体系能力建设，加大财税支持力度；支持扩大直接融资比重，创新金融服务方式；强化专业人才支撑，创新人才使用机制；健全组织实施机制，促进工业互联网与“中国制造2025”协同推进，为工业互联网快速发展提供支撑保障。</p>
      <!-- eslint-enable -->
    </div>
     <div class="Hyperlink">
      <div>
        <router-link to="./industryDynamicsTwo">上一篇:第四届农业大数据产业技术创新联盟年会暨学术交流会在湖州隆重召开</router-link>
      </div>
      <div>
        <div>下一篇:没有了</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'industryDynamicsOne',
};
</script>

<style scoped>
.industryDynamicsOne {
  margin: 10px 10px;
}
/* title */
.industryDynamicsOneTitle {
  text-align: center;
}
.industryDynamicsOneTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.industryDynamicsOneTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.industryDynamicsOneTitle div {
  font-size: 14px;
  margin-bottom: 10px;
}

/* content */
.industryDynamicsOneContent {
  margin-bottom:30px;
}
.industryDynamicsOneContent img {
  width: 100%;
}
.industryDynamicsOneContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 5px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.industryDynamicsOneContent p:nth-child(1) {
  margin-bottom:15px;
}
.industryDynamicsOneContent p.imgBottom {
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
