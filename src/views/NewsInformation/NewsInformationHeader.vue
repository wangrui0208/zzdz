<template>
  <div class="NewsInformationHeader">
    <div class="myHeaderLogo">
     <router-link to="/MainIndex">
       <img src="../../assets/images/logo.jpg">
     </router-link>
    </div>
    <div class="NewsInformationHeaderList">
      <ul>
        <li @click="jump(1)">首页</li>
        <li
          @click="jump(2)"
          :class="[addClassOne==true?clickTitle:NoClickTilte]"
        >公司新闻</li>
        <li
          @click="jump(3)"
          :class="[addClassTwo==true?clickTitle:NoClickTilte]"
        >行业动态</li>
        <li
          @click="jump(4)"
          :class="[addClassThree==true?clickTitle:NoClickTilte]"
        >视频播放</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsInformationHeader',
  data() {
    return {
      clickTitle: 'clickClass',
      NoClickTilte: 'NoClickClass',
      addClassOne: true,
      addClassTwo: false,
      addClassThree: false,
    };
  },
  methods: {
    jump(index) {
      if (index === 1) {
        this.$router.push({
          path: '/MainIndex',
        });
      } else if (index === 2) {
        this.addClassOne = true;
        this.addClassTwo = false;
        this.addClassThree = false;
        this.$router.push({
          path: '/NewsInformation/NewsInformationIndex',
        });
      } else if (index === 3) {
        this.addClassOne = false;
        this.addClassTwo = true;
        this.addClassThree = false;
        this.$router.push({
          path: '/NewsInformation/industryDynamicsIndex',
        });
      } else if (index === 4) {
        this.addClassOne = false;
        this.addClassTwo = false;
        this.addClassThree = true;
        this.$router.push({
          path: '/NewsInformation/videoPlaybackIndex',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.clickClass {
  color: #1b77e6;
}
.NoClickClass {
  color: #000;
}
/* logo */
.myHeaderLogo {
  padding-top: 10px;
}

/* title设置 */
.NewsInformationHeaderList {
  font-size: 0px;
}
.NewsInformationHeaderList ul li {
  font-size: 16px;
  display: inline-block;
  width: 25%;
  text-align: center;
  height: 55px;
  /* border:1px solid red; */
  line-height: 55px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
}
.NewsInformationHeaderList ul li:nth-child(1) {
  border-left: none;
}
</style>
