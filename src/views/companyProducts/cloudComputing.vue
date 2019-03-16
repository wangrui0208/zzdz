<template>
  <div class='cloudComputing'>
    <div class='cloudComputingTitle'>
      <img
        src='../../../static/images/companyProducts/cloudComputingTitle.jpg'
        alt=''
      >
    </div>
    <div class='cloudComputingCenter'>
      <div class='CenterTitle'>
        云计算中心
      </div>
      <!-- eslint-disable -->
      <div class="CenterP">
        <p>泰安市云计算中心做为“省级重点建设项目”，是由泰安市人民政府批准、泰安市高新技术产业开发区组织、山东众志电子有限公司承建运营的云计算示范性应用基地，是地市级区域云计算应用创新领域具有领导地位的云计算服务商、云计算应用运营商。</p>
        <p>项目建设总投资7000万元人民币，占地4800平方米，目前已建成使用面积800平方米的标准化机房两个，达到国家A级标准，满足国际Tier 4建设标准。机房内设备的部署采用模块化分区的方式，分为计算区、数据库区、存储区、云平台管理区、出口互联区和安全缓冲区，一期已建成96个业务承载机柜，分私有云和公有云两个业务机房，二期机柜数量将增加到200个。</p>
      </div>
      <!-- eslint-enable -->
      <div class="imgList">
        <ul>
          <li v-for="(item,key) in imgList" :key="item.id">
            <img :src="item.img" alt="">
            <span class="hideKey">{{key}}</span>
            <p class="imgBottom">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <!-- eslint-disable -->
      <div class="CenterP">
        <p>当前泰安市云计算中心的服务内容包含数据中心基础服务、IT运维服务外包服务、数据中心应用服务、私有云建设技术支持服务、软件研发服务五大类，并逐步拓展更多的产品体验服务，为客户营造良好的使用环境。</p>
        <p>泰安市云计算中心秉承“政府引导、企业运作”的经营模式，遵循“灵活部署、自主可控、安全运营、绿色节能”的经营方针，紧跟大数据潮流，同时力求在云时代下，为用户提供安全、可信的云服务，从而打造一个用户放心、健康、可信的云生态环境，为区域云计算产业创新发展提供原动力。</p>
      </div>
      <!-- eslint-enable -->
    </div>
    <div class="qualificationHonor">
      <div class="subtitle">
        <div>资质荣誉</div>
        <div>
          <img
            src="../../../static/images/companyProducts/cloudComputingTitleBottom.png"
            alt=""
          >
        </div>
      </div>
      <div class="honorList">
        <ul>
          <li
            v-for="(item,key) in honorList"
            :key="item.id"
          >
            <span class="hideKey">{{key}}</span>
            <img
              src="../../../static/images/companyProducts/cloudComputingLi.jpg"
              alt=""
            >
            <span class="item">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="operationConcept">
      <div class="subtitle">
        <div>运营理念</div>
        <div>
          <img
            src="../../../static/images/companyProducts/cloudComputingTitleBottom.png"
            alt=""
          >
        </div>
      </div>
      <div class="CenterP">
        <!-- eslint-disable -->
        <p>泰安市云计算中心坚持“围绕中心建平台、围绕平台做应用、围绕应用做创新，围绕创新做服务，围绕服务做数据，围绕数据做智慧”的发展思路。</p>
        <p>遵循“灵活部署、自主可控、安全运营、绿色节能”的经营方针，紧跟大数据潮流，同时力求在云时代下，为用户提供安全、可信的云服务，从而打造一个用户放心、健康、可信的云生态环境，为区域云计算产业创新发展提供原动力。</p>
        <!-- eslint-enable -->
      </div>
    </div>
    <div class="productCase">
      <div class="productCaseTitle">
        <hr class="hr">
        <p>云计算产品及案例</p>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,key) in productList" :key="item.id" @click="selectProduct(key)">
            <div class="listImg">
              <img :src="item.img" alt="">
            </div>
            <span class="hideKey">{{key}}</span>
            <span class="bigTitle" :class="selectClass[key]">{{item.title}}</span>
          </li>
        </ul>
      </div>
      <div class="productContent">
        <ul>
          <li v-for="(products,key) in productList" :key="products.id" :style="{display:show[key]}">
            <span class="hideKey">{{key}}</span>
            <div v-for="(product,key) in products.children" :key="product.id">
              <span class="hideKey">{{key}}</span>
              <div class="subTitle">{{product.subTitle}}</div>
              <div class="Content">{{product.content}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cloudComputing',
  data() {
    return {
      imgList: [{
        img: './static/images/companyProducts/cloudComputingList1.jpg',
        title: '云应用软件市场趋势',
      },
      {
        img: './static/images/companyProducts/cloudComputingList2.jpg',
        title: '顶级的云计算环境',
      },
      {
        img: './static/images/companyProducts/cloudComputingList3.jpg',
        title: '丰富的软件产品',
      },
      {
        img: './static/images/companyProducts/cloudComputingList4.jpg',
        title: '服务套餐 量身而选',
      }],
      honorList: ['国家计算机系统集成三级资质', '涉密信息系统集成资质（乙级）', '山东省安防一级资质ITSS（二级）运维资质认证', '两化融合管理体系贯标咨询服务机构认证', 'IDC/ISP增值运营服务商', '国家A级数据中心', '公安部信息系统安全等级评测三级认证', '数据中心联盟组织可信云服务认证'],
      productList: [{
        title: '数据服务',
        img: './static/images/companyProducts/productOne.png',
        children: [{
          subTitle: 'A：虚拟主机租',
          content: '虚拟主机租赁主要是针对政府、企业、金融、交通、医疗、教育等行业构筑的定制资源服务，具有稳定、安全、弹性、高性能的产品特点',
        },
        {
          subTitle: 'B：IDC设备托管',
          content: '泰安市云计算中心是按照国家GB50174中A级机房建设标准建设，达到国际Tier 3+建设标准，IDC托管服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。支持移动、联通、电信三家运营商主干网络接入，用户根据带宽需求可自行定制。',
        },
        {
          subTitle: 'C：宽带接入服务',
          content: '泰安市云计算中心拥有联通、电信、移动三家互联网服务提供商冗余光纤线路接入，可为企事业单位、社区、学校等用户提供稳定、安全、可靠、高性能的因特网宽带接入服务。',
        },
        {
          subTitle: 'D：容灾备份服务',
          content: '泰安市云计算中心可提供全面可靠的数据容灾备份方案，不仅实现普通机架式服务器的备份，也可以实现虚拟化平台的备份。支持文档数据、Oracle、SQL Server、MySQL、Exchange Server、Active Directory、DB2、Domino和Sybase主流数据库备份。',
        },
        {
          subTitle: 'E：网站备案服务',
          content: '泰安市云计算中心作为互联网信息业务和增值业务的电信运营商，具有工信部颁发的IDC和ISP虚拟运营商牌照，被山东省通信管理局评为五星级ICP网站备案资质。',
        },
        {
          subTitle: 'F：高性能图形计算服务',
          content: '泰安市云计算中心作为虚拟化专业提供商，依托成熟云桌面系统资源，与显卡虚拟化结合，为用户提供3D图形处理，工业设计渲染，多媒体视频处理等服务。',
        },
        ],
      },
      {
        title: 'IT运维',
        img: './static/images/companyProducts/productThree.png',
        children: [{
          subTitle: 'A：IT运维外包服务',
          content: '虚拟主机租赁主要是针对政府、企业、金融、交通、医疗、教育等行业构筑的定制资源服务，具有稳定、安全、弹性、高性能的产品特点',
        },
        {
          subTitle: 'B：IT运维外包服务',
          content: '泰安市云计算中心是按照国家GB50174中A级机房建设标准建设，达到国际Tier 3+建设标准，IDC托管服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。支持移动、联通、电信三家运营商主干网络接入，用户根据带宽需求可自行定制。',
        },
        {
          subTitle: 'C：IT运维外包服务',
          content: '泰安市云计算中心拥有联通、电信、移动三家互联网服务提供商冗余光纤线路接入，可为企事业单位、社区、学校等用户提供稳定、安全、可靠、高性能的因特网宽带接入服务。',
        },
        {
          subTitle: 'D：容灾备份服务',
          content: '泰安市云计算中心可提供全面可靠的数据容灾备份方案，不仅实现普通机架式服务器的备份，也可以实现虚拟化平台的备份。支持文档数据、Oracle、SQL Server、MySQL、Exchange Server、Active Directory、DB2、Domino和Sybase主流数据库备份。',
        },
        {
          subTitle: 'E：IT运维外包服务',
          content: '泰安市云计算中心作为互联网信息业务和增值业务的电信运营商，具有工信部颁发的IDC和ISP虚拟运营商牌照，被山东省通信管理局评为五星级ICP网站备案资质。',
        },
        {
          subTitle: 'F：IT运维外包服务',
          content: '泰安市云计算中心作为虚拟化专业提供商，依托成熟云桌面系统资源，与显卡虚拟化结合，为用户提供3D图形处理，工业设计渲染，多媒体视频处理等服务。',
        },
        ],
      },
      {
        title: '数据应用',
        img: './static/images/companyProducts/productFour.png',
        children: [{
          subTitle: 'A：数据中心应用服务',
          content: '虚拟主机租赁主要是针对政府、企业、金融、交通、医疗、教育等行业构筑的定制资源服务，具有稳定、安全、弹性、高性能的产品特点',
        },
        {
          subTitle: 'B：数据中心应用服务',
          content: '泰安市云计算中心是按照国家GB50174中A级机房建设标准建设，达到国际Tier 3+建设标准，IDC托管服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。支持移动、联通、电信三家运营商主干网络接入，用户根据带宽需求可自行定制。',
        },
        {
          subTitle: 'C：数据中心应用服务',
          content: '泰安市云计算中心拥有联通、电信、移动三家互联网服务提供商冗余光纤线路接入，可为企事业单位、社区、学校等用户提供稳定、安全、可靠、高性能的因特网宽带接入服务。',
        },
        {
          subTitle: 'D：数据中心应用服务',
          content: '泰安市云计算中心可提供全面可靠的数据容灾备份方案，不仅实现普通机架式服务器的备份，也可以实现虚拟化平台的备份。支持文档数据、Oracle、SQL Server、MySQL、Exchange Server、Active Directory、DB2、Domino和Sybase主流数据库备份。',
        },
        {
          subTitle: 'E：数据中心应用服务',
          content: '泰安市云计算中心作为互联网信息业务和增值业务的电信运营商，具有工信部颁发的IDC和ISP虚拟运营商牌照，被山东省通信管理局评为五星级ICP网站备案资质。',
        },
        {
          subTitle: 'F：数据中心应用服务',
          content: '泰安市云计算中心作为虚拟化专业提供商，依托成熟云桌面系统资源，与显卡虚拟化结合，为用户提供3D图形处理，工业设计渲染，多媒体视频处理等服务。',
        },
        ],
      },
      {
        title: '云技术',
        img: './static/images/companyProducts/productFive.png',
        children: [{
          subTitle: 'A：私有云技术建设服务',
          content: '虚拟主机租赁主要是针对政府、企业、金融、交通、医疗、教育等行业构筑的定制资源服务，具有稳定、安全、弹性、高性能的产品特点',
        },
        {
          subTitle: 'B：私有云技术建设服务',
          content: '泰安市云计算中心是按照国家GB50174中A级机房建设标准建设，达到国际Tier 3+建设标准，IDC托管服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。支持移动、联通、电信三家运营商主干网络接入，用户根据带宽需求可自行定制。',
        },
        {
          subTitle: 'C：私有云技术建设服务',
          content: '泰安市云计算中心拥有联通、电信、移动三家互联网服务提供商冗余光纤线路接入，可为企事业单位、社区、学校等用户提供稳定、安全、可靠、高性能的因特网宽带接入服务。',
        },
        {
          subTitle: 'D：私有云技术建设服务',
          content: '泰安市云计算中心可提供全面可靠的数据容灾备份方案，不仅实现普通机架式服务器的备份，也可以实现虚拟化平台的备份。支持文档数据、Oracle、SQL Server、MySQL、Exchange Server、Active Directory、DB2、Domino和Sybase主流数据库备份。',
        },
        {
          subTitle: 'E：私有云技术建设服务',
          content: '泰安市云计算中心作为互联网信息业务和增值业务的电信运营商，具有工信部颁发的IDC和ISP虚拟运营商牌照，被山东省通信管理局评为五星级ICP网站备案资质。',
        },
        {
          subTitle: 'F：私有云技术建设服务',
          content: '泰安市云计算中心作为虚拟化专业提供商，依托成熟云桌面系统资源，与显卡虚拟化结合，为用户提供3D图形处理，工业设计渲染，多媒体视频处理等服务。',
        },
        ],
      },
      {
        title: '软件研发',
        img: './static/images/companyProducts/productSix.png',
        children: [{
          subTitle: 'A：软件研发服务',
          content: '虚拟主机租赁主要是针对政府、企业、金融、交通、医疗、教育等行业构筑的定制资源服务，具有稳定、安全、弹性、高性能的产品特点',
        },
        {
          subTitle: 'B：软件研发服务',
          content: '泰安市云计算中心是按照国家GB50174中A级机房建设标准建设，达到国际Tier 3+建设标准，IDC托管服务为用户提供安全、可靠、稳定、高效运行的服务器托管与机柜租赁。支持移动、联通、电信三家运营商主干网络接入，用户根据带宽需求可自行定制。',
        },
        {
          subTitle: 'C：软件研发服务',
          content: '泰安市云计算中心拥有联通、电信、移动三家互联网服务提供商冗余光纤线路接入，可为企事业单位、社区、学校等用户提供稳定、安全、可靠、高性能的因特网宽带接入服务。',
        },
        {
          subTitle: 'D：软件研发服务',
          content: '泰安市云计算中心可提供全面可靠的数据容灾备份方案，不仅实现普通机架式服务器的备份，也可以实现虚拟化平台的备份。支持文档数据、Oracle、SQL Server、MySQL、Exchange Server、Active Directory、DB2、Domino和Sybase主流数据库备份。',
        },
        {
          subTitle: 'E：软件研发服务',
          content: '泰安市云计算中心作为互联网信息业务和增值业务的电信运营商，具有工信部颁发的IDC和ISP虚拟运营商牌照，被山东省通信管理局评为五星级ICP网站备案资质。',
        },
        {
          subTitle: 'F：软件研发服务',
          content: '泰安市云计算中心作为虚拟化专业提供商，依托成熟云桌面系统资源，与显卡虚拟化结合，为用户提供3D图形处理，工业设计渲染，多媒体视频处理等服务。',
        },
        ],
      }],
      show: ['inline', 'none', 'none', 'none', 'none'],
      selectClass: ['show', 'hide', 'hide', 'hide', 'hide'],
    };
  },
  methods: {
    selectProduct(key) {
      if (key === 0) {
        this.show = ['inline', 'none', 'none', 'none', 'none'];
        this.selectClass = ['show', 'hide', 'hide', 'hide', 'hide'];
      } else if (key === 1) {
        this.show = ['none', 'inline', 'none', 'none', 'none'];
        this.selectClass = ['hide', 'show', 'hide', 'hide', 'hide'];
      } else if (key === 2) {
        this.show = ['none', 'none', 'inline', 'none', 'none'];
        this.selectClass = ['hide', 'hide', 'show', 'hide', 'hide'];
      } else if (key === 3) {
        this.show = ['none', 'none', 'none', 'inline', 'none'];
        this.selectClass = ['hide', 'hide', 'hide', 'show', 'hide'];
      } else if (key === 4) {
        this.show = ['none', 'none', 'none', 'none', 'inline'];
        this.selectClass = ['hide', 'hide', 'hide', 'hide', 'show'];
      }
    },
  },
};
</script>

