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
      <div v-for="(item,index) in subList" :key="index">
        <span class="SubTitle">{{item.subTitle}}</span>
        <div v-for="(list,i) in item.subContent" :key="i">
          <div class="smallTitle">{{list.smallTitle}}</div>
          <div class="Content">{{list.content}}</div>
        </div>
      </div>
      <br>
      <br>
      <!-- <img src="static/images/contactUs/advantages.png" alt=""> -->
    </div>
    <div class="Operation" :style="{display:selectStyle[2]}">
      <img src="static/images/contactUs/Operation.png" alt="">
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar';

export default {
  name: 'contactUs',
  data() {
    return {
      selectStyle: ['inline-block', 'none', 'none'],
      selsectColor: ['click', 'Noclick', 'noClick'],
      subList: [{
        subTitle: 'IDC托管、租赁体验服务',
        subContent: [{
          smallTitle: '产品概述',
          content: '泰安市云计算中心IDC托管、租赁服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。中心支持移动、联通、电信三家运营商主干网络接入，用户根据宽带需要自行定制。',
        }],
      },
      {
        subTitle: 'IT运维服务外部服务',
        subContent: [{
          smallTitle: '产品概述',
          content: '泰安市云计算中心数据中心运维服务包含从初级服务到定制培训，为硬件资源、管理工具、基础设施、系统与数据、人员等提供现场、定制、专家服务，为用户降低运维的复杂度，减少人为操作失误带来的故障，强化管理人员对操作者和整体系统的控制和监督能力，减少日常重复运维工作的人力资源，使技术人员能够将主要的精力放在系统，流程的优化上面，整个运维工作步入自生循环',
        },
        {
          smallTitle: '产品优势',
          content: '泰安市唯一一家获得ITSS运维服务资质的运维服务提供商。拥有20余名专业涵养存储、虚拟化、服务器、UPS、精密制冷系统等信息化运维服务高级运维工程师；提供30余项专业IT运维服务，提供7*24小时专业运维服务 团队有效的故障客户的业务系统稳定运行；拥有符合国家IT运维服务外包最高标准的IT运维服务体系。',
        }],
      }],
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
/* 专业服务 */
.Professional {
  font-size:14px;
  color:#666;
  padding:0px 10px;
  line-height: 1.8em;
}
.SubTitle {
  display: inline-block;
  color:#fff;
  background:#EEA51C;
  font-size: 15px;
  border-radius: 10px;
  padding:3px 10px;
  margin-bottom:15px;
  letter-spacing: 1px;
  margin-top:15px;
}
.smallTitle {
  margin:10px 0px;
  color:#025C9B;
  margin-left:10px;
}
.Content {
  text-indent: 2em;
  margin:10px 0px;
  margin-bottom:2px;
}
</style>
