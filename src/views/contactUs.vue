<template>
  <div class="contactUs">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <div>
      <img :src="data.titleImg" alt="">
    </div>
    <div class="phone" v-show="isHide[0]">
      <p>公司地址：泰安市高新区南天门大街1110号泰山科技创业城A区1号</p>
      <p>售后服务热线：0538-8211590</p>
      <p>运维服务专线：0538-6263779/6263776</p>
      <p>业务洽谈：0538-8215099/8225299</p>
    </div>
    <div class="Professional" v-show="isHide[1]">
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
    <div class="Operation" v-show="isHide[2]">
      <img src="static/images/contactUs/Operation.png" alt="">
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar';
import AHeader from '@/components/AHeader';

export default {
  name: 'contactUs',
  components: {
    AHeader,
    tabBar,
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      isShow: [false, true],
      index: 0,
      titleList: '',
      data: '',
      subList: [],
      isHide: [false, true, false],
    };
  },
  methods: {
    getData() {
      this.$http.get('/static/data/contactUs.json').then((res) => {
        /* eslint-disable */
        this.titleList = res.data.title;
        this.data = res.data;
        this.subList = res.data.subList;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
    newIndex(index) {
      this.index = index;
      this.isHide = [false, false, false];
      this.isHide[index] = true;
    },
  },
};
</script>

<style scoped>
img {
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
  height:260px;
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
