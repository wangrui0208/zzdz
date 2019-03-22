<template>
  <div>
    <div class="myHeaderLogo">
      <router-link to="/MainIndex">
        <img src="static/images/logo.jpg">
      </router-link>
    </div>
    <div class="HeaderOne" v-show='isShow[0]'>
      <ul>
        <li
          v-for="(item,index) in titleList"
          :key="index"
          @click="jump(index)"
          :class="addClass[index]"
        >{{item}}</li>
      </ul>
    </div>
    <div class="HeaderTwo" v-show="isShow[1]">
      <ul>
        <li
          v-for="(item,index) in titleList"
          :key="index"
          @click="jump(index)"
          :class="addClass[index]"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AHeader',
  props: ['titleList', 'isShow'],
  data() {
    return {
      addClass: ['NoClickClass', 'clickClass', 'NoClickClass', 'NoClickClass'],
    };
  },
  methods: {
    jump(index) {
      // this.$store.commit('getSubTitleName', index);
      this.$emit('getIndex', index);
      this.addClass = ['NoClickClass', 'NoClickClass', 'NoClickClass', 'NoClickClass'];
      this.addClass[index] = 'clickClass';
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
.HeaderOne {
  font-size: 0px;
}
ul li {
  font-size: 16px;
  display: inline-block;
  text-align: center;
  height: 55px;
  /* border:1px solid red; */
  line-height: 55px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
}
.HeaderOne ul li {
  width: 25%;
}
ul li:nth-child(1) {
  border-left: none;
}

.HeaderTwo {
  font-size: 0px;
}
.HeaderTwo ul li {
  width: 33.3%;
}
</style>