<style scoped>
/* 选中时 */
.show {
  color:#000 !important;
  font-weight: 600 !important;
}
/* 未选中 */
.hide {
  color:#666 !important;
  font-weight: 100 !important;
}

.cloudComputing {
  margin-top: 10px;
}
.cloudComputing .cloudComputingTitle img {
  width: 100%;
  height: 150px;
}

/* 云计算中心 */
.CenterTitle {
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  color: #0888e3;
  font-weight: 500;
  font-family: "微软雅黑";
}

/* 云计算中心的p段落 */
.CenterP {
  margin: 0px 10px 20px 10px;
}
.CenterP p {
  height: 30%;
  line-height: 1.9em;
  text-indent: 2em;
  letter-spacing: 1px;
  color: #666;
  margin: 10px 0px;
  font-size: 15px;
  text-align: justify;
}

/* 云计算中心img */
.imgList {
  text-align: center;
  margin: 10px;
}
.imgList ul li {
  display: inline-block;
  width: 48%;
  border-bottom: 1px solid #d6d7d7;
  margin-bottom: 20px;
  margin-right: 8px;
}
.imgList ul li:nth-of-type(even) {
  margin-right: 0px;
}

.imgList ul li img {
  width: 45%;
}
.imgList ul li p {
  color: #7286ff;
  font-size: 16px;
  margin: 15px 0px;
}

