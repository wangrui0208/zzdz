<template>
  <div class="talentRecruitment">
    <div class="logoImg">
      <img src="../../assets/images/logo.jpg" alt="">
    </div>
    <div class="titleList">
      <div v-for="(item,index) in titleList" :key="index">
        <div @click="jumpClick(index)">
          <img :src="item.img" alt="">
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="titleImg">
      <img src="../../../static/images/talentRecruitment/talentRecruitmentTitle.jpg" alt="">
    </div>
    <div class="centerContent">
      <p class="bigContent">如果你热爱这个行业</p>
      <p class="bigContent">那它就不只是一份工作</p>
      <p>有这样一群人</p>
      <p>他们愿意把自己的全部能量挥洒在这里</p>
      <p>愿意把对事业的美好憧憬寄托在这里</p>
      <p>愿意忘记时间的流转并把对生活的热情融入这里</p>
      <p>这里没有沉闷的交流，没有超越忍耐的合作</p>
      <p>没有失去自由的畅想</p>
      <p>没有无法逾越的隔阂</p>
      <p>有的是心照不宣，轻松和谐</p>
      <p>有的是放纵思绪，丰富且自得</p>
      <p class="bigContent">这里是山东众志电子</p>
      <p class="bigContent">一个挑战自我，展示自我的舞台</p>
      <p>如果你有热情与兴趣加入众志团队</p>
      <p>请将简历发送到</p>
      <span class="emial">xujl@zzdz.com.cn</span>
      <p>我们将与你取得联系</p>
    </div>
    <div class="recruitInformation">
      <div class="recruitTitle" @click="showInformation">
        <span>招聘岗位</span>
      </div>
      <div class="recruitList">
        <div v-for="(recruit,index) in recruitList" :key="index" @click="enterInformation(index)">
          <img :src="recruit.img" alt="">
          <div class="recruitClassification">{{recruit.title}}</div>
        </div>
      </div>
      <div class="recruit" :class="showItem">
        <div class="mail">
          简历投递邮箱：xujl@zzdz.com.cn
        </div>
        <div class="title">
          <ul>
            <li :style="{background:color[0]}" @click="selectItem(0)">
             <a>研发类</a>
            </li>
            <li :style="{background:color[1]}" @click="selectItem(1)">
              <a>设计、策划类</a>
            </li>
            <li :style="{background:color[2]}" @click="selectItem(2)">
              <a>市场类</a>
            </li>
            <li :style="{background:color[3]}" @click="selectItem(3)">
              <a :style="{color:color[4]}">运维服务类</a>
            </li>
          </ul>
        </div>
        <div class="RD">
          <div class="subClassification" :class="selectSub[0]">
            <ul>
              <li @click="selectItemOne(0)">嵌入式单片机研发工程师</li>
              <li @click="selectItemOne(1)">Web前端开发工程师</li>
              <li @click="selectItemOne(2)">软件测试工程师</li>
            </ul>
          </div>
          <div class="embedded" :class="oneItem[0]">
            <p>招聘人数:2人</p>
            <p>工作地点:泰安</p>
            <p>工作年限：1-2年</p>
            <p>最低学历：本科</p>
            <p>岗位职责：</p>
            <p>1、根据设计说明或需求完成STM8和STM32单片机C语言源程序代码开发及硬件电路设计，包括原理图设计；</p>
            <p>2、进行单片机代码单元测试，集成测试；</p>
            <p>3、负责产品软硬结合的各项功能测试；</p>
            <p>4、负责本职工作的技术文档编写与维护；</p>
            <p>5、负责产品的生产技术支持。</p>
            <p>岗位要求：</p>
            <p>1、计算机或相关专业本科学历及以上；</p>
            <p>2、1年以上单片机研发工作经历；</p>
            <p>3、精通单片机C语言编程；</p>
            <p>4、了解RS232、RS485、CAN通讯；</p>
            <p>5、熟悉STM8或STM32系列单片机；</p>
            <p>6、富有团队精神,责任感和沟通能力。</p>
            <br>
            <p>公司福利：</p>
            <p>1、优美的就餐环境，提供午餐补助、交通补助、话费补助；</p>
            <p>2、签订劳动合同，双重保险：五险+商业险；</p>
            <p>3、公司注重企业文化的打造：员工关怀、生日蛋糕卡、集体旅游、拓展训练、文娱活动、周末影院、篮球比赛等；</p>
            <p>4、完善的培训计划，与华为、彩特、浪潮等知名企业建立良好的合作关系。</p>
          </div>
          <div class="web" :class="oneItem[1]">
            <p>招聘人数：2人</p>
            <p>工作地点：泰安</p>
            <p>工作性质：全职</p>
            <p>工作年限：1-2年</p>
            <p>最低学历：本科</p>
            <p>岗位职责：</p>
            <p>1、利用html/css3/js/jquery/ajax等技术，进行Web前端开发；</p>
            <p>2、与后端开发团队紧密配合，确保代码有效对接，优化前端性能。</p>
            <p>岗位要求：</p>
            <p>1、熟练掌握html/css3/js/jquery/ajax等前端开发技术；</p>
            <p>2、为人诚实正直，做事认真负责，具有良好的沟通和团队协作能力；</p>
            <p>3、有大型网站前端或移动web开发经验者优先。</p>
            <br>
            <br>
            <p>公司福利：</p>
            <p>1、优美的就餐环境，提供午餐补助、交通补助、话费补助；</p>
            <p>2、签订劳动合同，双重保险：五险+商业险；</p>
            <p>3、公司注重企业文化的打造：员工关怀、生日蛋糕卡、集体旅游、拓展训练、文娱活动、周末影院、篮球比赛等；</p>
            <p>4、完善的培训计划，与华为、彩特、浪潮等知名企业建立良好的合作关系。</p>
          </div>
          <div class="test" :class="oneItem[2]">
            <p>招聘人数：1人</p>
            <p>工作地点：泰安</p>
            <p>工作性质：全职</p>
            <p>工作年限：2-3年</p>
            <p>最低学历：大专</p>
            <p>岗位职责：</p>
            <p>1、完成公司项目、产品的所有相关测试工作；</p>
            <p>2、根据产品需求和设计文档，制定测试计划，并分析测试需求、设计测试流程；</p>
            <p>3、根据产品测试需求完成测试环境的设计与配置工作；</p>
            <p>4、执行具体测试任务并确认测试结果、缺陷跟踪，完成测试报告以及测试结果分析；</p>
            <p>5、定期提交产品缺陷统计分析报告并完成产品测试总结报告；</p>
            <p>6、完成测试团队的管理考核及业务培训工作。</p>
            <p>岗位要求：</p>
            <p>1、 熟悉软件开发测试流程，能编写测试计划、设计测试方案、测试用例，有测试管理工作经验优先；一年以上软件测试工作经验优先。</p>
            <p>2、 熟悉计算机软硬件知识，熟悉Windows操作系统的配置和管理,能够搭建常用的服务；</p>
            <p>3、 熟悉各种操作系统、sqlserver等数据库系统。</p>
            <p>4、 工作细心，善于发现问题。</p>
            <p>5、 良好的协作意识，责任心强，能够承受较大的压力。</p>
            <br>
            <p>公司福利：</p>
            <p>1、优美的就餐环境，提供午餐补助、交通补助、话费补助；</p>
            <p>2、签订劳动合同，双重保险：五险+商业险；</p>
            <p>3、公司注重企业文化的打造：员工关怀、生日蛋糕卡、集体旅游、拓展训练、文娱活动、周末影院、篮球比赛等；</p>
            <p>4、完善的培训计划，与华为、彩特、浪潮等知名企业建立良好的合作关系</p>
          </div>
        </div>
        <div class="Design">
          <div class="subClassification declare" :class="selectSub[1]">
            <ul>
              <li>申报项目</li>
            </ul>
          </div>
          <div class="declarationItem" :class="twoItem[0]">
            <p>项目申报</p>
            <p>招聘人数:1人</p>
            <p>工作地点:泰安</p>
            <p>工作性质：全职</p>
            <p>工作年限：2-3年</p>
            <p>最低学历：大专</p>
            <p>岗位职责：</p>
            <p>1、负责收集、整理政府相关领域的产业优惠扶持政策指南入编、项目申报跟进等工作；</p>
            <p>2、负责科技项目申报相关的各项材料、档案的统筹管理；</p>
            <p>3、负责编写及整理所需项目申报科研项目的相关材料，包括集成类项目、互联网类项目等；</p>
            <p>4、跟进项目落实和研究开发进度，与公司内部各相关部门组织推进工作。</p>
            <p>岗位要求：</p>
            <p>1、3年以上相关工作经验，熟悉科技项目申请流程，有项目申报经验者优先考虑；</p>
            <p>2、熟悉政府类项目知识及工作流程，具备基本商务信函写作能力及较强的书面和口头表达能力；</p>
            <p>3、熟悉公文写作格式，熟练运用OFFICE等办公软件；</p>
            <p> 4、工作仔细认真。</p>
          </div>
        </div>
        <div class="Market">
          <div class="subClassification market" :class="selectSub[2]">
            <ul>
              <li @click="selectItemThree(0)">市场销售(计算机行业)</li>
              <li @click="selectItemThree(1)">申报项目(物联网行业)</li>
            </ul>
          </div>
          <div class="computer" :class="threeItem[0]">
            <p>招聘人数:10人</p>
            <p>工作地点:泰安</p>
            <p>工作性质：全职</p>
            <p>工作年限：2-3年</p>
            <p>最低学历：大专</p>

            <p>岗位职责：</p>
            <p>1、开拓新的销售渠道和客户，维护老客户，自主开发及拓展上下游用户，尤其是终端用户；</p>
            <p>2、根据市场实际情况，搜集市场信息、客户需求、行业信息等，及时向部门经理提出市场活动需求及方案；</p>
            <p>3、协助部门经理制定市场部年度、季度和月度的市场实施计划；</p>
            <p>4、独立完成销售合同签署、项目验收、预付款及应收款的入账；</p>
            <p>5、动态把握市场价格，定期向公司提供市场分析及预测报告和个人工作日/周报。</p>
            <p>岗位要求：</p>
            <p>1、计算机、教育等相关专业，或从事过计算机相关行业、教育行业的销售；</p>
            <p>2、了解计算机、信息化、教育等相关行业情况；</p>
            <p>3、良好的团队合作精神，服从领导安排；</p>
            <p>4、较强的观察能力和应变能力，积极主动地学习能力，有较强的总结能力与分析能力。</p>
            <p>5、计算机相关专业及教育相关专业的优秀应届毕业生可培养。</p>
          </div>
          <div class="internet" :class="threeItem[1]">
            <p>招聘人数:10人</p>
            <p>工作地点:泰安</p>
            <p>工作性质：全职</p>
            <p>工作年限：不限</p>
            <p>最低学历：大专</p>
            <p>岗位职责：</p>
            <p>1、学习了解奶牛市场环境，产品定位。</p>
            <p>2、制定销售计划和销售策略。</p>
            <p>3、拜访客户，维护客户关系。</p>
            <p>4、与相关政府部门建立长期合作关系。</p>
            <p>5、监控项目实施，协调项目有关人员，负责验收。</p>
            <p>6、负责项目合同签署和资金回收。</p>
            <p>岗位要求：</p>
            <p>1、接收优秀应届大学毕业生，有过奶牛市场销售经验者优先。</p>
            <p>2、良好的团队合作精神，服从领导安排。</p>
            <p>3、较强的观察能力和应变能力。</p>
            <p>4、积极主动地学习能力。</p>
            <p>5、有较强的总结能力与分析能力。</p>
          </div>
        </div>
        <div class="Maintenance">
          <div class="subClassification operation" :class="selectSub[3]">
            <ul>
              <li>集成项目实施工程师</li>
            </ul>
          </div>
          <div class="integration" :class="fourItem[0]">
              <p>招聘人数:1人</p>
              <p>工作地点:泰安</p>
              <p>岗位职责：</p>
              <p>1、负责公司销售市场产品的设备安装调试工作；</p>
              <p>2、做好现场安装工程系统检测，完成技术验收等工作；</p>
              <p>3、负责售后设备产品的现场维护，维修，修复工作，并对用户进行相关技术培训；</p>
              <p>4、负责售后技术档案的汇总，归档及管理工作；</p>
              <p>5、负责反馈系统的技术问题信息，协助完成技术问题修复，改进，系统升级等工作。</p>
              <p>岗位要求：</p>
              <p>1、要求从事计算机，电路，机电设备安装等相关行业，有一定的工作经验；</p>
              <p>2、有一定计算机专业基础，会简单的软件系统安装调试工作；</p>
              <p>3、懂得监控、电路布线，安装，对简单故障能进行维修，调试；</p>
              <p>4、工作积极，任劳任怨，责任心强，有较强的观察，应变，分析能力；</p>
              <p>5、掌握集成行业施工知识、施工标准，熟悉投标方案制作、熟悉软硬件产品。</p>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from '../MainIndex/footer';

