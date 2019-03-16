<template>
  <div class="tabBar">
     <router-link to="/mainIndex" tag="div">
       <img src="../../static/images/tabbar/home.svg" alt="">
       <p>首页</p>
     </router-link>
     <router-link to="/contactUs" tag="div">
       <img src="../../static/images/tabbar/phone.svg" alt="">
       <p>电话</p>
     </router-link>
     <router-link to="/position" tag="div">
       <img src="../../static/images/tabbar/map.svg" alt="">
       <p>地图</p>
     </router-link>
     <router-link to="/personalCenter" tag="div">
       <img src="static/images/tabbar/my.svg" alt="">
       <p>个人中心</p>
     </router-link>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
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
