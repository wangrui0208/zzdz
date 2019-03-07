<template>
  <div class='NewsThree'>
    <div class='NewsThreeTitle'>
      <h1>山东众志电子2019“奋斗正当时”颁奖盛典暨迎春晚会盛大启幕</h1>
      <div>来源：山东众志电子有限公司 | 更新时间：2019-01-27</div>
      <hr />
    </div>
    <div class='NewsThreeContent'>
      <!-- eslint-disable -->
      <p>旺狗辞旧岁，金猪喜迎春。</p>
      <p>1月27日，山东众志电子有限公司2019“奋斗正当时”颁奖盛典暨迎春晚会在金盛国际大酒店隆重举行。全体员工在此欢聚一堂，共同迎接2019猪年的到来，这一晚是全体众志人挥别2018，奔向2019的主场。</p>
      <p class="imgTop">此次年会得到了众多合作伙伴的关注和支持。华为技术有限公司，天津三建建筑工程有限公司，浙江江南工程管理股份有限公司，泰安市建筑设计院有限责任公司，北京华盛创园商业管理公司，山东超越建设项目管理有限公司，泰安市正信建设工程项目管理有限公司，山东鲁咨工程咨询公司，泰安市圣园园林工程有限公司，泰安岱宗机电科技工程公司和山东民昊律师事务所等众多单位的嘉宾应邀出席晚会。</p>
      <div class="NewsThreeimgList">
        <ul>
          <li v-for="(item,key) in imgListOne" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class="imgTop imgBottom">晚会在主持人热情洋溢的开场中拉开帷幕，山东众志电子董事长李松和致新春贺词，为所有嘉宾和全体员工送上了诚挚的新春祝福。</p>
       <div class="NewsThreeimgList">
        <ul>
          <li v-for="(item,key) in imgListTwo" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p  class="imgTop imgBottom">震撼的《众志鼓舞》精彩开场，在场的每一位员工为之欢呼。高雅节目《天空之城》小提琴演奏让所有人沉浸在音乐的海洋，诗歌朗诵《沁园春·雪》让大家领略到了伟大领袖毛泽东的豪迈气魄和广阔胸怀，复古舞蹈《护花使者》让大家鼓掌欢呼，传神写意的中国古典舞《采薇》让大家都进入了“昔我往矣，杨柳依依”的意境，相声《我要穿越》更是让大家怀疑自己身处“德云社”，软件部原创小品《疯狂营救》和搞笑版歌舞《咋了开发》《38度6》《好嗨哟》令全场笑炸，整场晚会高潮迭起。</p>
      <div class="NewsThreeimgList">
        <ul>
          <li v-for="(item,key) in imgList" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
      <p class='imgBottom'>2018年，公司很多部门和岗位涌现出许多成绩优异的员工，此次共颁发“成长进步、服务之星、技术尖兵、市场新锐、赢在团队、优秀团队”等十二个奖项。公司领导为获奖员工颁发证书和奖金，并向他们表示祝贺。</p>
      <p class='imgTop'>多才多艺的众志人给大家带来了整晚欢乐，欢乐之余众多幸运者在抽奖环节收到了公司准备的丰厚奖品。</p>
      <!-- eslint-enable -->
     <div class="NewsThreeimgList">
        <ul>
          <li v-for="(item,key) in imgListThree" :key="item.id">
            <img :src="item.img">
            <span class="hideKey">{{key}}</span>
            <div class="explain">{{item.explain}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="Hyperlink">
      <div>
        <router-link to="./NewsFour">上一篇:山东众志电子2018年众志成城总结大会召开</router-link>
      </div>
      <div>
        <router-link to="./NewsTwo">下一篇:初七！山东众志电子举行2019首场新春内部培训活动</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsThree',
  data() {
    return {
      imgListOne: [{
        img: '../../static/images/newsInformation/companyNews31.jpg', explain: '',
      },
      {
        img: '../../static/images/newsInformation/companyNews32.jpg', explain: '',
      }],
      imgListTwo: [{
        img: '../../static/images/newsInformation/companyNews33.jpg', explain: '公司董事长李松和新春贺词',
      }],
      imgList: [{
        img: '../../static/images/newsInformation/companyNews34.jpg', explain: '气势磅礴的《众志鼓舞》',
      },
      {
        img: '../../static/images/newsInformation/companyNews35.jpg', explain: '动感十足的《护花使者》',
      },
      {
        img: '../../static/images/newsInformation/companyNews36.jpg', explain: '美艳动人古典舞《采薇》',
      },
      {
        img: '../../static/images/newsInformation/companyNews37.jpg', explain: '爆笑相声《我要穿越》',
      },
      {
        img: '../../static/images/newsInformation/companyNews38.jpg', explain: '原创歌舞《咋了开发》',
      },
      {
        img: '../../static/images/newsInformation/companyNews39.jpg', explain: '燃爆全场的《好嗨哟》',
      },
      {
        img: '../../static/images/newsInformation/companyNews310.jpg', explain: '',
      }],
      imgListThree: [{
        img: '../../static/images/newsInformation/companyNews311.jpg', explain: '',
      },
      {
        img: '../../static/images/newsInformation/companyNews312.jpg', explain: '董事长领唱《众人划桨开大船》',
      }],
    };
  },
};
</script>

<style scoped>
.NewsThree {
  margin: 20px 15px;
}
/* title */
.NewsThreeTitle {
  text-align: center;
}
.NewsThreeTitle h1 {
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.NewsThreeTitle hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #000;
}
.NewsThreeTitle div {
  font-size: 14px;
  margin-bottom: 15px;
}

/* content */
.NewsThreeContent {
  margin-bottom: 30px;
}
.NewsThreeContent img {
  width: 100%;
}
.NewsThreeContent p {
  font-size: 15px;
  color: #666;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 10px 0px;
  text-align: justify;
  /* 这行必加，兼容ie浏览器 */
  text-justify: distribute-all-lines;
}
.NewsThreeContent p:nth-child(1) {
  margin-bottom: 15px;
  margin-top:25px;
}
.NewsThreeContent p.imgTop {
  margin-bottom: 25px;
}
.NewsThreeContent p.imgBottom {
  margin-top: -5px;
}

/* 隐藏key */
.hideKey {
  display:none
}

/* 图片列表设置 */
.NewsThreeimgList ul li {
  text-align: center;
}
.NewsThreeimgList ul li img {
  width:95%;
}
.NewsThreeimgList ul li div.explain {
  text-align: center;
  font-size:14px;
  color:#666;
  padding:5px 0px 20px 0px;
}

/* 上一篇  下一篇 */
.Hyperlink div:nth-child(1) {
  margin-top:-20px;
  margin-bottom:10px;
}
.Hyperlink div a {
  color:#666;
  font-size: 14px;
}

p {
  line-height: 1.8em;
}
</style>
