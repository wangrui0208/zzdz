<template>
  <div class="industryPlanIndex">
    <div class="industryPlanImg">
      <img src="../../../static/images/industryPlan/industryPlanTitle.jpg" alt="">
    </div>
    <div class="industryPlanTitle">
      <div class="TitleLeft">S</div>
      <div class="TitleRight">
        <div class="RightTop">
          行业解决方案
        </div>
        <div class="RightBottom">olutions</div>
      </div>
    </div>
    <hr/>
    <div class="industryPlanList">
      <div v-for="(item,key) in industryPlanList" :key="item.id" @click="enterIndustryPlan(key)">
        <span class="hideKey">{{key}}</span>
        <div class="ImgList">
          <img :src="item.img" alt="">
        </div>
        <div class="ImgContent">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'industryPlan',
  data() {
    return {
      industryPlanList: [{
        img: '../../../static/images/industryPlan/industryPlanGovernment.jpg',
        title: '政府行业方案',
      },
      {
        img: '../../../static/images/industryPlan/industryPlanFinance.jpg',
        title: '金融行业方案',
      },
      {
        img: '../../../static/images/industryPlan/industryPlanenterprise.jpg',
        title: '企业行业方案',
      },
      {
        img: '../../../static/images/industryPlan/industryPlaneducation.jpg',
        title: '教育行业方案',
      },
      {
        img: '../../../static/images/industryPlan/industryPlanMedical.jpg',
        title: '医疗行业方案',
      }],
      select: [{
        selectedColor: [],
        selectStyle: [],
      }],
    };
  },
  methods: {
    enterIndustryPlan(key) {
      const self = this;
      if (key === 0) {
        this.select[0].selectedColor = ['click', 'NoClick', 'NoClick', 'NoClick', 'NoClick'];
        this.select[0].selectStyle = ['inline', 'none', 'none', 'none', 'none'];
        this.$router.push({
          name: 'industryPlanTwoIndex',
          params: {
            number: 0,
            Government: self.select,
          },
        });
      } else if (key === 1) {
        this.select[0].selectedColor = ['NoClick', 'click', 'NoClick', 'NoClick', 'NoClick'];
        this.select[0].selectStyle = ['none', 'inline', 'none', 'none', 'none'];
        this.$router.push({
          name: 'industryPlanTwoIndex',
          params: {
            number: 1,
            Finance: self.select,
          },
        });
      } else if (key === 2) {
        this.select[0].selectedColor = ['NoClick', 'NoClick', 'NoClick', 'click', 'NoClick'];
        this.select[0].selectStyle = ['none', 'none', 'none', 'inline', 'none'];
        this.$router.push({
          name: 'industryPlanTwoIndex',
          params: {
            number: 2,
            Enterprise: self.select,
          },
        });
      } else if (key === 3) {
        this.select[0].selectedColor = ['NoClick', 'NoClick', 'click', 'NoClick', 'NoClick'];
        this.select[0].selectStyle = ['none', 'none', 'inline', 'none', 'none'];
        this.$router.push({
          name: 'industryPlanTwoIndex',
          params: {
            number: 3,
            Education: self.select,
          },
        });
      } else if (key === 4) {
        this.select[0].selectedColor = ['NoClick', 'NoClick', 'NoClick', 'NoClick', 'click'];
        this.select[0].selectStyle = ['none', 'none', 'none', 'none', 'inline'];
        this.$router.push({
          name: 'industryPlanTwoIndex',
          params: {
            number: 4,
            Medical: self.select,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
/* title的img设置 */
.industryPlan {
  font-size: 14px;
}
.industryPlanImg img {
  margin-top:20px;
  width:100%;
  height:110px;
}

/* title设置 */
.industryPlanTitle {
  margin:40px 0px 0px 0px;
  text-align:center;
}
.industryPlanTitle>div {
  display: inline-block;
}
.industryPlanTitle>div>div {
  text-align: left;
}
/* 左边 */
.industryPlanTitle>div.TitleLeft {
  font-size: 50px;
  font-family: 'Times New Roman', Times, serif;
  color:#666;
}
/*右边 */
.industryPlanTitle>div.TitleRight>.RightTop {
  font-size:16px;
  letter-spacing: 1px;
}
.industryPlanTitle>div.TitleRight>.RightBottom {
  font-size:23px;
  color:#666;
  font-family: 'Times New Roman', Times, serif;
}

hr {
  width:90%;
  height: 2px;
  border: none;
  border-top: 1px solid #666;
}

/* 行业列表 */
.hideKey {
  display:none;
}
.industryPlanList {
  margin:30px 10px;
  text-align: center;
}
.industryPlanList>div {
  display: inline-block;
  width:47%;
}
.industryPlanList>div:nth-child(5) {
  position: relative;
  left:-25%;
}
.industryPlanList>div:nth-of-type(even) {
  margin-left:10px;
}
.industryPlanList div div.ImgList img {
  width:100%;
  height:70px;
}
.ImgContent {
  margin:8px 0px 26px 0px;
  color:#666;
  font-size: 15px;
  letter-spacing: 1px;
}
</style>

