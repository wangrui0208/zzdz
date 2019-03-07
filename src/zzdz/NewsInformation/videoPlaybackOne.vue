<template>
  <div class='videoPlayback'>
    <div class='videoPlaybackTitle'>
      <h1>抓好非公企业党建 促进企业快速发展</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2018-12-08</div>
      <hr />
    </div>
    <div class='videoPlaybackContent'>
      <!-- eslint-disable -->
      <video  :src="videoSrc" class="myVideo" controls  :poster="videoImg">
        您的浏览器不支持 video 标签。
      </video>
      <!-- <div class="posterImg">
        <img :src="videoImg" alt="">
      </div> -->
    </div>
    <!-- eslint-enable -->
    <div class="Hyperlink">
      <div>
        <router-link to="./videoPlaybackTwo">上一篇:校企合作 共赢未来</router-link>
      </div>
      <div>
        <router-link to="./videoPlaybackOne">下一篇:没有了</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'videoPlayback',
  data() {
    return {
      videoSrc: '../../static/images/newsInformation/videoPlayback11.mp4',
      videoImg: '../../static/images/newsInformation/videoPlayback11.jpg',
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
  margin-top:15px;
  object-fit: fill;
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
</style>
