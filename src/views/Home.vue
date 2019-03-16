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
import myHeader from '@/components/header';
import bannerPage from '@/components/banner';
import characteristicZZ from '@/components/characteristicZZ';
import companyProfile from '@/components/companyProfile';
import partialApplication from '@/components/partialApplication';
import corporateCulture from '@/components/corporateCulture';
import newsInformation from '@/components/newsInformation';
import myFooter from '@/components/footer';
import tabBar from '@/components/tabbar';

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

