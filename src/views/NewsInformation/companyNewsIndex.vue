<template>
  <div class="companyNewsContent" :style="{display:show}">
    <div class="ContentTitle">
      <span></span>
      <b>公司新闻</b>
    </div>
    <div class="ContentList">
      <ul>
        <li v-for="(item,key) in NewsData" :key="item.id" @click="enterNewsData(key)">
          <div class="muiCard">
            <!--内容区-->
            <div class="muiContent">
              <img :src="item.img" >
              <span class="vForKey">{{key}}</span>
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
  </div>
</template>

<script>
export default {
  name: 'companyNewsIndex',
  data() {
    return {
      NewsData: [{
        img: '../../../static/images/newsInformation/companyNews10.jpg',
        title: '开门红！山东众志电子签约宿松县保安服务公司“押运综合管理平台”项目',
        date: '/ 2019-02-15',
      },
      {
        img: '../../../static/images/newsInformation/companyNews20.jpg',
        title: '初七！山东众志电子举行2019首场新春内部培训活动',
        date: '/ 2019-02-12',
      },
      {
        img: '../../../static/images/newsInformation/companyNews30.jpg',
        title: '山东众志电子2019“奋斗正当时”颁奖盛典暨迎春晚会盛大启幕',
        date: '/ 2019-01-27',
      },
      {
        img: '../../../static/images/newsInformation/companyNews40.jpg',
        title: '山东众志电子2018年众志成城总结大会召开',
        date: '/ 2019-01-27',
      },
      {
        img: '../../../static/images/newsInformation/companyNews50.jpg',
        title: '市委常委、秘书长宋洪银走访慰问国家“万人计划”专家、山东众志电子董事长李松和',
        date: '/ 2019-01-26',
      }],
      show: '',
    };
  },
  methods: {
    enterNewsData(index) {
      if (index === 0) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/NewsOne',
        });
      } else if (index === 1) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/NewsTwo',
        });
      } else if (index === 2) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/NewsThree',
        });
      } else if (index === 3) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/NewsFour',
        });
      } else if (index === 4) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/NewsFive',
        });
      }
    },
  },
};
</script>

<style scoped>
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
}
.ContentTitle b {
  margin-left: 10px;
  font-weight: normal;
  font-size: 18px;
}

/* 新闻列表 */
.vForKey {
  display: none;
}
/* 列表设置 */
.ContentList {
  margin:10px 0px;
}
.muiCard {
  margin:22px 10px;
  border-top:2px solid #EAEAEA;
  height:60px;
  padding-top:10px;
}
.muiCard div{
  display: inline-block;
}
/* 图片设置 */
.muiContent {
  width:30%;
}
.muiContent img{
  width:100%;
}
/* 标题设置 */
.muiFooter {
  width: 65%;
  margin-left:10px;
  height:100%;
  position: relative;
}
.muiFooter h1 {
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  top: 6px;
}
.muiFooter .date {
  font-size:12px;
  color:#333;
  position: absolute;
  bottom: 3px;
  right:0px;
}
.ContentList ul li:nth-child(1) .muiFooter h1 {
  top:10px;
}
.ContentList ul li:nth-child(1) .muiFooter .date {
  bottom:-10px;
}
.ContentList {
  margin-bottom:50px;
}
.ContentList ul li:nth-last-child(1) .muiCard {
  height:80px;
  padding-bottom:20px;
  border-bottom:2px solid #EAEAEA;
}
</style>

