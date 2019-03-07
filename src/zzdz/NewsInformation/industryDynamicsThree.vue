<template>
  <div class='industryDynamics'>
    <div class='industryDynamicsTitle'>
      <h1>神农智谷产业园董事长李松和出席中英农业科技创新合作对接会</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2017-07-04</div>
      <hr />
    </div>
    <div class='industryDynamicsContent'>
      <!-- eslint-disable -->
      <p> 2017年7月4日，中英农业科技创新合作对接会在北京隆重举行。</p>
      <p>中国科技部、英国创新署、英国驻华使馆、中国科学院、中国农村技术开发中心、中国农业科学院、北京市农林科学院和北京大学、中国农业大学、山东农业大学等国内知名高校科研院所领导以及中英企业代表等出席本次会议。山东神农智谷产业园管理有限公司董事长李松和受邀参加会议。</p>
      <p>本次会议是为促进中英农业领域的科技创新合作，促进两国农业科技领域的大学、企业和科研机构交流合作、建立伙伴关系。会议由中国科技部与英国创新署主办，中国农村技术开发中心、英国驻华使馆、英国知识转移网络承办的农业创新合作对接会。会议聚焦精准农业与农业信息化、农业高效生产、农产品加工三个领域，为参会专家提供高效的对接平台。</p>
      <p class="imgTop"> 泰山神农智谷大数据产业园顺应大数据产业的发展趋势和国家产业政策应运而生，也是山东众志电子有限公司积极进行产业布局，整合国内外科研院所和高校资源的重要成果，园区的规划建设得到了国家农业部、科技部以及省市各级政府的关注。2016年，园区被写入《泰安市人民政府办公室关于加快推进云计算和大数据创新发展的实施意见》、《泰安市软件和信息技术服务业转型升级实施方案》和《山东省“十三五”服务业发展规划》。</p>
      <div class="industryDynamicsimgList">
        <ul>
          <li
            v-for="(item,key) in imgListOne"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class="imgBottom">会上，李松和做了《中英农业科技创新对接会项目报告》，内容包括园区总体介绍、大数据平台运营情况、与英方合作框架、成果展望等。他说，当前园区运营有智慧农业、智慧城市、智慧交通等十二大云平台。其中，奶牛数字化精准养殖系统、现代奶业大数据平台、农业用水综合管理大数据平台等利用“物联网+云计算+大数据”技术，将农民以往靠天靠经验的传统经营方式逐步转变为智能养殖、种植，使政府主管部门具备了“数字化、规律化”的科学管理和决策依据，大数据技术已逐步成为提高行业管理水平的重要手段，真正实现了科技惠民、科技利民。</p>
      <p class="imgTop">会后，李松和与英国精准农业工程创新中心/克兰菲尔德大学Andrew J. Thompson教授、英国精准农业工程创新中心/斯特拉斯克莱德大学闫秀天教授进行深入交流，就成果共建（联合山东农业大学共建大数据应用实验室、农业大数据研究院）、大数据示范与技术转移、推动大数据产业形成等达成共识。</p>
      <div class="industryDynamicsimgList">
        <ul>
          <li
            v-for="(item,key) in imgListTwo"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class="imgBottom">参加此次会议的有中粮营养健康研究院、山东省农业科学院、国家航空植保科技创新联盟、浙江大学、南京农业大学、华中农业大学等国内知名高校专家代表。英国CABI/作物健康与保护创新中心、卡迪夫大学、精准农业工程创新中心/克兰菲尔德大学、洛桑研究院、林肯大学、Benchmark控股公司、玛氏公司等国际知名高校、科研院所专家和企业负责人等参加此次对接会。</p>
    </div>
     <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./industryDynamicsFour">上一篇:副省长赵润田到山东成城物联网公司示范牧场调研指导</router-link>
      </div>
      <div>
        <router-link to="./industryDynamicsTwo">下一篇:第四届农业大数据产业技术创新联盟年会暨学术交流会在湖州隆重召开</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'industryDynamics',
  data() {
    return {
      imgListOne: [{
        img: '../../static/images/newsInformation/industryDynamics31.jpg', explain: '',
      }],
      imgListTwo: [{
        img: '../../static/images/newsInformation/industryDynamics32.jpg', explain: '',
      },
      {
        img: '../../static/images/newsInformation/industryDynamics33.jpg', explain: '',
      }],
    };
  },
};
</script>

<style scoped>
.industryDynamics {
  margin: 20px 15px;
}
/* title */
.industryDynamicsTitle {
  text-align: center;
}
.industryDynamicsTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.industryDynamicsTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.industryDynamicsTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.industryDynamicsContent {
  margin-bottom: 30px;
}
.industryDynamicsContent img {
  width: 100%;
}
.industryDynamicsContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.industryDynamicsContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top: 25px;
}
.industryDynamicsContent p.imgTop {
  margin-bottom: 25px;
}
.industryDynamicsContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display: none;
}

/* 图片列表设置 */
.industryDynamicsimgList ul li {
  text-align: center;
}
.industryDynamicsimgList ul li img {
  width: 95%;
}
.industryDynamicsimgList ul li div.explain {
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 5px 0px 20px 0px;
}

/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 10px;
}
.Hyperlink div a {
  color: #666;
  font-size: 14px;
}
p {
  line-height: 1.8em;
}
</style>