export default {
  name: 'talentRecruitment',
  components: {
    myFooter,
  },
  data() {
    return {
      showItem: 'hide',
      selectSub: ['show', 'hide', 'hide', 'hide'],
      oneItem: ['show', 'hide', 'hide'],
      twoItem: ['hide'],
      threeItem: ['hide', 'hide'],
      fourItem: ['hide'],
      color: ['#FFAC52', '#5EE364', '#FF75B9', '#7391FF', '#fff'],
      titleList: [{
        img: '../../../static/images/talentRecruitment/titleHome.png',
        title: '首页',
      },
      {
        img: '../../../static/images/talentRecruitment/titleEnterZZ.png',
        title: '走进众志',
      },
      {
        img: '../../../static/images/talentRecruitment/titleSearch.png',
        title: '校园招聘',
      },
      {
        img: '../../../static/images/talentRecruitment/titleMail.png',
        title: '社会招聘',
      }],
      recruitList: [{
        img: '../../../static/images/talentRecruitment/recruit1.png',
        title: '研发类>',
      },
      {
        img: '../../../static/images/talentRecruitment/recruit2.png',
        title: '设计、策划类>',
      },
      {
        img: '../../../static/images/talentRecruitment/recruit3.png',
        title: '市场类>',
      },
      {
        img: '../../../static/images/talentRecruitment/recruit4.png',
        title: '运维服务类>',
      }],
    };
  },
  methods: {
    jumpClick(key) {
      if (key === 0) {
        this.$router.push({
          path: '/mainIndex',
        });
      } else if (key === 1) {
        this.$router.push({
          path: '/enterZZ',
        });
      } else if (key === 2 || key === 3) {
        const recruitInformation = document.getElementsByClassName('recruitInformation')[0];
        const offsetTop = recruitInformation.offsetTop;
        document.documentElement.scrollTop = offsetTop - 100;
      }
    },
    showInformation() {
      if (this.showItem === 'show') {
        this.showItem = 'hide';
      } else {
        this.showItem = 'show';
      }
    },
    selectItem(key) {
      if (key === 0) {
        this.selectSub = ['show', 'hide', 'hide', 'hide'];
        this.oneItem = ['show', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['hide'];
      } else if (key === 1) {
        this.selectSub = ['hide', 'show', 'hide', 'hide'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['show'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['hide'];
      } else if (key === 2) {
        this.selectSub = ['hide', 'hide', 'show', 'hide'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['show', 'hide'];
        this.fourItem = ['hide'];
      } else if (key === 3) {
        this.selectSub = ['hide', 'hide', 'hide', 'show'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['show'];
      }
    },
    selectItemOne(key) {
      if (key === 1) {
        this.oneItem = ['hide', 'show', 'hide'];
      } else if (key === 0) {
        this.oneItem = ['show', 'hide', 'hide'];
      } else if (key === 2) {
        this.oneItem = ['hide', 'hide', 'show'];
      }
    },
    selectItemThree(key) {
      if (key === 0) {
        this.threeItem = ['show', 'hide'];
      } else if (key === 1) {
        this.threeItem = ['hide', 'show'];
      }
    },
    enterInformation(key) {
      this.showItem = 'show';
      if (key === 1) {
        this.selectSub = ['hide', 'show', 'hide', 'hide'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['show'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['hide'];
      } else if (key === 2) {
        this.selectSub = ['hide', 'hide', 'show', 'hide'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['show', 'hide'];
        this.fourItem = ['hide'];
      } else if (key === 3) {
        this.selectSub = ['hide', 'hide', 'hide', 'show'];
        this.oneItem = ['hide', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['show'];
      } else if (key === 0) {
        this.selectSub = ['show', 'hide', 'hide', 'hide'];
        this.oneItem = ['show', 'hide', 'hide'];
        this.twoItem = ['hide'];
        this.threeItem = ['hide', 'hide'];
        this.fourItem = ['hide'];
      }
    },
  },
};
</script>

<style scoped>
/* 显示招聘信息 */
.show {
  display: inline;
}
.hide {
  display: none;
}

/* logo */
.logoImg img {
  height:55px;
  margin-top:15px;
}
.titleList {
  width:100%;
  background: rgba(21,55,112,0.8);
  color:#fff;
  font-size: 14px;
  font-weight: 100;
}
.titleList > div {
  display: inline-block;
  width:25%;
  text-align:center
}
.titleList  img {
  margin-top:15px;
  width:45px;
  height:45px;
}
.titleList > div p {
  margin-bottom:15px;
  letter-spacing: 1px;
}
/* titleImg */
.titleImg img {
  width:100%;
}
/* 中心内容 */
.centerContent {
  text-align: center;
  color:#666;
  margin:30px 0px;
}
.centerContent p {
  margin-bottom:10px;
  font-size:14px;
}
.centerContent p.bigContent {
  font-size:18px;
}
.emial {
  display: inline-block;
  /* margin:20px 0px; */
  background: #37ACFF;
  color:#fff;
  border-radius: 15px;
  padding:5px;
  margin-bottom:10px;
}

/* 招聘岗位 */
.recruitInformation {
  background: #2B6EE1;
  width:100%;
  position: relative;
}

.recruitTitle span {
  display: inline-block;
  margin:15px;
  background: #fff;
  border-radius: 10px;
  padding:10px;
  color: #2B6EE1;
  font-size: 18px;
  font-weight: 600;
}

/* 招聘列表 */
.recruitImg img {
  width:40px;
  height:40px;
  margin-bottom:10px;
  margin-left:10px;
}
.recruitList {
  text-align: center;
  margin-top:20px;
}

.recruitList > div {
  display: inline-block;
  width:49%;
  position: relative;
  margin-bottom:30px;
}

.recruitList > div > img {
  width:70%;
}
.recruitList > div > div {
  position: absolute;
  width:100%;
  bottom:20px;
  left:0px;
  color:#fff;
  font-size: 14px;
}

/* 具体信息 */
.recruit {
  position: absolute;
  top:50px;
  margin-top:20px;
}
.title {
  text-align: center;
  font-size: 0px;
}
.title ul li {
  display: inline-block;
  box-sizing: border-box;
  font-size:15px;
  height:50px;
  line-height: 50px;
  letter-spacing: 1px;
}
.title ul li:nth-of-type(odd) {
  width:20%;
}
.title ul li:nth-of-type(even) {
  width:30%;
}

/* 子分类title */
.subClassification {
  position: relative;
  top:-10px;
  left:-10px;
}
.subClassification ul li {
  background: #FFAC52;
  height:35px;
  line-height: 35px;
  text-align: center;
  width:49%;
  letter-spacing: 1px;
  font-size: 13px;
  border-bottom:1px solid #fff;
}
.subClassification ul li:nth-child(1) {
  border-top:1px solid #fff;
}


/* RD */
.RD, .Design, .Market, .Maintenance{
  background: #fff;
  padding:10px;
  color:#666;
  font-size: 15px;
}
.RD p,.declarationItem p, .Market p, .Maintenance p{
  line-height: 1.8em;
  text-align: justify;
  letter-spacing: 1px;
}
.RD p:nth-child(1),.declarationItem p:nth-child(1),
.Market p:nth-child(1), .Maintenance p:nth-child(1) {
  margin-top:30px;
}
.declare {
  position: absolute;
  top:50px;
  left:20%;
}
.declare ul li {
  width:110px;
  background: #5EE364 !important;
}
.market {
  position: absolute;
  top:50px;
  left:50%;
}
.market ul li {
  width:157px;
  background: #FF75B9 !important;
}
.operation {
  position: absolute;
  top:50px;
  left:58%;
}
.operation ul li {
  width:157px;
  background: #7391FF !important;
  color:#fff;
}

/* 投递邮箱 */
.mail {
  color:#2B6EE1;
  position: absolute;
  right:8px;
  top:-30px;
  background: #fff;
  border-radius: 10px;
  padding:5px;
  font-size: 14px;
}
</style>

