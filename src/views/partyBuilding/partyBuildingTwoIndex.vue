<template>
  <div class="partyBuildingTwoIndex">
    <div class="partyBuildingTitleImg">
      <img :src="titleImg">
    </div>
    <div class="Survey currency" v-show="isHide[0]">
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
    <div class="dynamic currency" v-show="isHide[1]">
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
    <div class="Elegance currency" v-show="isHide[2]">
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
    <div class="Communication currency" v-show="isHide[3]">
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
  props: ['indexkid'],
  data() {
    return {
      isHide: [false, true, false, false],
      selectPage: ['inline', 'none'],
      pageColor: ['now', 'NoNow'],
      page: 'none',
      Survey: [],
      dynamic: [],
      Elegance: [],
      Communication: [],
      titleImg: '',
    };
  },
  watch: {
    indexkid() {
      this.getIndex = this.indexkid;
      if (this.getIndex === 0) {
        this.isHide = [true, false, false, false];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      } else if (this.getIndex === 1) {
        this.isHide = [false, true, false, false];
        this.page = 'inline-block';
        this.selectPage = ['inline', 'none'];
        this.pageColor = ['now', 'NoNow'];
      } else if (this.getIndex === 2) {
        this.isHide = [false, false, true, false];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      } else if (this.getIndex === 3) {
        this.isHide = [false, false, false, true];
        this.page = 'none';
        this.pageColor = ['now', 'NoNow'];
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/static/data/partyBuilding.json').then((res) => {
        /* eslint-disable */
        const data = res.data;
        this.Survey = data.Survey;
        this.dynamic = data.dynamic;
        this.Elegance = data.Elegance;
        this.Communication = data.Communication,
        this.titleImg = data.imgTitle;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
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
/* pageColor */
.now {
  background:#2E7EB3 !important;
  color:#fff !important;
}
.NoNow {
  background: #fff !important;
  color:#2E7EB3 !important;
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
