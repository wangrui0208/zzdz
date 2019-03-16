<template>
  <div class="companyDetailed">
    <div v-show="isShow[1]">
      <div class="companyImg">
        <img :src="data.DetailedImg" alt="">
      </div>
      <div class="companyContent" v-html="data.companyProfileDetailed">
      </div>
    </div>
    <div v-show="isShow[2]">
      <div class="companyImg">
        <img :src="data.QualificationImg" alt="">
      </div>
      <div class="companyQualificationHonor">
        <div class="honorTitle">
          <img :src="Qualification.honorTitleImg" >
        </div>
        <div class="honorList">
          <div class="List" v-for="(item,index) in
          Qualification.listcontent" :key="index">
            <div class="listLeft">
              <img :src="Qualification.listLiImg">
            </div>
            <div class="listRight">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="honorListImg">
        <div class="honorImgTitle">
          <img :src="Qualification.honorShowImg">
        </div>
        <div class="honorImgShow">
          <img :src="Qualification.honorLeft">
          <img :src="Qualification.honorRight">
        </div>
      </div>
    </div>
    <div v-show="isShow[3]">
      <div class="companyHonorTitle">
        <img :src="data.QualificationImg" alt="">
      </div>
      <div class="companyHonorContent" v-html="data.companyHonor"></div>
      <div class="honorImgShow">
        <img :src="Qualification.honorLeft">
        <img :src="Qualification.honorRight">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyDetailed',
  props: ['indexkid'],
  data() {
    return {
      data: '',
      content: '',
      isShow: [true, true, false],
      getIndex: 1,
      Qualification: '',
    };
  },
  watch: {
    indexkid() {
      this.getIndex = this.indexkid;
      if (this.getIndex === 0) {
        this.isShow[1] = true;
        this.$router.push({
          name: 'mainIndex',
        });
      } else {
        this.getData();
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/static/data/enterZZ.json').then((res) => {
        /* eslint-disable */
        this.data = res.data;
        this.isShow = [false, false, false];
        this.isShow[this.getIndex] = true;
        this.Qualification = this.data.companyQualification;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>
.companyImg {
  margin-top:5px;
}
.companyImg div img {
  width: 100%;
}
.companyContent, .companyHonorContent{
  margin: 20px 10px;
  font-size: 15px;
  text-indent: 2em;
  letter-spacing: 1px;
  color: #666;
  line-height:2em;
  font-family: "Microsoft yahei";
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
  letter-spacing: 1px;
}
.companyContent p {
  padding: 5px;
  margin: 5px 0px;
}
/* title图片设置 */
.companyQualificationImg {
  margin-top:20px;
}
.companyQualificationImg img {
  width: 100%;
}
/* 标题设置 */
.honorTitle,
.honorImgTitle {
  margin: 20px 5px;
}

/* 荣誉列表设置 */
.honorList .List {
  position: relative;
  margin:0px 5px;
}
.honorList .List div {
  display: inline-block;
  margin-bottom:10px;
}
.honorList .List div.listLeft {
  position: absolute;
  top:3px;
  left:5px;
}
.honorList .List div.listRight {
  width:87%;
  margin-left:35px;
  font-size: 14px;
  color:#666;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
  line-height: 1.8em;
}
/* 荣誉图片设置 */
.honorImgShow {
  margin: 5px 5px 10px 5px;
  text-align: center;
}
.honorImgShow img {
  width: 90%;
}
</style>

