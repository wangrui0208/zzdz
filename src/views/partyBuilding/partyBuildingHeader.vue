<template>
  <div class="NewsInformationHeader">
    <div class="myHeaderLogo">
      <div>
        <router-link to="/MainIndex"> <img src="../../assets/images/logo.jpg"></router-link>
      </div>
    </div>
    <div class="NewsInformationHeaderList">
      <ul>
        <li
          v-for="(listItem,key) in TitleList"
          :key="listItem.id"
          :class="select[0].selectedColor[key]" @click="jump(key)"
        >
          <span class="hideKey">{{key}}</span>
          <span>{{listItem}}</span>
        </li>
      </ul>
    </div>
    <div class="partyBuildingTitleImg">
      <img
        src="../../../static/images/partyBuilding/partyBuildingTitle.jpg"
        alt=""
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NewsInformationHeader',
  data() {
    return {
      TitleList: ['支部概况', '支部动态', '党员风采', '学习交流'],
      select: [{
        selectedColor: ['click', 'NoClick', 'NoClick', 'NoClick'],
        selectStyle: ['inline', 'none', 'none', 'none'],
      }],
    };
  },
  methods: {
    jump(index) {
      const self = this;
      if (index === 0) {
        this.select[0].selectedColor = ['click', 'NoClick', 'NoClick', 'NoClick'];
        this.select[0].selectStyle = ['inline', 'none', 'none', 'none'];
        this.$router.push({
          name: 'partyBuildingTwoIndex',
          params: {
            number: 0,
            Survey: self.select,
          },
        });
      } else if (index === 1) {
        this.select[0].selectedColor = ['NoClick', 'click', 'NoClick', 'NoClick'];
        this.select[0].selectStyle = ['none', 'inline', 'none', 'none'];
        this.$router.push({
          name: 'partyBuildingTwoIndex',
          params: {
            number: 1,
            dynamic: self.select,
          },
        });
      } else if (index === 2) {
        this.select[0].selectedColor = ['NoClick', 'NoClick', 'click', 'NoClick'];
        this.select[0].selectStyle = ['none', 'none', 'inline', 'none'];
        this.$router.push({
          name: 'partyBuildingTwoIndex',
          params: {
            number: 2,
            Elegance: self.select,
          },
        });
      } else if (index === 3) {
        this.select[0].selectedColor = ['NoClick', 'NoClick', 'NoClick', 'click'];
        this.select[0].selectStyle = ['none', 'none', 'none', 'inline'];
        this.$router.push({
          name: 'partyBuildingTwoIndex',
          params: {
            number: 3,
            Communication: self.select,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
/* 点击title变换颜色 */
.click {
  color: #1b77e6;
}
.NoClick {
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

.hideKey {
  display: none;
}

/* titleImg */
.partyBuildingTitleImg img {
  width: 100%;
  margin-top:10px;
}
</style>
