<template>
  <div class="corporateCulture">
    <div class="corporateCultureTitle">
      <h1>企业文化</h1>
      <router-link to="/corporateCulture"><a href="#"><span>More</span></a></router-link>
    </div>
    <div class="corporateCultureList">
      <ul>
        <li v-for="(item,key) in cultureList" :key="item.id">
          <span class="spot"></span>
          <span class="hideKey">{{key}}</span>
          <a>{{item.title}}</a>
          <span class="corporateCultureDate">{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'corporateCulture',
  data() {
    return {
      cultureList: [{
        title: '企业理念—众志始成城 盛德成',
        date: '2017-03-11',
      },
      {
        title: '企业精神—点点滴滴的学问 分',
        date: '2017-03-11',
      },
      {
        title: '企业方针—诚信、规范、高效',
        date: '2017-03-11',
      },
      {
        title: '核心价值观—感恩、责任、执行',
        date: '2017-03-11',
      }],
    };
  },
};
</script>

<style scoped>
/* 设置全局样式 */
.corporateCulture {
  font-size: 14px;
  background: #f8f8f8;
}
/* 设置标题样式 */
.corporateCultureTitle {
  margin-bottom:15px;
}
.corporateCultureTitle h1 {
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 75%;
  margin:30px 0px 10px 15px;
}
/* 设置more */
.corporateCultureTitle a span {
  display: inline-block;
  color: #8ec85b;
  font-size:18px;
}
/* 设置列表样式 */
.corporateCultureList ul li span.spot {
  display: inline-block;
  border: 3px solid #208eeb;
  color: red;
  border-radius: 50%;
  margin: 0px 5px 0px 5px;
}
.corporateCultureList ul {
  padding: 0px;
}
.corporateCultureList li {
  list-style: none;
  font-size: 14px;
  margin:0px 5px;
  margin-bottom:5px;
  height:35px;
  line-height: 24px;
}
.corporateCultureList li:nth-child(4){
  padding-bottom:20px;
}
.corporateCultureList a {
  display: inline-block;
  width:65%;
  text-decoration: none;
  color: #666666;
}
/* 显示时间设置 */
.corporateCultureDate {
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
