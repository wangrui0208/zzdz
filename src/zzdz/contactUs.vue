<template>
  <div class="contactUs">
    <div class="myHeaderLogo">
      <router-link to="/MainIndex">
       <img src="../assets/images/logo.jpg">
     </router-link>
    </div>
    <div class="contactUsList">
      <ul>
        <li @click='click(1)' :class="selsectColor[0]">联系我们</li>
        <li @click='click(2)' :class="selsectColor[1]">专业服务</li>
        <li @click='click(3)' :class="selsectColor[2]">运维服务</li>
      </ul>
      <img src="static/images/contactUs/contactUsTitle.jpg" alt="">
    </div>
    <div class="phone" :style="{display:selectStyle[0]}">
      <p>公司地址：泰安市高新区南天门大街1110号泰山科技创业城A区1号</p>
      <p>售后服务热线：0538-8211590</p>
      <p>运维服务专线：0538-6263779/6263776</p>
      <p>业务洽谈：0538-8215099/8225299</p>
    </div>
    <div class="Professional" :style="{display:selectStyle[1]}">
      <img src="static/images/contactUs/advantages.png" alt="">
    </div>
    <div class="Operation" :style="{display:selectStyle[2]}">
      <img src="static/images/contactUs/Operation.png" alt="">
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from './tabbar';

export default {
  name: 'contactUs',
  data() {
    return {
      selectStyle: ['inline-block', 'none', 'none'],
      selsectColor: ['click', 'Noclick', 'noClick'],
    };
  },
  components: {
    tabBar,
  },
  methods: {
    click(index) {
      if (index === 1) {
        this.selectStyle = ['inline-block', 'none', 'none'];
        this.selsectColor = ['click', 'Noclick', 'noClick'];
      } else if (index === 2) {
        this.selectStyle = ['none', 'inline-block', 'none'];
        this.selsectColor = ['Noclick', 'click', 'noClick'];
      } else if (index === 3) {
        this.selectStyle = ['none', 'none', 'inline-block'];
        this.selsectColor = ['Noclick', 'noClick', 'click'];
      }
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.click {
  color: #1B77E6;
}
.NoClick {
  color: #000;
}
/* logo */
.myHeaderLogo {
  padding-top: 10px;
}

/* title设置 */
.contactUsList {
  font-size: 0px;
}
.contactUsList ul li {
  font-size: 16px;
  display: inline-block;
  width: 33.3%;
  text-align: center;
  height: 50px;
  /* border:1px solid red; */
  line-height: 50px;
  background: #f3f0f0;
  box-sizing: border-box;
  border-left: 2px solid #fff;
}
.contactUsList ul li:nth-child(1) {
  border-left: none;
}

.contactUsList img {
  width:100%;
  height:130px;
}


/* phone */
.phone {
  margin:30px 10px;
}
.phone p {
  color:#666;
  font-size: 15px;
  line-height: 2.5em;
  padding-left:10px;
}

.Professional {
  margin:20px 0px;
}
.Professional img {
  width:100%;
  margin:20px 0px;
}

.Operation {
  text-align: center;
}
.Operation img {
  margin-top:30px;
  width:95%;
}
</style>
