<template>
  <div class="corporateCulture">
    <myHeader></myHeader>
    <div class="currency">
      <div class="titleImg">
        <img src="../../../static/images/corporateCulture/corporateCultureTitle.jpg" alt="">
      </div>
      <div class="ContentTitle">
        <span></span>
        <b>企业文化、员工风采</b>
      </div>
      <ul>
        <li
          v-for="(item,key) in corporateCulture"
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
    <div class="number">
      <span class="numberLeft">&lt;</span>
      <span>1</span>
      <span class="numberRight">></span>
    </div>
    <div class="bottomImg">
      <ul>
        <li v-for="(itemImg,key) in bottomImg" :key="itemImg.id">
          <span class="hideKey">{{key}}</span>
          <img :src="itemImg.img" alt="">
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/header';
import myFooter from '@/components/footer';

export default {
  name: 'corporateCulture',
  components: {
    myHeader,
    myFooter,
  },
  data() {
    return {
      corporateCulture: [{
        img: './static/images/corporateCulture/corporateCultureOne.png',
        title: '企业理念——众志始成城 盛德成大业',
        date: '/ 2017-03-11',
      },
      {
        img: './static/images/corporateCulture/corporateCultureTwo.png',
        title: '企业精神——点点滴滴的学问 分分秒秒的精神',
        date: '/ 2017-03-11',
      },
      {
        img: './static/images/corporateCulture/corporateCultureThree.png',
        title: '企业方针——诚信、规范、高效',
        date: '/ 2017-03-11',
      },
      {
        img: './static/images/corporateCulture/corporateCultureFour.png',
        title: '核心价值观——感恩、责任、执行',
        date: '/ 2017-03-11',
      },
      {
        img: './static/images/corporateCulture/corporateCultureFive.png',
        title: '“感恩父母， 孝行人生”——山东众志电子“十大孝子”评选活动进行时',
        date: '/ 2016-20-26',
      },
      {
        img: './static/images/corporateCulture/corporateCultureSix.png',
        title: '扬帆，做更好的自己，做最棒的团队',
        date: '/ 2016-09-19',
      },
      {
        img: './static/images/corporateCulture/corporateCultureSeven.png',
        title: '春风十里 不如你',
        date: '/ 2016-03-09',
      },
      {
        img: './static/images/corporateCulture/corporateCultureEight.png',
        title: '“行走是一种力量”之“在路上” —— 山东众志电子有限公司举行徒步拓展活动',
        date: '/ 2015-12-12',
      }],
      bottomImg: [{
        img: './static/images/corporateCulture/bottomOne.jpg',
      },
      {
        img: './static/images/corporateCulture/bottomTwo.jpg',
      },
      {
        img: './static/images/corporateCulture/bottomThree.jpg',
      },
      {
        img: './static/images/corporateCulture/bottomFour.jpg',
      }],
    };
  },
};
</script>

<style scoped>
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
  bottom: 0px;
  right: 0px;
}
.currency ul li:nth-child(1) .muiFooter h1 {
  top: -5px;
}
.currency ul li:nth-child(5) .muiFooter h1 {
  top:-6px;
}
.currency ul li:nth-child(5) .muiFooter .date {
  bottom:-5px;
}
.currency {
  margin-bottom: 40px;
}
.currency ul li:nth-last-child(1) .muiCard {
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
}

.hideKey {
  display:none;
}

.number {
  margin:0px 50px 55px 0px;
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

/* 底部图片设置 */
.bottomImg {
  margin-top:122px;
  margin-bottom:-4px;
  text-align: center;
}
.bottomImg ul li {
  display: inline-block;
  width:23%;
  margin-left:5px;
}
.bottomImg ul li:nth-child(1) {
  margin-left:0px;
}
.bottomImg ul li img {
  width:100%;
}
</style>

