<template>
  <div class='NewsFour'>
    <div class='NewsFourTitle'>
      <h1>山东众志电子2018年众志成城总结大会召开</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2019-01-27</div>
      <hr />
    </div>
    <div class='NewsFourContent'>
      <!-- eslint-disable -->
      <p>时序更替，华章日新。</p>
      <p class="imgTop">1月27日，山东众志电子有限公司（以下简称“山东众志电子”）2018年众志成城总结大会盛大启幕。山东众志电子旗下各分公司全体员工参加会议，总经理助理刘明主持总结大会。</p>
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
      <p class="imgTop imgBottom">会上，山东众志电子总经理武传涛做了2018年工作总结报告。武传涛从产品研发、资质建设、团队建设、创新业务、市场拓展、党建工作等方面做了总结分析。</p>
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
      <p class="imgTop imgBottom">他以“四个自信”（技术自信、产品自信、市场自信、服务自信）为切入点回顾了2018年山东众志电子的整体发展情况。他总结了方案中心创新方案的支撑情况，指出运维中心和集客中心的客户满意度达到了99%，为公司的服务品牌建设提供了坚强的保障。他以详实的数据分析了业务结构变化和团队工作的完成情况。</p>
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
      <p class='imgBottom'>总结会上，山东众志电子市场、研发和技术一线员工代表做了发言，他们总结了各自的工作，分享了自己未来的工作计划。市场部员工代表在发言中说，要努力做一支具有顽强战斗力的团队，做一支剑锋所指、所向披靡的团队。研发部员工代表感恩公司提供的施展才华的平台，促进了个人的快速成长。</p>
      <p class='imgTop'>未来可期，砥砺前行。山东众志电子董事长李松和就2019年公司发展规划做了题为《笃行致远，不负芳华》的重要报告。</p>
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
      <p class='imgBottom'>规划报告指出了发展过程中存在的问题、面临的挑战，简要回顾了山东众志电子2018年的战略合作和业务发展，详细阐述了2019年的发展规划。2018年山东众志电子进军国产化操作系统，并在短期内取得快速推进；泰山神农智谷大数据产业园与华为、腾讯、中软国际等知名企业确定合作关系，并开始落地合作。新成立的大树培训学校已正式运营。山东众志电子实现了在全国的市场布局，智慧金融安全云管理平台推广到河北、安徽等多个省份，成城物联网公司研发的“精牧”奶牛数字化系列产品也推广到拉萨、内蒙等全国多个省区。</p>
      <p>李松和指出，现在山东众志电子正在处于突破期和高速成长期。2019年公司将在部门设置、激励措施等方面做出重大调整。他说，公司虽然位于泰安，但已经获取了一线城市的优势资源，正在创新一线城市的业务，今后要以平台思维、产品思维为指导，抢抓现有机遇，努力开拓市场，争做平台型企业。</p>
      <p>李松和鼓励广大员工要时刻保持一颗敢担当、敢拼搏、能创新的精神，每天努力一点点，打赢产品、平台、市场攻坚战。</p>
      <p class="imgTop">为全面完成2019年的销售任务，确保各项业务落地，山东众志电子从市场拓展、产品研发、后勤服务、资金保障等进行层层分解，确定了全年任务。</p>
      <div class="NewsFourimgList">
        <ul>
          <li
            v-for="(item,key) in imgListFive"
            :key="item.id"
          >
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class='imgBottom'>签订任务书后，总经理武传涛为公司管理层员工颁发了军令状，并发布动员令。</p>
      <p>笃行致远，不负芳华。向阳而生勇毅笃行的众志人将在奋斗中把握未来，在持续创新中坚守梦想。</p>
    </div>
     <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./NewsFive">上一篇:市委常委、秘书长宋洪银走访慰问国家“万人计划”专家、山东众志电子董事长李松和</router-link>
      </div>
      <div>
        <router-link to="./NewsThree">下一篇:山东众志电子2019“奋斗正当时”颁奖盛典暨迎春晚会盛大启幕</router-link>
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
        img: '../../static/images/newsInformation/companyNews41.jpg', explain: '',
      }],
      imgListTwo: [{
        img: '../../static/images/newsInformation/companyNews42.jpg', explain: '',
      }],
      imgListThree: [{
        img: '../../static/images/newsInformation/companyNews43.jpg', explain: '员工代表分享',
      }],
      imgListFour: [{
        img: '../../static/images/newsInformation/companyNews44.jpg', explain: '李松和董事长做2019年公司发展报告',
      }],
      imgListFive: [{
        img: '../../static/images/newsInformation/companyNews45.jpg', explain: '公司各业务负责人签订2019年任务书',
      },
      {
        img: '../../static/images/newsInformation/companyNews46.jpg', explain: '',
      },
      {
        img: '../../static/images/newsInformation/companyNews47.jpg', explain: '',
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
