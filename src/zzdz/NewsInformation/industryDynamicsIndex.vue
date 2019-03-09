<template>
  <div class="industryDynamicsIndexContent" :style="{display:show}">
    <div class="ContentTitle">
      <span></span>
      <b>行业动态</b>
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
  name: '',
  data() {
    return {
      NewsData: [{
        img: '../../../static/images/newsInformation/industryDynamics10.png',
        title: '国务院印发《关于深化“互联网+先进制造业”发展工业互联网的指导意见》',
        date: '/ 2019-02-15',
      },
      {
        img: '../../../static/images/newsInformation/industryDynamics20.jpg',
        title: '第四届农业大数据产业技术创新联盟年会暨学术交流会在湖州隆重召开',
        date: '/ 2019-02-12',
      },
      {
        img: '../../../static/images/newsInformation/industryDynamics30.jpg',
        title: '神农智谷产业园董事长李松和出席中英农业科技创新合作对接会',
        date: '/ 2019-01-27',
      },
      {
        img: '../../../static/images/newsInformation/industryDynamics40.jpg',
        title: '山东省农业厅副巡视员姜卫良到山东众志电子有限公司参观指导',
        date: '/ 2019-01-27',
      },
      {
        img: '../../../static/images/newsInformation/industryDynamics50.jpg',
        title: '山东农业大学刘福胜院长带领部分骨干教师赴山东众志电子有限公司参观...',
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
          path: '/NewsInformation/industryDynamicsOne',
        });
      } else if (index === 1) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/industryDynamicsTwo',
        });
      } else if (index === 2) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/industryDynamicsThree',
        });
      } else if (index === 3) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/industryDynamicsFour',
        });
      } else if (index === 4) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/industryDynamicsFive',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 行业新闻title */
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
  height:70px;
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
  font-size: 12px;
  color:#333;
  position: absolute;
  bottom: -5px;
  right:0px;
}
.ContentList ul li:nth-last-child(1) .muiCard {
  padding-bottom:20px;
  border-bottom:2px solid #EAEAEA;
  margin-bottom:50px;
}

</style>

