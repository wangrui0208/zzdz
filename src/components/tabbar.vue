<template>
  <div class="tabBar">
    <div v-for="(item,index) in tabList" :key="index" @click="enter(index)">
       <img :src="item.img" v-show="isHide[index]">
       <img :src="item.imgSelected" v-show="isShow[index]">
       <p>{{item.title}}</p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  methods: {
    enter (index) {
      this.isShow = [false, false, false, false];
      this.isHide = [true, true, true, true];
      this.isShow[index] = true;
      this.isHide[index] = false;
    },
  },
  data() {
    return {
      isShow: [true, false, false, false],
      isHide: [false, true, true, true],
      tabList: [{
        img: 'static/images/tabbar/home.svg',
        imgSelected: 'static/images/tabbar/home1.svg',
        title: '首页',
      },
      {
        img: 'static/images/tabbar/phone.svg',
        imgSelected: '/static/images/tabbar/phone1.svg',
        title: '电话',
      },
      {
        img: 'static/images/tabbar/map.svg',
        imgSelected: '/static/images/tabbar/map1.svg',
        title: '地图',
      },
      {
        img: 'static/images/tabbar/my.svg',
        imgSelected: 'static/images/tabbar/my1.svg',
        title: '个人中心',
      }],
    };
  },
};
</script>

<style scoped>
.tabBar {
  width: 100%;
  background: #F3F0F0;
  position: fixed;
  bottom: 0px;
  font-size: 0px;
  z-index: 1000;
}
.tabBar > div {
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  height: 55px;
  border-right:1px solid #fff;
  color:#666;
}
.tabBar > div:nth-child(4) {
  border-right:none;
}

.tabBar > div > img {
  margin-top:10px;
  width:22px;
  height:22px;
}
 .tabBar > div > p {
   margin-top:-1px;
 }
</style>
