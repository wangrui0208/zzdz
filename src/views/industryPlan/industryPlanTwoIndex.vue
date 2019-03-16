<template>
  <div class="industryPlanTwoIndex">
    <div class="industryPlanTwoIndexList">
      <ul>
        <li
          v-for="(item,key) in titleList"
          :key="item.id"
          :class="selectedColor[key]"
          @click="jump(key)"
        >
          <span class="hideKey">{{key}}</span>
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="GovermentModel currency" :style="{display:selectStyle[0]}">
      <div class="titleImg">
        <img src="../../../static/images/industryPlan/industryPlanGovernment.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>政府行业方案</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in goverment"
          :key="item.id">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
              <span class="hideKey">{{key}}</span>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="FinanceModel currency" :data="select" :style="{display:selectStyle[1]}">
      <div class="titleImg">
        <img src="../../../static/images/industryPlan/industryPlanFinance.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>金融行业方案</b>
      </div>
      <div class="nodata">暂无数据</div>
    </div>
    <div class="EducationModel currency" :style="{display:selectStyle[2]}">
      <div class="titleImg">
        <img src="../../../static/images/industryPlan/industryPlanGovernment.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>教育行业方案</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in education"
          :key="item.id">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
              <span class="hideKey">{{key}}</span>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="EnterpriseModel currency" :style="{display:selectStyle[3]}">
      <div class="titleImg">
        <img src="../../../static/images/industryPlan/industryPlanenterprise.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>企业行业方案</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in enterprise"
          :key="item.id">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
              <span class="hideKey">{{key}}</span>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="MedicalModel currency" :style="{display:selectStyle[4]}">
      <div class="titleImg">
        <img src="../../../static/images/industryPlan/industryPlanMedical.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>医疗行业方案</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in Medical"
          :key="item.id"
        >
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img">
              <span class="hideKey">{{key}}</span>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="muiFooter">
              <h1>{{item.title}}</h1>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="number">
      <span class="numberLeft">&lt;</span>
      <span>1</span>
      <span class="numberRight">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'industryPlanTwoIndex',
  data() {
    return {
      titleList: ['政府', '金融', '教育', '企业', '医疗'],
      clickTitle: 'clickClass',
      NoClickTilte: 'NoClickClass',
      selectedColor: ['click', 'NoClick', 'NoClick', 'NoClick', 'NoClick'],
      selectStyle: ['inline', 'none', 'none', 'none', 'none'],
      goverment: [{
        img: './static/images/industryPlan/govermentOne.png',
        title: '泰安市林业局网络及视频会议系统',
        date: '/ 2017-03-07',
      },
      {
        img: './static/images/industryPlan/govermentTwo.jpg',
        title: '新泰市政府电子政务云计算平台 整体规划建设方案',
        date: '/ 2017-01-24',
      },
      {
        img: './static/images/industryPlan/govermentThree.jpg',
        title: '泰安中级人民法院备份系统及容灾方案',
        date: '/ 2017-01-24',
      }],
      education: [{
        img: './static/images/industryPlan/educationOne.jpg',
        title: '泰安一中智慧校园云平台技术解决方案',
        date: '/ 2017-01-24',
      },
      {
        img: './static/images/industryPlan/educationTwo.png',
        title: '泰山职业护理学院技术方案',
        date: '/ 2017-01-24',
      }],
      enterprise: [{
        img: './static/images/industryPlan/enterpriseOne.jpg',
        title: '桌面虚拟化项目 技术方案',
        date: '/ 2017-01-24',
      }],
      Medical: [{
        img: './static/images/industryPlan/MedicalOne.png',
        title: '泰安市中医医院云平台建设方案',
        date: '/ 2017-03-07',
      }],
      select: [],
      number: '',
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      const self = this;
      this.number = self.$route.params.number;
      if (this.number === 3) {
        this.select = self.$route.params.Education;
      } else if (this.number === 1) {
        this.select = self.$route.params.Finance;
      } else if (this.number === 2) {
        this.select = self.$route.params.Enterprise;
      } else if (this.number === 4) {
        this.select = self.$route.params.Medical;
      } else if (this.number === 0) {
        this.select = self.$route.params.Government;
      }
      this.selectedColor = this.select[0].selectedColor;
      this.selectStyle = this.select[0].selectStyle;
    },
    jump(index) {
      if (index === 0) {
        this.selectedColor = ['click', 'NoClick', 'NoClick', 'NoClick', 'NoClick'];
        this.selectStyle = ['inline', 'none', 'none', 'none', 'none'];
      } else if (index === 1) {
        this.selectedColor = ['NoClick', 'click', 'NoClick', 'NoClick', 'NoClick'];
        this.selectStyle = ['none', 'inline', 'none', 'none', 'none'];
      } else if (index === 2) {
        this.selectedColor = ['NoClick', 'NoClick', 'click', 'NoClick', 'NoClick'];
        this.selectStyle = ['none', 'none', 'inline', 'none', 'none'];
      } else if (index === 3) {
        this.selectedColor = ['NoClick', 'NoClick', 'NoClick', 'click', 'NoClick'];
        this.selectStyle = ['none', 'none', 'none', 'inline', 'none'];
      } else if (index === 4) {
        this.selectedColor = ['NoClick', 'NoClick', 'NoClick', 'NoClick', 'click'];
        this.selectStyle = ['none', 'none', 'none', 'none', 'inline'];
      }
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.click {
  color: #1b77e6;
}
.NoClick {
  color: #000;
}

/* title设置 */
.industryPlanTwoIndexList {
  font-size: 0px;
}
.industryPlanTwoIndexList ul li {
  font-size: 16px;
  display: inline-block;
  width: 20%;
  text-align: center;
  height: 55px;
  /* border:1px solid red; */
  line-height: 55px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
  letter-spacing: 2px;
}
.industryPlanTwoIndexList ul li:nth-child(1) {
  border-left: none;
}
.hideKey {
  display: none;
}

/* 政府列表设置 */
.titleImg img {
  width:100%;
  height:120px;
}


/* 公司新闻title */
.ContentTitle {
  margin: 20px 10px;
  height: 30px;
  line-height: 35px;
  position: relative;
}
.ContentTitle span {
  display: inline-block;
  width: 5px;
  height: 100%;
  background: #2393fd;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5px;
}
.ContentTitle b {
  margin-left: 10px;
  font-weight: normal;
  font-size: 18px;
}

.currency {
  margin: 10px 0px;
}
.muiCard {
  margin: 22px 10px;
  border-top: 2px solid #eaeaea;
  height: 60px;
  padding-top: 10px;
}
.muiCard div {
  display: inline-block;
}
/* 图片设置 */
.muiContent {
  width: 30%;
}
.muiContent img {
  width: 100%;
}
/* 标题设置 */
.muiFooter {
  width: 65%;
  margin-left: 10px;
  height: 100%;
  position: relative;
}
.muiFooter h1 {
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  top: 6px;
  line-height: 1.8em;
  letter-spacing: 1px;
}
.muiFooter .date {
  font-size: 12px;
  color: #333;
  position: absolute;
  bottom: 3px;
  right: 0px;
}
.currency ul li:nth-child(1) .muiFooter h1 {
  top: 10px;
}
.currency ul li:nth-child(1) .muiFooter .date {
  bottom: -10px;
}
.currency {
  margin-bottom: 50px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}


/* 金融，暂无数据 */
.nodata {
  margin:10px;
  color:#666;
  margin-bottom:30px;
  letter-spacing: 1px;
  text-indent: 1em;
}

.number {
  margin:20px 50px 45px 0px;
  float: right;
}
.number .numberLeft,.numberRight {
  display: inline-block;
  width:20px;
  height:25px;
  border:1px solid #2E7EB3;
  text-align: center;
  line-height: 25px;
}
.number span:nth-child(2) {
  display: inline-block;
  width:20px;
  height:25px;
  text-align: center;
  line-height: 25px;
  background: #2E7EB3;
  color:#fff;
  font-weight: 600;
}
</style>
