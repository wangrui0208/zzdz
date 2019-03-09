<template>
  <div class='industryDynamics'>
    <div class='industryDynamicsTitle'>
      <h1>山东省农业厅副巡视员姜卫良到山东众志电子有限公司参观指导</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2017-02-04</div>
      <hr />
    </div>
    <div class='industryDynamicsContent'>
      <!-- eslint-disable -->
      <p> 10月14日，山东省农业厅副巡视员姜卫良， 省农业信息中心主任任万明来泰安调研农业大数据分中心建设事宜，并到山东众志电子有限公司参观指导。</p>
      <p class="imgTop">山东众志电子有限公司董事长李松和、副总经理王翀等介绍了泰安市云计算中心建设发展、创新应用和泰山神农智谷大数据产业园区的规划建设情况。</p>
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
      <p class="imgBottom">姜卫良一行参观了泰安市云计算中心机房，了解泰安市云计算中心在建设农业大数据分中心方面的承载能力。李松和介绍说，自2011年泰安市云计算中心成立以来，在基础设施、资质建设和平台应用上都形成了自身特色，取得了突出的成绩，并介绍了云计算中心二期扩建的情况。在创新应用展厅，李松和介绍了泰安市云计算中心的创新平台应用情况，包括电子政务云应用、智慧物价、智慧交通和现代奶业等。众志电子技术人员详细介绍了公司进行科技成果转化的国家“863”项目——奶牛数字化精准养殖系统和平台的应用情况，并表示该系统在牧场投入使用后，提高产奶量最高达到30%，并有效保证了奶质， 保障了牧场的收益。姜卫良询问了平台的主要功能、相关技术指标并给予肯定和赞扬。</p>
      <p>在参观期间，姜卫良观看了泰山神农智谷大数据产业园宣传片，了解了园区的规划建设情况，并到园区现场实地参观。</p>
      <p>泰安高新区党工委委员、管委会副主任赵胜，山东农业大学农业大数据研究中心常务副主任宋长青陪同参观。</p>
    </div>
     <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./industryDynamicsFive">上一篇:山东农业大学刘福胜院长带领部分骨干教师赴山东众志电子有限公司参观</router-link>
      </div>
      <div>
        <router-link to="./industryDynamicsThree">下一篇:副省长赵润田到山东成城物联网公司示范牧场调研指导</router-link>
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
        img: '../../../static/images/newsInformation/industryDynamics41.jpg', explain: '',
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
