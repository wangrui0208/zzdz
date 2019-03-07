<template>
  <div class="videoPlaybackIndexContent" :style="{display:show}">
    <div class="ContentTitle">
      <span></span>
      <b>视频播放</b>
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
        img: '../../static/images/newsInformation/videoPlayback10.jpg',
        title: '抓好非公企业党建 促进企业快速发展',
        date: '/ 2018-12-08',
      },
      {
        img: '../../static/images/newsInformation/videoPlayback20.jpg',
        title: '校企合作 共赢未来',
        date: '/ 2018-11-28',
      },
      {
        img: '../../static/images/newsInformation/videoPlayback30.jpg',
        title: '中国电子信息产业发展研究院来高新区调研',
        date: '/ 2018-11-21',
      },
      {
        img: '../../static/images/newsInformation/videoPlayback40.jpg',
        title: '山东众志电子举办全国“智慧金融安全云管理平台”研讨会',
        date: '/ 2018-11-17',
      },
      {
        img: '../../static/images/newsInformation/videoPlayback50.jpg',
        title: '大数据：让生活更便捷 让监督更有效',
        date: '/ 2018-11-06',
      }],
      show: '',
    };
  },
  methods: {
    enterNewsData(index) {
      if (index === 0) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/videoPlaybackOne',
        });
      } else if (index === 1) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/videoPlaybackTwo',
        });
      } else if (index === 2) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/videoPlaybackThree',
        });
      } else if (index === 3) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/videoPlaybackFour',
        });
      } else if (index === 4) {
        this.show = 'none';
        this.$router.push({
          path: '/NewsInformation/videoPlaybackFive',
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
  bottom: 5px;
  right:0px;
}
.ContentList ul li:nth-last-child(1) .muiCard {
  padding-bottom:20px;
  border-bottom:2px solid #EAEAEA;
  margin-bottom:50px;
}

</style>

