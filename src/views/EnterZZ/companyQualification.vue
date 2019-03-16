<template>
  <div class="companyQualification">
    <div class="companyQualificationImg">
      <img
        src="../../assets/images/EnterZZ/honorTitle.jpg"
        alt=""
      >
    </div>
    <div class="companyQualificationHonor">
      <div class="honorTitle">
        <img
          src="../../assets/images/EnterZZ/honorLogoNew.png"
          alt=""
        >
      </div>
      <div class="honorList">
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">山东信息化协会会员单位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">中国计算机市场与应用联盟副秘书长单位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">中国电子工业标准化技术协会信息技术服务分会会员单位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">全国信息技术标准化技术委员会大数据标准工作组成员单位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">农业大数据产业技术创新战略联盟单位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">2014年公司居家“益券养老”项目团队被评为山东省服务业创新团队</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">2015年，公司被评为“山东省优秀电子信息企业”和“全国电子信息行业最具发展潜力企业”</div>
        </div>
        <!-- eslint-disable -->
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">2015、2016年众志电子公司连续入选《中国大数据企业排行榜》2016年位列“农业行业”排名第四位，“智慧农业”领域排名第二位</div>
        </div>
        <div class="List">
          <div class="listLeft">
            <img src="../../assets/images/EnterZZ/listLi.png">
          </div>
          <div class="listRight">公司董事长李松和入选国家科技创新创业人才，荣获“2015年度中国火炬创业导师”称号；2015年荣获“山东省信息化行业优秀企业家”和“山东省电子信息行业优秀企业家”；2016年入选第二批国家“万人计划”科技创业领军人才</div>
        </div>
        <!-- eslint-enable -->
      </div>
    </div>
    <div class="honorListImg">
      <div class="honorImgTitle">
        <img
          src="../../assets/images/EnterZZ/honorLogoShow.png"
          alt=""
        >
      </div>
      <div class="honorImgShow">
        <img
          src="../../assets/images/EnterZZ/honorLeft.png"
          alt=""
        >
        <img
          src="../../assets/images/EnterZZ/honorRight.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyQualification',
};
</script>

<style scoped>
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

