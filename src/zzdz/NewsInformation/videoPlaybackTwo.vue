<template>
  <div class='videoPlayback'>
    <div class='videoPlaybackTitle'>
      <h1>校企合作 共赢未来</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2018-11-28</div>
      <hr />
    </div>
    <div class='videoPlaybackContent'>
      <!-- eslint-disable -->
      <video  :src="videoSrc" class="myVideo" controls  :poster="videoImg">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <p class="imgBottom">
      2018年11月28日，泰山学院副校长王雷亭一行到山东成城物联网科技股份有限公司考察合作，双方就近红外流量检测技术服务合作进行签约。
    </p>
    <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./videoPlaybackThree">上一篇:中国电子信息产业发展研究院来高新</router-link>
      </div>
      <div>
        <router-link to="./videoPlaybackOne">下一篇:抓好非公企业党建 促进企业快速发展</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'videoPlayback',
  data() {
    return {
      videoSrc: '../../static/images/newsInformation/videoPlayback21.mp4',
      videoImg: '../../static/images/newsInformation/videoPlayback21.jpg',
    };
  },
};
</script>

<style scoped>
.videoPlayback {
  margin: 20px 15px;
}
/* title */
.videoPlaybackTitle {
  text-align: center;
}
.videoPlaybackTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.videoPlaybackTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.videoPlaybackTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.videoPlaybackContent {
  text-align: center;
  position: relative;
  width:100%;
}
.myVideo {
  width:100%;
  height:200px;
  object-fit: fill;
  margin-top:15px;
}
.videoPlayback p.imgBottom {
  font-size:15px;
  color:#666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin:15px 0px 30px 0px;
}
/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 10px;
}
.Hyperlink div a {
  color: #666;
  font-size: 14px;
}

p {
  line-height: 1.8em;
}
</style>
