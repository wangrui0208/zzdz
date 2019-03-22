<template>
  <div class="newsInformation">
    <AHeader :isShow='isShow' :titleList="titleList" @getIndex="newIndex"></AHeader>
    <div class="companyNewsTitle">
      <img :src="imgUrl">
    </div>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from '@/components/footer';
import AHeader from '@/components/AHeader';

export default {
  name: 'newsInformation',
  data() {
    return {
      isShow: [true, false],
      titleList: '',
      imgUrl: '',
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
          path: '/NewsInformation/NewsInformationIndex',
        });
      } else if (index === 2) {
        this.$router.push({
          path: '/NewsInformation/industryDynamicsIndex',
        });
      } else if (index === 3) {
        this.$router.push({
          path: '/NewsInformation/videoPlaybackIndex',
        });
      }
    },
    getData() {
      this.$http.get('/static/data/NewsInformation.json').then((res) => {
        this.titleList = res.data.title;
        this.imgUrl = res.data.TopImg;
      }).catch((err) => {
        /* eslint-disable */
        console.log(err);
      });
    },
  },
  components: {
    AHeader,
    myFooter,
  },
};
</script>

<style scoped>
.companyNewsTitle {
  margin: 10px 0px;
}
.companyNewsTitle img {
  width: 100%;
}
</style>

