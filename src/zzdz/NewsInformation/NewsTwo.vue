<template>
  <div class='NewsTwo'>
    <div class='NewsTwoTitle'>
      <h1>初七！山东众志电子举行2019首场新春内部培训活动</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2019-02-12</div>
      <hr />
    </div>
    <div class='NewsTwoContent'>
      <!-- eslint-disable -->
      <p>新春伊始，气象新。</p>
      <p>2月11日，山东众志电子有限公司（以下简称“山东众志电子”）举行 “为笃行助力，为致远加油”的2019新春内部培训。山东众志电子总经理武传涛主持培训会议，各分公司全体员工参加培训。</p>
      <p>“笃行致远，不负芳华”是对山东众志电子2019年发展规划的简明概括。针对公司市场、研发、管理等方面存在的突出问题，山东众志电子确立了以产品思维、平台思维为导向，集中各部门力量，集中优势资源打响产品、平台、市场攻坚战的重要战略。此次内训是为全员练好内功，做好经济和后勤保障，围绕“市场、业绩、质量、服务”做好产品研发工作的重要举措。</p>
      <p class="imgTop">山东众志电子副总经理、市场总监王翀，副总经理、技术总监曹国梁，泰安紫蜂旅游信息技术有限公司总经理、山东众志电子副总经理殷波，山东众志电子财务总监王晓军、山东成城物联网科技股份有限公司常务副总刘继峰、副总经理王猛分别在会上做主题分享。他们围绕各自负责的技术规划、产品研发、市场拓展和财务管理等做专题报告。</p>
      <div class="NewsTwoimgList">
        <ul>
          <li v-for="(item,key) in imgList" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class='imgBottom'>在听取了大家的分享以后，山东众志电子董事长李松和做指导讲话。他对大家提出的合理化建议给予肯定。他说，此次培训是为了让全体员工对公司今年的业务规划和业务发展有更清晰的认识和更深刻的了解。他说，2019年是公司发展的关键之年，是呈现发展成果的重要一年。他提出，山东成城物联网公司正在研发推广的“精牧”系列产品虽然“小众化”，但面对的是奶牛养殖这个重要行业。今后，山东成城物联网要走出去，将产品与更大的平台对接，走向更加广阔的市场。山东众志电子旗下的云平台产品要坚持“向上、向前、向外”走的思路，与国际知名厂商和电信运营商合作。李松和表示，公司管理既要做加法又要做减法，对能够形成市场效益的业务坚持做加法。最后，他勉励大家要坚持赢在团队的精神，激活团队力量，创造英雄团队，“笃行致远”。</p>
      <p>创业之情比金坚，创新之志比钢强。相信2019年，山东众志电子将以更加成熟、稳健和快速的步伐，“不负芳华”，完成公司发展新时期赋予的重大使命！</p>
      <!-- eslint-enable -->
    </div>
    <div class="Hyperlink">
      <div>
        <router-link to="./NewsThree">上一篇:山东众志电子2019“奋斗正当时”颁奖盛典暨迎春晚会盛大启幕</router-link>
      </div>
      <div>
        <router-link to="./NewsOne">下一篇:开门红！山东众志电子签约宿松县保安服务公司“押运综合管理平台”项目</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsTwo',
  data() {
    return {
      imgList: [{
        img: '../../../static/images/newsInformation/companyNews21.jpg', explain: '武传涛主持培训会议',
      },
      {
        img: '../../../static/images/newsInformation/companyNews22.jpg', explain: '王猛做《走出去，我能行》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews23.jpg', explain: '刘继峰做《走出“精牧”步伐，笃行致远》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews24.jpg', explain: '王翀做《笃行致远，不负芳华2019市场规划》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews25.jpg', explain: '殷波做《笃行致远，满怀希望》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews26.jpg', explain: '曹国梁做《向技术要效益，以创新促发展》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews27.jpg', explain: '王晓军做《加强财务管理，提高企业效益》专题分享',
      },
      {
        img: '../../../static/images/newsInformation/companyNews28.jpg', explain: '李松和董事长做指导讲话',
      }],
    };
  },
};
</script>

<style scoped>
.NewsTwo {
  margin: 20px 15px;
}
/* title */
.NewsTwoTitle {
  text-align: center;
}
.NewsTwoTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.NewsTwoTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.NewsTwoTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.NewsTwoContent {
  margin-bottom: 30px;
}
.NewsTwoContent img {
  width: 100%;
}
.NewsTwoContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.NewsTwoContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top:25px;
}
.NewsTwoContent p.imgTop {
  margin-bottom: 25px;
}
.NewsTwoContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display:none
}

/* 图片列表设置 */
.NewsTwoimgList ul li {
  text-align: center;
}
.NewsTwoimgList ul li img {
  width:90%;
}
.NewsTwoimgList ul li div.explain {
  text-align: center;
  font-size:14px;
  color:#666;
  padding:5px 0px 30px 0px;
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

p {
  line-height: 1.8em;
}
</style>
