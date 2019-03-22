<template>
  <div class="partyBuilding">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <partyBuildingTwoIndex :indexkid="index"></partyBuildingTwoIndex>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/footer';
import AHeader from '@/components/AHeader';
import partyBuildingTwoIndex from '@/views/partyBuilding/partyBuildingTwoIndex';

export default {
  name: 'partyBuilding',
  data() {
    return {
      isShow: [true, false],
      titleList: '',
      index: 1,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    newIndex(index) {
      this.index = index;
    },
    getData() {
      this.$http.get('/static/data/partyBuilding.json').then((res) => {
        this.titleList = res.data.title;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
  components: {
    myFooter,
    AHeader,
    partyBuildingTwoIndex,
  },
};
</script>

<style scoped>
.partyBuilding {
  font-size: 14px;
}
</style>
