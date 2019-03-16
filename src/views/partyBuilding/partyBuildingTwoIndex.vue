<template>
  <div class="partyBuildingTwoIndex">
    <div class="partyBuilding">
      <div class="myHeaderLogo">
        <div>
          <router-link to="/MainIndex"> <img src="../../assets/images/logo.jpg"></router-link>
        </div>
      </div>
      <div class="partyBuildingList">
        <ul>
          <li
            v-for="(listItem,key) in TitleList"
            :key="listItem.id" @click="jump(key)" :class="selectedColor[key]"
          >
            <span class="hideKey">{{key}}</span>
            <span>{{listItem}}</span>
          </li>
        </ul>
      </div>
      <div class="partyBuildingTitleImg">
        <img
          src="../../../static/images/partyBuilding/partyBuildingTitle.jpg"
          alt=""
        >
      </div>
    </div>
    <div class="Survey currency" :style="{display:selectStyle[0]}">
      <div class="ContentTitle">
        <span></span>
        <b>支部概况</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in Survey"
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
    <div class="dynamic currency" :style="{display:selectStyle[1]}">
      <div class="ContentTitle">
        <span></span>
        <b>支部动态</b>
      </div>
      <ul :style="{display:selectPage[0]}">
        <li
          v-for="(item,key) in dynamic[0]"
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
      <ul :style="{display:selectPage[1]}">
        <li
          v-for="(item,key) in dynamic[1]"
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
    <div class="Elegance currency" :style="{display:selectStyle[2]}">
      <div class="ContentTitle">
        <span></span>
        <b>党员风采</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in Elegance"
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
    <div class="Communication currency" :style="{display:selectStyle[3]}">
      <div class="ContentTitle">
        <span></span>
        <b>学习交流</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in Communication"
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
      <span class="numberLeft" @click="prePage">&lt;</span>
      <span class="figure" @click="prePage" :class="pageColor[0]">1</span>
      <span class="figure" :style="{display:page}" @click="nextPage" :class="pageColor[1]">2
      </span>
      <span class="numberRight" @click="nextPage">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partyBuildingTwoIndex',
  data() {
    return {
      TitleList: ['支部概况', '支部动态', '党员风采', '学习交流'],
      selectedColor: ['click', 'NoClick', 'NoClick', 'NoClick'],
      selectStyle: ['inline', 'none', 'none', 'none'],
      selectPage: ['inline', 'none'],
      pageColor: ['now', 'NoNow'],
      page: 'none',
      Survey: [{
        img: './static/images/partyBuilding/partyBuildingOne.png',
        title: '支部概况',
        date: '/ 2018-12-10',
      }],
      dynamic: [[{
        img: './static/images/partyBuilding/partyBuildingTwo1.jpg',
        title: '传承红色基因，争做时代新人：山东众志电子党支部重温老山精神',
        date: '/ 2018-11-04',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo2.jpg',
        title: '以党建促发展：山东众志电子举行“庆祝建党97周年暨争当创新先锋主题教育活动”',
        date: '/ 2018-07-01',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo3.jpg',
        title: '缅怀革命先烈 ，重温入党誓词 ——山东众志电子七一建党节赴莱芜战役纪念馆参观学习',
        date: '/ 2017-07-01',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo4.jpg',
        title: '山东众志电子总经理武传涛出席山东省第十一次党代会',
        date: '/ 2017-06-16',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo5.jpg',
        title: '让党旗熠熠生辉：中共山东众志电子有限公司支部委员会召开专题组织生活和民主评议党员会议',
        date: '/ 2017-03-11',
      }],
      [{
        img: './static/images/partyBuilding/partyBuildingTwo21.jpg',
        title: '【时局观】开展“两学一做”学习教育要坚持哪些原则？',
        date: '/ 2017-01-17',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo22.jpg',
        title: '【心得】“两学一做”，关键要“率、带、创”',
        date: '/ 2017-01-17',
      },
      {
        img: './static/images/partyBuilding/partyBuildingTwo23.jpg',
        title: '【两学一做】以改革创新精神补齐党内制度短板',
        date: '/ 2017-01-17',
      }]],
      Elegance: [{
        img: './static/images/partyBuilding/partyBuildingThree1.jpg',
        title: '山东众志电子总经理武传涛出席山东省第十一次党代会',
        date: '/ 2017-06-16',
      },
      {
        img: './static/images/partyBuilding/partyBuildingThree2.jpg',
        title: '庆祝中国共产党建党95周年 党员宣誓',
        date: '/ 2017-01-21',
      }],
      Communication: [{
        img: './static/images/partyBuilding/partyBuildingFour1.jpg',
        title: '党支部建设为什么重要？习近平总书记这样说',
        date: '/ 2018-12-11',
      },
      {
        img: './static/images/partyBuilding/partyBuildingFour2.jpg',
        title: '【学思】党的凝聚力和战斗力来自哪里',
        date: '/ 2018-11-28',
      },
      {
        img: './static/images/partyBuilding/partyBuildingFour3.jpg',
        title: '【深度】新时代中国特色社会主义是伟大社会革命的继续',
        date: '/ 2018-11-07',
      },
      {
        img: './static/images/partyBuilding/partyBuildingFour4.jpg',
        title: '【回望】这些十九大报告“新词”已深入人心',
        date: '/ 2018-10-26',
      },
      {
        img: './static/images/partyBuilding/partyBuildingFour5.jpg',
        title: '为什么要爱国？这是习近平的答案',
        date: '/ 2018-10-08',
      }],
    };
  },
  methods: {
    jump(index) {
      if (index === 0) {
        this.selectedColor = ['click', 'NoClick', 'NoClick', 'NoClick', 'NoClick'];
        this.selectStyle = ['inline', 'none', 'none', 'none', 'none'];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      } else if (index === 1) {
        this.selectedColor = ['NoClick', 'click', 'NoClick', 'NoClick', 'NoClick'];
        this.selectStyle = ['none', 'inline', 'none', 'none', 'none'];
        this.page = 'inline-block';
        this.selectPage = ['inline', 'none'];
        this.pageColor = ['now', 'NoNow'];
      } else if (index === 2) {
        this.selectedColor = ['NoClick', 'NoClick', 'click', 'NoClick', 'NoClick'];
        this.selectStyle = ['none', 'none', 'inline', 'none', 'none'];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      } else if (index === 3) {
        this.selectedColor = ['NoClick', 'NoClick', 'NoClick', 'click', 'NoClick'];
        this.selectStyle = ['none', 'none', 'none', 'inline', 'none'];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      } else if (index === 4) {
        this.selectedColor = ['NoClick', 'NoClick', 'NoClick', 'NoClick', 'click'];
        this.selectStyle = ['none', 'none', 'none', 'none', 'inline'];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      }
    },
    prePage() {
      if (this.page === 'inline-block') {
        this.selectPage = ['inline', 'none'];
        this.pageColor = ['now', 'NoNow'];
      }
    },
    nextPage() {
      if (this.page === 'inline-block') {
        this.selectPage = ['none', 'inline'];
        this.pageColor = ['NoNow', 'now'];
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
/* pageColor */
.now {
  background:#2E7EB3 !important;
  color:#fff !important;
}
.NoNow {
  background: #fff !important;
  color:#2E7EB3 !important;
}

/* logo */
.myHeaderLogo {
  padding-top: 10px;
}

/* title设置 */
.partyBuildingList {
  font-size: 0px;
}
.partyBuildingList ul li {
  font-size: 16px;
  display: inline-block;
  width: 25%;
  text-align: center;
  height: 50px;
  /* border:1px solid red; */
  line-height: 50px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
}
.partyBuildingList ul li:nth-child(1) {
  border-left: none;
}

/* title设置 */
.partyBuildingTwoIndexList {
  font-size: 0px;
}
.partyBuildingTwoIndexList ul li {
  font-size: 16px;
  display: inline-block;
  width: 20%;
  text-align: center;
  height: 50px;
  /* border:1px solid red; */
  line-height: 50px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
  letter-spacing: 2px;
}
.partyBuildingTwoIndexList ul li:nth-child(1) {
  border-left: none;
}
.hideKey {
  display: none;
}

/* titleImg */
.partyBuildingTitleImg img {
  width:100%;
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
  height: 75px;
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
  top: 0px;
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
.currency ul li .date {
  bottom:-10px;
}
.currency {
  margin-bottom: 50px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}

.number {
  margin: 20px 50px 45px 0px;
  float: right;
}
.number .numberLeft,
.numberRight {
  display: inline-block;
  width: 20px;
  height: 25px;
  border: 1px solid #2e7eb3;
  text-align: center;
  line-height: 25px;
}
.number span.figure {
  display: inline-block;
  width: 20px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #2e7eb3;
  color: #fff;
  font-weight: 600;
}
</style>
