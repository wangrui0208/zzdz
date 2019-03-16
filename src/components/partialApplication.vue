<template>
  <div class="partialApplication">
    <div class="partialApplicationTitle">
      <h1>部分应用</h1>
      <a href="#"><span>More</span></a>
    </div>
    <div class="partialApplicationList">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          @click="displayApplication(index)"
          :class="[isAddClass[index] ===true?'selecApplication':'']"
        >
          <a>{{item}}</a>
          <span class="demarcationLine"></span>
        </li>
      </ul>
    </div>
    <div class="partialApplicationImg">
      <div v-for="(item,index) in imgList" :key="index" v-show="isShow[index]">
        <img :src="item.img">
        <p>{{item.title}}</p>
        <a>了解详情</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partialApplication',
  data() {
    return {
      list: ['全部', '政府', '金融', '企业', '教育', '医疗'],
      isShow: [true, true, true, true, false],
      isAddClass: [true, false, false, false, false, false],
      AddClass: 'selecApplication',
      imgList: [{
        img: './static/images/application1.png',
        title: '泰安中医医院云平台',
      },
      {
        img: './static/images/application2.png',
        title: '泰安林业局网络系统',
      },
      {
        img: './static/images/application3.jpg',
        title: '桌面虚拟化项目',
      },
      {
        img: './static/images/application4.jpg',
        title: '新泰电子政务云计算',
      },
      {
        img: './static/images/application5.png',
        title: '泰山护理学院技术方案',
      }],
    };
  },
  mounted() {
    this.displayApplication();
  },
  methods: {
    displayApplication(index) {
      if (index === 0) {
        this.isShow = [true, true, true, true, false];
        // 设置class
        this.isAddClass = [true, false, false, false, false, false];
      } else if (index === 1) {
        this.isShow = [false, true, true, true, false];
        // 设置class
        this.isAddClass = [false, true, false, false, false, false];
      } else if (index === 2) {
        this.isShow = [false, false, false, false, false];
        // 设置class
        this.isAddClass = [false, false, true, false, false, false];
      } else if (index === 3) {
        this.isShow = [false, false, false, true, false];
        // 设置class
        this.isAddClass = [false, false, false, true, false, false];
      } else if (index === 4) {
        this.isShow = [false, false, true, false, true];
        // 设置class
        this.isAddClass = [false, false, false, false, true, false];
      } else if (index === 5) {
        this.isShow = [true, false, false, false, false];
        this.isAddClass = [false, false, false, false, false, true];
      }
    },
  },
};
</script>

<style scoped>
/* 设置全局样式 */
.partialApplication {
  font-size: 14px;
  padding-bottom: 10px;
}
/* 设置标题样式 */
.partialApplicationTitle {
  background: #f8f8f8;
  margin: 10px 0px;
}
.partialApplicationTitle h1 {
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 75%;
  margin: 5px 0px 10px 15px;
}
/* 设置more */
.partialApplicationTitle a span {
  display: inline-block;
  color: #8ec85b;
  font-size: 18px;
}
/* 应用列表设置 */
.partialApplicationList {
  padding: 15px 0px;
}
.partialApplicationList ul {
  text-align: center;
}
.partialApplicationList ul li {
  display: inline-block;
  position: relative;
  padding-left: 5px;
  width: 14%;
  padding-bottom: 5px;
}
.partialApplicationList ul li a {
  font-size: 16px;
  padding-bottom: 6px;
}

/* 应用间的分界线 */
.demarcationLine {
  display: inline-block;
  border: 1px solid #d6d6d6;
  margin: 0px 10px;
  width: 0px;
  height: 30px;
  position: absolute;
  bottom:5px;
  top: -5px;
}

/* 设置图片 */
.partialApplicationImg img {
  width: 100%;
  height: 108px;
}
.partialApplicationImg > div {
  display: inline-block;
  width: 45%;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
  text-align: center;
}
/* 设置图片底部文字 */
.partialApplicationImg > div p {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  font-size: 13px;
  letter-spacing: 1px;
  color: #666;
}
/* 设置了解详情 */
.partialApplicationImg > div a {
  text-align: center;
  width: 70px;
  height: 30px;
  line-height: 30px;
  background: rgba(151, 199, 64, 0.9);
  position: absolute;
  z-index: 3;
  color: #fff;
  top: 78px;
  right: 0px;
  font-size: 12px;
}

/* 点击应用 */
.selecApplication a {
  color: cadetblue;
  border-bottom: 3px solid cadetblue;
}
</style>

