<template>
  <div class="mainContainer">
    <myHeader></myHeader>
    <bannerPage></bannerPage>
    <characteristicZZ></characteristicZZ>
    <companyProfile></companyProfile>
    <partialApplication></partialApplication>
    <newsInformation></newsInformation>
    <corporateCulture></corporateCulture>
    <myFooter></myFooter>
    <tabBar></tabBar>
    <br>
    <br>
  </div>
</template>

<script>
import myHeader from './MainIndex/header';
import bannerPage from './MainIndex/banner';
import characteristicZZ from './MainIndex/characteristicZZ';
import companyProfile from './MainIndex/companyProfile';
import partialApplication from './MainIndex/partialApplication';
import corporateCulture from './MainIndex/corporateCulture';
import newsInformation from './MainIndex/newsInformation';
import myFooter from './MainIndex/footer';
import tabBar from './tabbar';

export default {
  name: 'MainIndex',
  components: {
    myHeader,
    bannerPage,
    characteristicZZ,
    companyProfile,
    partialApplication,
    corporateCulture,
    myFooter,
    newsInformation,
    tabBar,
  },
};
</script>

