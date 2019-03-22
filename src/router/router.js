import Vue from 'vue';
import Router from 'vue-router';
import MainIndex from '@/views/Home';
import position from '@/views/position';
import contactUs from '@/views/contactUs';
import personalCenter from '@/views/personalCenter';
import EnterZZ from '@/views/EnterZZ/EnterZZ';
import NewsInformation from '@/views/NewsInformation/NewsInformation';
import companyNewsIndex from '@/views/NewsInformation/companyNewsIndex';
import NewsOne from '@/views/NewsInformation/NewsOne';
import NewsTwo from '@/views/NewsInformation/NewsTwo';
import NewsThree from '@/views/NewsInformation/NewsThree';
import NewsFour from '@/views/NewsInformation/NewsFour';
import NewsFive from '@/views/NewsInformation/NewsFive';
import industryDynamicsIndex from '@/views/NewsInformation/industryDynamicsIndex';
import industryDynamicsOne from '@/views/NewsInformation/industryDynamicsOne';
import industryDynamicsTwo from '@/views/NewsInformation/industryDynamicsTwo';
import industryDynamicsThree from '@/views/NewsInformation/industryDynamicsThree';
import industryDynamicsFour from '@/views/NewsInformation/industryDynamicsFour';
import industryDynamicsFive from '@/views/NewsInformation/industryDynamicsFive';
import videoPlaybackIndex from '@/views/NewsInformation/videoPlaybackIndex';
import videoPlaybackOne from '@/views/NewsInformation/videoPlaybackOne';
import videoPlaybackTwo from '@/views/NewsInformation/videoPlaybackTwo';
import videoPlaybackThree from '@/views/NewsInformation/videoPlaybackThree';
import videoPlaybackFour from '@/views/NewsInformation/videoPlaybackFour';
import videoPlaybackFive from '@/views/NewsInformation/videoPlaybackFive';
import companyProducts from '@/views/companyProducts/companyProducts';
import cloudComputing from '@/views/companyProducts/cloudComputing';
import softwareProduct from '@/views/companyProducts/softwareProduct';
import softwareProductOne from '@/views/companyProducts/softwareProductOne';
import softwareProductTwo from '@/views/companyProducts/softwareProductTwo';
import softwareProductThree from '@/views/companyProducts/softwareProductThree';
import softwareProductFour from '@/views/companyProducts/softwareProductFour';
import softwareProductFive from '@/views/companyProducts/softwareProductFive';
import softwareProductSix from '@/views/companyProducts/softwareProductSix';
import industryPlan from '@/views/industryPlan/industryPlan';
import industryPlanIndex from '@/views/industryPlan/industryPlanIndex';
import industryPlanTwoIndex from '@/views/industryPlan/industryPlanTwoIndex';
import corporateCulture from '@/views/corporateCulture/corporateCulture';
import partyBuilding from '@/views/partyBuilding/partyBuilding';
import talentRecruitment from '@/views/talentRecruitment/talentRecruitment';

Vue.use(Router);

export default new Router({
  // 路由模式：hash(默认)，history模式
  mode: 'history',
  // 修改路由高亮样式，默认值为'router-link-active'
  // linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'mainIndex',
    component: MainIndex,
    meta: {
      index: 'mainIndex',
    },
  },
  {
    path: '/mainIndex',
    name: 'mainIndex',
    component: MainIndex,
    meta: {
      index: 'mainIndex',
    },
  },
  {
    path: '/contactUs',
    component: contactUs,
    name: 'contactUs',
    meta: {
      index: 'contactUs',
    },
  },
  {
    path: '/position',
    name: 'position',
    component: position,
    meta: {
      index: 'position',
    },
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter,
    meta: {
      index: 'personalCenter',
    },
  },
  {
    path: '/partyBuilding',
    component: partyBuilding,
    name: 'partyBuilding',
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
    name: 'enterZZ',
    component: EnterZZ,
    meta: {
      index: 'enterZZ',
    },
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
  /* eslint-disable*/
  scrollBehavior (to, from, savedPosition) { // 页面切换时滚到顶部
    return { x: 0, y: 0 };
  },
});