/* 隐藏key */
.hideKey {
  display: none;
}

/* 资质荣誉 */
.subtitle {
  margin: 30px 10px;
}
.subtitle div:nth-child(1) {
  font-size: 22px;
  margin-left: 20px;
}
.honorList {
  margin: 20px 20px;
}
.honorList ul li {
  margin-bottom: 20px;
  height: 10%;
  line-height: 1.8em;
}
.honorList ul li span.item {
  margin-left: 10px;
  font-size: 15px;
}

/* 云服务产品及案例 */
.productCaseTitle {
  margin: 10px;
  position: relative;
  margin-top: 60px;
  height: 30px;
}
.hr {
  height: 2px;
  border: none;
  border-top: 1px solid #333;
}
.productCaseTitle p {
  position: absolute;
  font-size: 20px;
  z-index: 2;
  top: -15px;
  height: 30px;
  line-height: 30px;
  padding: 0px 6px;
  background: #fff;
  color: #666;
  left: 25%;
  text-shadow: 10px 10px 5px #b9ddf7;
}


/* 大列表 */
.productList {
  margin:30px 10px 20px 10px;
}
.productList>ul li {
  display: inline-block;
  width:20%;
  text-align: center;
}
.bigTitle {
  display: inline-block;
  font-size: 14px;
  margin:10px 0px;
  letter-spacing: 1px;
  color:#666;
}
.listImg img {
  width:80%;
}

/* 内容 */
.productContent {
  margin:0px 15px;
  margin-bottom:30px;
}
.subTitle {
  font-size:17px;
  color:#666;
  font-weight: 600;
  font-family: "微软雅黑";
  margin:10px 0px;
}

.Content {
  text-indent: 2em;
  color:#666;
  letter-spacing: 1px;
  height:15%;
  line-height: 1.8em;
  font-size: 15px;
  text-align: justify;
}
</style>

