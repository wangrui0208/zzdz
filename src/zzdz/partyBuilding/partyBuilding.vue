<template>
  <div class="partyBuilding">
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '../MainIndex/footer';

export default {
  name: 'partyBuilding',
  components: {
    myFooter,
  },
};
</script>

<style scoped>
.partyBuilding {
  font-size: 14px;
}
</style>
