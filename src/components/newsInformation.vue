<template>
  <div class="newsInformation">
    <div class="newsInformationTitle">
      <h1>新闻动态</h1>
      <router-link to="/NewsInformation"><a><span>More</span></a></router-link>
    </div>
    <div class="newsInformationList">
      <ul>
        <li v-for="(item,key) in newsList" :key="item.id" @click="enterNews(key)">
          <span class="spot"></span>
          <span class="hideKey">{{key}}</span>
          <a>{{item.title}}</a>
          <span class="newsInformationDate">{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsInformation',
  data() {
    return {
      newsList: [{
        title: '开门红！山东众志电子签约宿松',
        date: '2019-02-15',
      },
      {
        title: '初七！山东众志电子举行2019首',
        date: '2019-02-12',
      },
      {
        title: '山东众志电子2019“奋斗正当时',
        date: '2019-01-27',
      },
      {
        title: '山东众志电子2018年众志成城总',
        date: '2019-01-27',
      }],
    };
  },
  methods: {
    enterNews(key) {
      if (key === 0) {
        this.$router.push({
          path: '/NewsInformation/NewsOne',
        });
      } else if (key === 1) {
        this.$router.push({
          path: '/NewsInformation/NewsTwo',
        });
      } else if (key === 2) {
        this.$router.push({
          path: '/NewsInformation/NewsThree',
        });
      } else if (key === 3) {
        this.$router.push({
          path: '/NewsInformation/NewsFour',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 设置全局样式 */
.newsInformation {
  font-size: 14px;
  background: #f8f8f8;
}
/* 设置标题样式 */
.newsInformationTitle {
  margin-bottom:15px;
}
.newsInformationTitle h1 {
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 75%;
  margin:30px 0px 10px 15px;
}
/* 设置more */
.newsInformationTitle a span {
  display: inline-block;
  color: #8ec85b;
  font-size:18px;
}
/* 设置列表样式 */
.newsInformationList ul li span.spot {
  display: inline-block;
  border: 3px solid #208eeb;
  color: red;
  border-radius: 50%;
  margin: 0px 5px 0px 5px;
}
.newsInformationList ul {
  padding: 0px;
}
.newsInformationList li {
  list-style: none;
  font-size: 14px;
  margin:0px 5px;
  margin-bottom:5px;
  height:35px;
  line-height: 24px;
}
.newsInformationList li:nth-child(4){
  padding-bottom:20px;
}
.newsInformationList a {
  display: inline-block;
  width:65%;
  text-decoration: none;
  color: #666666;
}
/* 显示时间设置 */
.newsInformationDate {
  display: inline-block;
  background: #E5E5E5;
  border-radius: 10px;
  padding:0px 5px;
  margin:0px 3px 0px 0px;
}
.hideKey {
  display: none;
}
</style>

