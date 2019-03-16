<template>
  <div class="EnterZZHeader">
    <div class="myHeaderLogo">
      <router-link to="/MainIndex">
       <img src="../../assets/images/logo.jpg">
     </router-link>
    </div>
    <div class="EnterZZHeaderList">
      <ul>
        <li @click="jump(1)">首页</li>
        <li @click="jump(2)" :class="[addClass[0]==true?clickTitle:NoClickTilte]">公司简介</li>
        <li @click="jump(3)" :class="[addClass[1]==true?clickTitle:NoClickTilte]">公司资质</li>
        <li @click="jump(4)" :class="[addClass[2]==true?clickTitle:NoClickTilte]">公司荣誉</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterZZHeader',
  data() {
    return {
      clickTitle: 'clickClass',
      NoClickTilte: 'NoClickClass',
      addClass: [true, false, false],
    };
  },
  methods: {
    jump(index) {
      if (index === 1) {
        this.$router.push({
          path: '/MainIndex',
        });
      } else if (index === 2) {
        this.addClass = [true, false, false];
        this.$router.push({
          path: '/enterZZ/companyProfileDetailed',
        });
      } else if (index === 3) {
        this.addClass = [false, true, false];
        this.$router.push({
          path: '/enterZZ/companyQualification',
        });
      } else if (index === 4) {
        this.addClass = [false, false, true];
        this.$router.push({
          path: '/enterZZ/companyHonor',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.clickClass {
  color: #1B77E6;
}
.NoClickClass {
  color: #000;
}
/* logo */
.myHeaderLogo {
  padding-top: 10px;
}

/* title设置 */
.EnterZZHeaderList {
  font-size: 0px;
}
.EnterZZHeaderList ul li {
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
.EnterZZHeaderList ul li:nth-child(1) {
  border-left: none;
}
</style>
