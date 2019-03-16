<template>
  <div class="EnterZZ">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <companyProfileDetailed :indexkid="index"></companyProfileDetailed>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/footer';
import AHeader from '@/components/AHeader';
import companyProfileDetailed from '@/views/EnterZZ/companyProfileDetailed';

export default {
  name: 'EnterZZ',
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
      this.$http.get('/static/data/enterZZ.json').then((res) => {
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
    companyProfileDetailed,
  },
};
</script>

<style scoped>
.EnterZZ {
  font-size: 14px;
}
</style>
