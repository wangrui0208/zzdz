<template>
  <div class="partialApplication">
    <div class="partialApplicationTitle">
      <h1>部分应用</h1>
      <a href="#"><span>More</span></a>
    </div>
    <div class="partialApplicationList">
      <ul>
        <li
          :class="[isAddClassOne ===true?'selecApplication':'']"
          @click="displayApplication(0)"
        >
          <a>全部</a>
        </li>
        <li
          :class="[isAddClassTwo ===true?'selecApplication':'']"
          @click="displayApplication(1)"
        >
          <span class="demarcationLine"></span>
          <a>政府</a>
        </li>
        <li
          :class="[isAddClassThree ===true?'selecApplication':'']"
          @click="displayApplication(2)"
        >
          <span class="demarcationLine"></span>
          <a>金融</a>
        </li>
        <li
          :class="[isAddClassFour ===true?'selecApplication':'']"
          @click="displayApplication(3)"
        >
          <span class="demarcationLine"></span>
          <a>企业</a>
        </li>
        <li
          :class="[isAddClassFive ===true?'selecApplication':'']"
          @click="displayApplication(4)"
        >
          <span class="demarcationLine"></span>
          <a>教育</a>
        </li>
        <li
          :class="[isAddClassSix ===true?'selecApplication':'']"
          @click="displayApplication(5)"
        >
          <span class="demarcationLine"></span>
          <a>医疗</a>
        </li>
      </ul>
    </div>
    <div class="partialApplicationImg">
      <div v-show="isShowOne">
        <img
          src="../../assets/images/application1.png"
          alt=""
        >
        <p>泰安中医医院云平台</p>
        <a href="#">了解详情</a>
      </div>
      <div v-show="isShowTwo">
        <img
          src="../../assets/images/application2.png"
          alt=""
        >
        <p>泰安林业局网络系统</p>
        <a href="#">了解详情</a>
      </div>
      <div v-show="isShowThree">
        <img
          src="../../assets/images/application3.jpg"
          alt=""
        >
        <p>桌面虚拟化项目</p>
        <a href="#">了解详情</a>
      </div>
      <div v-show="isShowFour">
        <img
          src="../../assets/images/application4.jpg"
          alt=""
        >
        <p>新泰电子政务云计算</p>
        <a href="#">了解详情</a>
      </div>
      <div v-show="isShowFive">
        <img
          src="../../assets/images/application5.png"
          alt=""
        >
        <p>泰山护理学院技术方案</p>
        <a href="#">了解详情</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partialApplication',
  data() {
    return {
      isShowOne: true,
      isShowTwo: true,
      isShowThree: true,
      isShowFour: true,
      isShowFive: false,
      isAddClassOne: true,
      isAddClassTwo: false,
      isAddClassThree: false,
      isAddClassFour: false,
      isAddClassFive: false,
      isAddClassSix: false,
      AddClass: 'selecApplication',
    };
  },
  mounted() {
    this.displayApplication();
  },
  methods: {
    displayApplication(index) {
      if (index === 0) {
        this.isShowOne = true;
        this.isShowTwo = true;
        this.isShowThree = true;
        this.isShowFour = true;
        this.isShowFive = false;
        // 设置class
        this.isAddClassOne = true;
        this.isAddClassTwo = false;
        this.isAddClassThree = false;
        this.isAddClassFour = false;
        this.isAddClassFive = false;
        this.isAddClassSix = false;
      } else if (index === 1) {
        this.isShowOne = false;
        this.isShowTwo = true;
        this.isShowThree = true;
        this.isShowFour = true;
        this.isShowFive = false;
        // 设置class
        this.isAddClassOne = false;
        this.isAddClassTwo = true;
        this.isAddClassThree = false;
        this.isAddClassFour = false;
        this.isAddClassFive = false;
        this.isAddClassSix = false;
      } else if (index === 2) {
        this.isShowOne = false;
        this.isShowTwo = false;
        this.isShowThree = false;
        this.isShowFour = false;
        this.isShowFive = false;
        // 设置class
        this.isAddClassOne = false;
        this.isAddClassTwo = false;
        this.isAddClassThree = true;
        this.isAddClassFour = false;
        this.isAddClassFive = false;
        this.isAddClassSix = false;
      } else if (index === 3) {
        this.isShowOne = false;
        this.isShowTwo = false;
        this.isShowThree = false;
        this.isShowFour = true;
        this.isShowFive = false;
        // 设置class
        this.isAddClassOne = false;
        this.isAddClassTwo = false;
        this.isAddClassThree = false;
        this.isAddClassFour = true;
        this.isAddClassFive = false;
        this.isAddClassSix = false;
      } else if (index === 4) {
        this.isShowOne = false;
        this.isShowTwo = false;
        this.isShowThree = true;
        this.isShowFour = false;
        this.isShowFive = true;
        // 设置class
        this.isAddClassOne = false;
        this.isAddClassTwo = false;
        this.isAddClassThree = false;
        this.isAddClassFour = false;
        this.isAddClassFive = true;
        this.isAddClassSix = false;
      } else if (index === 5) {
        this.isShowOne = true;
        this.isShowTwo = false;
        this.isShowThree = false;
        this.isShowFour = false;
        this.isShowFive = false;
        // 设置class
        this.isAddClassOne = false;
        this.isAddClassTwo = false;
        this.isAddClassThree = false;
        this.isAddClassFour = false;
        this.isAddClassFive = false;
        this.isAddClassSix = true;
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
  margin:10px 0px;
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
  left: -5px;
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
  color:#666;
}
/* 设置了解详情 */
.partialApplicationImg > div a {
  text-align: center;
  width: 70px;
  height: 30px;
  line-height: 30px;
  background: rgba(151,199,64,0.9);
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

