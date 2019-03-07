import Vue from 'vue';
import Router from 'vue-router';
import MainIndex from './zzdz/Home';
import position from './zzdz/position';
import contactUs from './zzdz/contactUs';
import personalCenter from './zzdz/personalCenter';
import EnterZZ from './zzdz/EnterZZ/EnterZZ';
import companyHonor from './zzdz/EnterZZ/companyHonor';
import companyProfileDetailed from './zzdz/EnterZZ/companyProfileDetailed';
import companyQualification from './zzdz/EnterZZ/companyQualification';
import NewsInformation from './zzdz/NewsInformation/NewsInformation';
import companyNewsIndex from './zzdz/NewsInformation/companyNewsIndex';
import NewsOne from './zzdz/NewsInformation/NewsOne';
import NewsTwo from './zzdz/NewsInformation/NewsTwo';
import NewsThree from './zzdz/NewsInformation/NewsThree';
import NewsFour from './zzdz/NewsInformation/NewsFour';
import NewsFive from './zzdz/NewsInformation/NewsFive';
import industryDynamicsIndex from './zzdz/NewsInformation/industryDynamicsIndex';
import industryDynamicsOne from './zzdz/NewsInformation/industryDynamicsOne';
import industryDynamicsTwo from './zzdz/NewsInformation/industryDynamicsTwo';
import industryDynamicsThree from './zzdz/NewsInformation/industryDynamicsThree';
import industryDynamicsFour from './zzdz/NewsInformation/industryDynamicsFour';
import industryDynamicsFive from './zzdz/NewsInformation/industryDynamicsFive';
import videoPlaybackIndex from './zzdz/NewsInformation/videoPlaybackIndex';
import videoPlaybackOne from './zzdz/NewsInformation/videoPlaybackOne';
import videoPlaybackTwo from './zzdz/NewsInformation/videoPlaybackTwo';
import videoPlaybackThree from './zzdz/NewsInformation/videoPlaybackThree';
import videoPlaybackFour from './zzdz/NewsInformation/videoPlaybackFour';
import videoPlaybackFive from './zzdz/NewsInformation/videoPlaybackFive';
import companyProducts from './zzdz/companyProducts/companyProducts';
import cloudComputing from './zzdz/companyProducts/cloudComputing';
import softwareProduct from './zzdz/companyProducts/softwareProduct';
import softwareProductOne from './zzdz/companyProducts/softwareProductOne';
import softwareProductTwo from './zzdz/companyProducts/softwareProductTwo';
import softwareProductThree from './zzdz/companyProducts/softwareProductThree';
import softwareProductFour from './zzdz/companyProducts/softwareProductFour';
import softwareProductFive from './zzdz/companyProducts/softwareProductFive';
import softwareProductSix from './zzdz/companyProducts/softwareProductSix';
import industryPlan from './zzdz/industryPlan/industryPlan';
import industryPlanIndex from './zzdz/industryPlan/industryPlanIndex';
import industryPlanTwoIndex from './zzdz/industryPlan/industryPlanTwoIndex';
import corporateCulture from './zzdz/corporateCulture/corporateCulture';
import partyBuilding from './zzdz/partyBuilding/partyBuilding';
import partyBuildingTwoIndex from './zzdz/partyBuilding/partyBuildingTwoIndex';
import talentRecruitment from './zzdz/talentRecruitment/talentRecruitment';

Vue.use(Router);

