<template>
  <div class="companyProducts">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/footer';
import AHeader from '@/components/AHeader';

export default {
  name: 'companyProducts',
  data() {
    return {
      isShow: [false, true],
      titleList: '',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    newIndex(index) {
      if (index === 0) {
        this.$router.push({
          path: '/mainIndex',
        });
      } else if (index === 1) {
        this.$router.push({
          path: '/companyProducts/softwareProduct',
        });
      } else if (index === 1) {
        this.$router.push({
          path: '/companyProducts/softwareProduct',
        });
      } else if (index === 2) {
        this.$router.push({
          path: '/companyProducts/cloudComputing',
        });
      }
    },
    getData() {
      this.$http.get('/static/data/companyProducts.json').then((res) => {
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
  },
};
</script>

<style scoped>
.companyProducts {
  font-size: 14px;
}
</style>
