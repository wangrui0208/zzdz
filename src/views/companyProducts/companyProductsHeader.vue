<template>
  <div class="companyProductsHeader">
    <div class="myHeaderLogo">
      <router-link to="/MainIndex">
       <img src="static/images/logo.jpg">
     </router-link>
    </div>
    <div class="companyProductsHeaderList">
      <ul>
        <li @click="jump(1)">首页</li>
        <li
          @click="jump(2)"
          :class="[addClassOne==true?clickTitle:NoClickTilte]"
        >软件产品</li>
        <li
          @click="jump(3)"
          :class="[addClassTwo==true?clickTitle:NoClickTilte]"
        >云计算产品</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyProductsHeader',
  data() {
    return {
      clickTitle: 'clickClass',
      NoClickTilte: 'NoClickClass',
      addClassOne: true,
      addClassTwo: false,
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
        this.$router.push({
          path: '/companyProducts/softwareProduct',
        });
      } else if (index === 3) {
        this.addClassOne = false;
        this.addClassTwo = true;
        this.$router.push({
          path: '/companyProducts/cloudComputing',
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
.companyProductsHeaderList {
  font-size: 0px;
}
.companyProductsHeaderList ul li {
  font-size: 16px;
  display: inline-block;
  width: 33.3%;
  text-align: center;
  height: 55px;
  /* border:1px solid red; */
  line-height: 55px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
}
.companyProductsHeaderList ul li:nth-child(1) {
  border-left: none;
}
</style>
