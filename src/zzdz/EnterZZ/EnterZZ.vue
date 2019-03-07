<template>
  <div class="EnterZZ">
    <EnterZZHeader></EnterZZHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '../MainIndex/footer';
import EnterZZHeader from '../EnterZZ/EnterZZHeader';

export default {
  name: 'EnterZZ',
  components: {
    myFooter,
    EnterZZHeader,
  },
};
</script>

<style scoped>
.EnterZZ {
  font-size: 14px;
}
</style>
