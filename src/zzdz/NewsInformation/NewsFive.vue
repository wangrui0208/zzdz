<template>
  <div class='NewsFour'>
    <div class='NewsFourTitle'>
      <h1>市委常委、秘书长宋洪银走访慰问国家“万人计划”专家、山东众志电子董事长李松和</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2019-01-26</div>
      <hr />
    </div>
    <div class='NewsFourContent'>
      <!-- eslint-disable -->
      <p>1月26日，市委常委、秘书长宋洪银一行走访慰问国家“万人计划”专家、泰山英才领军人才、山东众志电子有限公司董事长李松和。</p>
      <p class="imgTop">高新区党工委委员、管委会调研员李景文，党工委委员、人事劳动局局长王海涛、管委会办公室主任李劲、山东众志电子有限公司总经理武传涛等参加活动。</p>
      <div class="NewsFourimgList">
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
      <p class="mgBottom">李景文主持座谈会。李松和对宋洪银一行的到来表示感谢。他介绍了近期泰山神农智谷招商建设、国产操作系统开发、中韩合作的半导体材料生产和云平台创新应用方面取得的成绩。他说，泰山神农智谷已进入大建设、大引进阶段，目前已与华为、腾讯、中软国际等知名企业确定合作关系。泰山国心自主可控国产操作系统的开发得到了倪光南院士的大力支持，高新区政管委会对此项目高度重视，泰山国心去年8月落地高新区后与华为taishan超级服务器建立合作，12月开始申报入围“山东省大科学计划”项目。该项目受到了山东省科技厅的高度关注和重点支持。中韩合作的半导体材料生产项目技术水平位居国际前列，将填补国内半导体行业的空白，通过引进韩国高端技术专家，项目已经取得快速进展。</p>
      <p class="mgTop">李松和表示，信息技术产业以人才为核心，作为泰安市领军人才将有所担当、有所作为，为打造泰安市信息产业链出贡献力量。</p>
      <div class="NewsFourimgList">
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
      <p class="imgTop imgBottom">宋洪银表示此次走访是向专家人才表示慰问，市委市政府将协调解决专家人才和企业发展中遇到的难题。他说，市委市政府非常重视专家人才和企业发展，当前新旧动能转换、科技创新、互联网+的落地都需要信息技术产业的推动，而信息产业的发展离不开高端人才的支撑。他要求，我们要引进外来人才，同时要管好、用好现有人才，市委市政府将全力支持高端人才创新创业。宋洪银提出要给予高端人才政策支持、资金支持、市场支持、环境支持，人才配套支持，如子女入学、工作、医疗等各方面都予以关注。他对泰山国心自主可控操作系统立足信息安全的产业站位和研发推广情况表示高度肯定。他希望高新区管委会给予更多的政策支持，使泰山国心操作系统在高新区和泰安市首先全面推广。他勉励泰山国心要为提高国家信息安全做出不懈努力。</p>
      <div class="NewsFourimgList">
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
      <p class='imgTop imgBottom'>李景文汇报了泰安高新区泰山国心国产操作系统自主可控先行示范区的推进情况和“山东省大科学计划”申报以及泰山国心与山东省科技厅的合作情况。他表示高新区将通过坚持政策支持、资金支持、市场支持、环境支持打造一个留心、留人的创新创业环境。</p>
      <div class="NewsFourimgList">
        <ul>
          <li
            v-for="(item,key) in imgListFour"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class='imgBottom'>最后，宋洪银向李松和赠送慰问品。</p>
      <p>市委办公室会议活动科科长武金鹏，市委办公室杜亚飞、高新区人事劳动局有关负责人陪同参加慰问活动。</p>
    </div>
     <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./NewsFive">上一篇:没有了</router-link>
      </div>
      <div>
        <router-link to="./NewsFour">下一篇:山东众志电子2018年众志成城总结大会召开</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsFour',
  data() {
    return {
      imgListOne: [{
        img: '../../static/images/newsInformation/companyNews51.jpg', explain: '',
      },
      {
        img: '../../static/images/newsInformation/companyNews52.jpg', explain: '',
      }],
      imgListTwo: [{
        img: '../../static/images/newsInformation/companyNews53.jpg', explain: '',
      }],
      imgListThree: [{
        img: '../../static/images/newsInformation/companyNews54.jpg', explain: '',
      }],
      imgListFour: [{
        img: '../../static/images/newsInformation/companyNews55.jpg', explain: '',
      }],
    };
  },
};
</script>

<style scoped>
.NewsFour {
  margin: 20px 15px;
}
/* title */
.NewsFourTitle {
  text-align: center;
}
.NewsFourTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.NewsFourTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.NewsFourTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.NewsFourContent {
  margin-bottom: 30px;
}
.NewsFourContent img {
  width: 100%;
}
.NewsFourContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.NewsFourContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top: 25px;
}
.NewsFourContent p.imgTop {
  margin-bottom: 25px;
}
.NewsFourContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display: none;
}

/* 图片列表设置 */
.NewsFourimgList ul li {
  text-align: center;
}
.NewsFourimgList ul li img {
  width: 95%;
}
.NewsFourimgList ul li div.explain {
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
