<template>
  <div class="footerContainer">
    <img src="static/images/footer.jpg" alt="">
    <footer class="footer">
      <p>
        鲁ICP备1100055号-1 &nbsp;
        <img src="static/images/beianbgs.png" alt="">
      </p>
      <p> 鲁公安网备37099202000006号</p>
      <p>版权所有：山东众志电子有限公司 </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
};
</script>

<style scoped>
.footerContainer img {
  width:100%;
  margin-bottom:-4px;
}
.footer {
  text-align: center;
  background: #292a2c;
  color: #fff;
  font-size: 12px;
}
.footer p{
  margin:0px;
  padding:5px 0px;
}
.footer img {
  width: 20px;
  height: 20px;
}
.footer p:nth-child(1) {
  padding-top: 20px;
}
.footer p:nth-child(3) {
  padding-bottom: 20px;
}
</style>
