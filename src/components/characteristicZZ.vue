<template>
  <div class="characteristicZZ">
    <div class="characteristicZZTitle">
      <h1>特色众志</h1>
    </div>
    <div class="characteristicZZList">
      <div>
        <router-link to="/companyProducts/cloudComputing">
          <a href="">
            <img
              src="../assets/images/title1.png"
              alt=""
            >
            <p>云计算服务</p>
          </a>
        </router-link>
      </div>
      <div>
        <router-link to="/companyProducts/softwareProduct">
          <a href="">
            <img
              src="../assets/images/title2.png"
              alt=""
            >
            <p>软件产品</p>
          </a>
        </router-link>
      </div>
      <div>
        <router-link to="/contactUs">
          <a href=""><img
              src="../assets/images/title3.png"
              alt=""
            >
            <p>运维服务</p>
          </a>
        </router-link>
      </div>
      <div>
        <router-link to="/industryPlan">
          <a href=""><img
              src="../assets/images/title4.png"
              alt=""
            >
            <p>行业方案</p>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'characteristicZZ',
};
</script>

<style scoped>
/* 设置全局样式 */
.characteristicZZ {
  font-size: 14px;
  padding-bottom: 10px;
}
/* 设置标题样式 */
.characteristicZZTitle {
  background: #f8f8f8;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}
.characteristicZZTitle h1 {
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 75%;
  margin-left: 15px;
}

/* 列表设置 */
.characteristicZZList {
  text-align: center;
  margin-top: 20px;
}
.characteristicZZList div {
  display: inline-block;
  width: 22%;
}

.characteristicZZList div a p{
  font-size: 14px;
  letter-spacing: 1px;
  color:#444;
  margin-top:5px;
}
.characteristicZZList div a img {
  width: 75%;
}
</style>
