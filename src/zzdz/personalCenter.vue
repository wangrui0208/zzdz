<template>
  <div class="personalCenter" :style="{height:Height+'px'}">
    <div class="topMy">
      <div>
        <div class="portraitImg">
          <img src="static/images/persionalCenter/camare.jpg" alt="">
        </div>
        <div class="portraitName">
          <div class="name">{{UserName}}</div>
          <div class="department">部门：{{department}}</div>
        </div>
        <div class="topArrow">
          <img src="static/images/persionalCenter/arrow-right.svg" alt="">
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="portraitList">
      <div v-for="(item,key) in persionalList" :key="item.id" @click="update(key)">
        <span class="hideKey">{{key}}</span>
        <div class="iconImg"><img :src="item.img" alt=""></div>
        <div class="iconName">{{item.title}}</div>
        <div class="arrowList"><img :src="item.arrow" alt=""></div>
      </div>
    </div>
    <!-- 修改用户名 -->
    <div class="Lid" :style="{height:(Height+56)+'px'}" :class="hideUpdate">
      <div class="updateContent">
        <p class="updateProject">修改用户名</p>
        <div class="updateInput"><input type="text" v-model="updateUserName"></div>
        <div class="updateButton"><button @click="submit">确定</button></div>
      </div>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from './tabbar';

export default {
  name: 'personalCenter',
  data() {
    return {
      UserName: '王瑞',
      updateUserName: '王瑞',
      department: '软件部',
      Height: window.screen.height - 56,
      hideUpdate: 'hide',
      persionalList: [{
        img: './static/images/persionalCenter/pen.svg',
        title: '用户名',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      },
      {
        img: './static/images/persionalCenter/Password.svg',
        title: '修改密码',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      },
      {
        img: './static/images/persionalCenter/department.svg',
        title: '软件部',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      },
      {
        img: './static/images/persionalCenter/mail.svg',
        title: '公司邮件',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      },
      {
        img: './static/images/persionalCenter/soft.svg',
        title: 'OA',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      },
      {
        img: './static/images/persionalCenter/set.svg',
        title: '设置',
        arrow: './static/images/persionalCenter/arrow-right.svg',
      }],
    };
  },
  components: {
    tabBar,
  },
  methods: {
    update(key) {
      if (key === 0) {
        this.hideUpdate = 'show';
      }
    },
    submit() {
      this.UserName = this.updateUserName;
      this.hideUpdate = 'hide';
    },
  },
};
</script>

<style scoped>

/* 显示弹框 */
.show {
  display: inline;
}
/* 隐藏弹框 */
.hide {
  display: none;
}

.personalCenter {
  background: rgba(237,237,237,0.5);
}
/* 头像设置 */
.topMy {
  width:100%;
  /* height:110px; */
  background:#fff;
  border:1px solid #fff;
  box-sizing: border-box;
}
.topMy > div {
  margin:20px 10px;
  position: relative;
}
.portraitImg img {
  margin-left:10px;
  width:70px !important;
  height:70px !important;
  border:1px solid #F3F0F0;
  border-radius: 15px;
}
.topMy > div > div {
  display:inline-block;
}

.portraitName {
  height:60px;
  position: absolute;
  bottom:0px;
  margin-left:10px;
}
.portraitName .name {
  font-size: 15px;
  font-weight: 500;
  margin-bottom:15px;
  letter-spacing: 3px;
}

.portraitName .department {
  color:#666;
  font-size: 13px;
  letter-spacing: 1px;;
}
.topArrow {
  position: absolute;
  right:0px;
  bottom:5px;
}
/* 列表设置 */
.personalCenter img {
  width:30px;
  height:30px;
}

.portraitList {
  margin-top:10px;
}
.portraitList > div >div {
  display: inline-block;
}
.portraitList > div {
  margin-bottom:5px;
  background:#fff;
  height:50px;
  line-height: 50px;
  font-size: 14px;
  letter-spacing: 1px;
  position: relative;
}
.portraitList .iconImg {
  margin-left:10px;
  position: absolute;
  top:10px;
  left:5px;
}
.portraitList .iconImg img {
  width:25px !important;
  height:25px !important;
}
.portraitList .iconName {
  margin-left:60px;
}
.arrowList {
  position: absolute;
  right:10px;
  top:10px;
}
/* 隐藏key */
.hideKey {
  display: none;
}


/* 弹出框 */
.Lid {
  position: fixed;
  top:0px;
  left:0px;
  width:100%;
  height:1000px;
  z-index: 5454543;
  box-sizing: border-box;
}
.updateContent {
  position: fixed;
  top:30%;
  left:26%;
  border:1px solid #F6F6F6;
  font-size: 14px;
  text-align: center;
  background: #FAFAFA;
  border-radius: 15px;
}
.updateContent > div {
  margin-bottom:15px;
}
.updateContent > p {
  margin:20px 0px 10px 0px;
  color:#666;
  letter-spacing: 2px;
}
.updateContent > div > input {
  width:60%;
  margin-top:15px;
  text-align: center;
  border-radius:5px;
  height:25px;
  letter-spacing: 2px;
}
.updateContent > div > button {
  width:40%;
  letter-spacing: 2px;
  padding:5px 0px;
}
</style>
