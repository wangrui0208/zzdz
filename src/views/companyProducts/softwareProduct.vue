<template>
  <div class='softwareProduct'>
    <div class='softwareProductTitle'>
      <img
        src='../../../static/images/companyProducts/companyProductsTitle.jpg'
        alt=''
      >
    </div>
    <div class='softwareProductList'>
      <div class='ListTitle'>
        <b class="bLine"></b>
        <span>丰富的软件产品 全面的服务</span>
      </div>
      <div class='ListContent'>
        <ul>
          <!-- eslint-disable -->
          <li
            v-for="(item,key) in ImgList"
            :key="item.id"
            @click="enterSubPage(key)"
            :class="isCurrent[key]"
          >
            <img
              :src='item.img'
              alt=''
            >
            <span class='hideKey'>{{key}}</span>
            <span class="Title">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <hr class="hrStyle">
    <div class="lineImg">
      <img
        src="../../../static/images/companyProducts/line.png"
        alt=""
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'softwareProduct',
  data() {
    return {
      ImgList: [{
        img: './static/images/companyProducts/List11.png',
        title: '现代奶业云平台',
      },
      {
        img: './static/images/companyProducts/List12.png',
        title: '智慧养老云平台',
      },
      {
        img: './static/images/companyProducts/List23.png',
        title: '智慧金融监管云平台',
      },
      {
        img: './static/images/companyProducts/List21.png',
        title: '智慧物价云平台',
      },
      {
        img: './static/images/companyProducts/List22.png',
        title: '智慧金融安全云平台',
      },
      {
        img: './static/images/companyProducts/List13.png',
        title: '智慧旅游云平台',
      },
      {
        img: './static/images/companyProducts/List31.png',
        title: '智慧食药监管云平台',
      },
      {
        img: './static/images/companyProducts/List32.png',
        title: '智慧农业云平台',
      }],
      displayCurrent: 'show',
      hideCurrent: 'hide',
      isCurrent: ['show', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide'],
    };
  },
  methods: {
    enterSubPage(value) {
      const index = value + 1;
      if (index === 1) {
        this.isCurrent = ['show', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductOne',
        });
      } else if (index === 2) {
        this.isCurrent = ['hide', 'show', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductTwo',
        });
      } else if (index === 3) {
        this.isCurrent = ['hide', 'hide', 'show', 'hide', 'hide', 'hide', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductThree',
        });
      } else if (index === 4) {
        this.isCurrent = ['hide', 'hide', 'hide', 'show', 'hide', 'hide', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductFour',
        });
      } else if (index === 5) {
        this.isCurrent = ['hide', 'hide', 'hide', 'hide', 'show', 'hide', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductFive',
        });
      } else if (index === 6) {
        this.isCurrent = ['hide', 'hide', 'hide', 'hide', 'hide', 'show', 'hide', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductSix',
        });
      } else if (index === 7) {
        this.isCurrent = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'show', 'hide'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductSix',
        });
      } else if (index === 8) {
        this.isCurrent = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'show'];
        this.$router.push({
          path: '/companyProducts/softwareProduct/softwareProductSix',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 设置选中的样式 */
.show {
  background: #1c4ade !important;
}
/* 未选中样式 */
.hide {
  background: #1e92e4 !important;
}
/* title图片设置 */
.softwareProductTitle {
  margin-top:10px;
}
.softwareProductTitle img {
  width: 100%;
  height:120px;
}

/* 隐藏key */
.hideKey {
  display: none;
}

/* 设置列表标题 */
.ListTitle {
  margin: 30px 0px 20px 10px;
  font-size: 16px;
  position: relative;
}
.ListTitle .bLine {
  display: inline-block;
  position: absolute;
  width: 8px;
  height: 30px;
  background: rgba(6, 135, 226, 0.9);
}
.ListTitle span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /* border:1px solid red; */
  margin-left: 15px;
}
/* li列表 */
.ListContent ul {
  font-size: 0px;
  margin-bottom: 15px;
}
.ListContent ul li {
  display: inline-block;
  font-size: 15px;
  width: 48%;
  background: rgba(6, 135, 226, 0.9);
  color: #fff;
  height: 40px;
  position: relative;
  line-height: 40px;
  margin: 0px 8px;
  vertical-align: top;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #888888;
}
/* 偶数行设置 */
.ListContent ul li:nth-of-type(even) {
  width: 42%;
}
.ListContent ul li img {
  width: 15%;
  position: absolute;
  left: 5px;
  top: 5px;
}
.ListContent ul li span.Title {
  display: inline-block;
  width: 80%;
  height: 100%;
  margin-left: 33px;
  font-weight: 500;
}
.ListContent ul li:nth-child(1) span.Title {
  margin-left: 36px;
}

.hrStyle {
  height: 2px;
  border: none;
  width: 95%;
  border-top: 2px solid #1d87e2;
}

/* 分界的img */
.lineImg {
  text-align: center;
  margin-top: -5px;
}
.lineImg img {
  width: 17%;
}
</style>

