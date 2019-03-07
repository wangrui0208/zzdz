<template>
  <div class="companyProducts">
    <companyProductsHeader></companyProductsHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '../MainIndex/footer';
import companyProductsHeader from '../companyProducts/companyProductsHeader';

export default {
  name: 'companyProducts',
  components: {
    myFooter,
    companyProductsHeader,
  },
};
</script>

<style scoped>
.companyProducts {
  font-size: 14px;
}
</style>