export default new Router({
  // 路由模式：hash(默认)，history模式
  mode: 'history',
  // 修改路由高亮样式，默认值为'router-link-active'
  // linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: MainIndex,
  },
  {
    path: '/mainIndex',
    component: MainIndex,
  },
  {
    path: '/contactUs',
    component: contactUs,
  },
  {
    path: '/position',
    component: position,
  },
  {
    path: '/personalCenter',
    component: personalCenter,
  },
  {
    path: '/partyBuilding',
    component: partyBuilding,
    children: [{
      path: '/',
      component: partyBuildingTwoIndex,
    },
    {
      path: '/partyBuilding/partyBuildingTwoIndex',
      component: partyBuildingTwoIndex,
    }],
  },
  {
    path: '/corporateCulture',
    component: corporateCulture,
  },
  {
    path: '/industryPlan',
    component: industryPlan,
    children: [{
      path: '/',
      component: industryPlanIndex,
    },
    {
      path: '/industryPlan/industryPlanIndex',
      component: industryPlanIndex,
    },
    {
      path: '/industryPlan/industryPlanTwoIndex',
      name: 'industryPlanTwoIndex',
      component: industryPlanTwoIndex,
    }],
  },
  {
    path: '/enterZZ',
    component: EnterZZ,
    children: [{
      path: '/',
      component: companyProfileDetailed,
    },
    {
      path: '/enterZZ/companyQualification',
      component: companyQualification,
    },
    {
      path: '/enterZZ/companyProfileDetailed',
      component: companyProfileDetailed,
    },
    {
      path: '/enterZZ/companyHonor',
      component: companyHonor,
    },
    ],
  },
  {
    path: '/NewsInformation',
    component: NewsInformation,
    children: [{
      path: '/',
      component: companyNewsIndex,
    },
    {
      path: '/NewsInformation/NewsInformationIndex',
      component: companyNewsIndex,
    },
    {
      path: '/NewsInformation/NewsOne',
      component: NewsOne,
    },
    {
      path: '/NewsInformation/NewsTwo',
      component: NewsTwo,
    },
    {
      path: '/NewsInformation/NewsThree',
      component: NewsThree,
    },
    {
      path: '/NewsInformation/NewsFour',
      component: NewsFour,
    },
    {
      path: '/NewsInformation/NewsFive',
      component: NewsFive,
    },
    {
      path: '/NewsInformation/industryDynamicsIndex',
      component: industryDynamicsIndex,
    },
    {
      path: '/NewsInformation/industryDynamicsOne',
      component: industryDynamicsOne,
    },
    {
      path: '/NewsInformation/industryDynamicsTwo',
      component: industryDynamicsTwo,
    },
    {
      path: '/NewsInformation/industryDynamicsThree',
      component: industryDynamicsThree,
    },
    {
      path: '/NewsInformation/industryDynamicsFour',
      component: industryDynamicsFour,
    },
    {
      path: '/NewsInformation/industryDynamicsFive',
      component: industryDynamicsFive,
    },
    {
      path: '/NewsInformation/videoPlaybackIndex',
      component: videoPlaybackIndex,
    },
    {
      path: '/NewsInformation/videoPlaybackOne',
      component: videoPlaybackOne,
    },
    {
      path: '/NewsInformation/videoPlaybackTwo',
      component: videoPlaybackTwo,
    },
    {
      path: '/NewsInformation/videoPlaybackThree',
      component: videoPlaybackThree,
    },
    {
      path: '/NewsInformation/videoPlaybackFour',
      component: videoPlaybackFour,
    },
    {
      path: '/NewsInformation/videoPlaybackFive',
      component: videoPlaybackFive,
    },
    ],
  },
  {
    path: '/companyProducts',
    component: companyProducts,
    children: [{
      path: '/',
      component: softwareProduct,
      children: [{
        path: '/',
        component: softwareProductOne,
      }],
    },
    {
      path: '/companyProducts/softwareProduct',
      component: softwareProduct,
      children: [{
        path: '/',
        component: softwareProductOne,
      },
      {
        path: '/companyProducts/softwareProduct/softwareProductOne',
        component: softwareProductOne,
      },
      {
        path: '/companyProducts/softwareProduct/softwareProductTwo',
        component: softwareProductTwo,
      }, {
        path: '/companyProducts/softwareProduct/softwareProductThree',
        component: softwareProductThree,
      },
      {
        path: '/companyProducts/softwareProduct/softwareProductFour',
        component: softwareProductFour,
      },
      {
        path: '/companyProducts/softwareProduct/softwareProductFive',
        component: softwareProductFive,
      },
      {
        path: '/companyProducts/softwareProduct/softwareProductSix',
        component: softwareProductSix,
      }],
    },
    {
      path: '/companyProducts/cloudComputing',
      component: cloudComputing,
    }],
  },
  {
    path: '/talentRecruitment',
    component: talentRecruitment,
  }],
});
