<template>
  <div class='industryDynamics'>
    <div class='industryDynamicsTitle'>
      <h1>山东农业大学刘福胜院长带领部分骨干教师赴山东众志电子有限公司参观</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2017-02-04</div>
      <hr />
    </div>
    <div class='industryDynamicsContent'>
      <!-- eslint-disable -->
      <p class="imgTop">9月24日，山东农业大学水利土木工程学院院长刘福胜带领学院部分博士骨干教师一行22人到山东众志电子有限公司参观座谈，深入了解泰安市云计算中心云计算、大数据和物联网技术的实际应用情况。山东众志电子有限公司董事长李松和、副总经理王翀等陪同参观。</p>
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
      <p class="imgTop imgBottom">刘福胜一行参观了泰安市云计算中心创新应用展厅。王翀介绍了泰安市云计算中心当前的创新平台应用，并对大家关注的智慧物价云平台、智慧食药品追溯云平台和农业大数据的发展情况等进行了重点讲解。</p>
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
      <p class="imgTop imgBottom">座谈会上，董事长李松和全面介绍了山东众志电子有限公司以及泰安市云计算中心的建设发展情况。他说，泰安市云计算中心自成立以来将“接地气、重应用”作为指导思想，截至目前已经在电子政务、智慧民生等领域取得了显著成绩。2015年又抓住大数据产业发展的重要机遇，联合泰安高新技术产业开发区、山东农业大学、上海市数据科学重点实验室建设泰山神农智谷大数据产业园区，这标志着公司发展又进入一个新阶段。神农智谷大数据产业园已经与国内外知名厂商，如甲骨文、微软、华为、浪潮、九次方大数据等知名公司建立合作关系。</p>
      <div class="industryDynamicsimgList">
        <ul>
          <li
            v-for="(item,key) in imgListThree"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class='imgBottom'>刘福胜表示，希望通过此次参观交流广大教师能够了解云计算、大数据等产业的发展现状，给学院学科设置和教学方向提供更多指导。他对山东众志电子有限公司在云计算和大数据产业上取得的成绩给予充分赞扬。在谈到水利和建筑大数据时，他说学院与众志电子公司具备很好的合作基础，希望借鉴泰安市云计算中心落地项目和大数据发展的宝贵经验，与政府主管部门积极对接做好水利和建筑大数据设计规划。他详细阐述了水利大数据对于城市生活、生产和产业结构调整、生态发展的重要意义。他说，城市生活离不开水利大数据，水利大数据不仅可以解决城市发展和科学管理的问题，对工业发展的耗水量分析、堤坝防汛等自然灾害的预警、防御、水利灌溉、发展节水农业等意义重大。众志电子在云计算、大数据应用方面起步早，已经形成了比较完善的商业运作模式，希望今后双方进一步沟通，就建立水利大数据平台做进一步探讨。</p>
      <p>刘福胜建议，泰山神农智谷大数据产业园在从事养殖、种植等领域大数据研究应用的同时，可以将农业大数据进行全面规划，实现包括“农、林、牧、副、渔”在内的农业大数据的汇总、分析和利用。</p>
    </div>
     <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./industryDynamicsFive">上一篇:没有了</router-link>
      </div>
      <div>
        <router-link to="./industryDynamicsFour">下一篇:山东省农业厅副巡视员姜卫良到山东众志电子有限公司参观指导</router-link>
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
        img: '../../static/images/newsInformation/industryDynamics51.png', explain: '',
      }],
      imgListTwo: [{
        img: '../../static/images/newsInformation/industryDynamics52.png', explain: '刘福胜院长参观物联网产品生产车间',
      },
      {
        img: '../../static/images/newsInformation/industryDynamics53.png', explain: '',
      }],
      imgListThree: [{
        img: '../../static/images/newsInformation/industryDynamics54.png', explain: '',
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
