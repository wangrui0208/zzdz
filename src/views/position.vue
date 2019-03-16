<template>
  <div class='position'>
    <!--百度地图容器-->
    <div class='map' id='dituContent' :style="{height:Height+'px'}">
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar';

export default {
  name: 'position',
  data() {
    return {
      Height: window.screen.height - 57,
    };
  },
  mounted() {
    this.initMap();
  },
  components: {
    tabBar,
  },
  methods: {
    initMap() {
      this.createMap(); // 创建地图
    },
    createMap() {
      /* eslint-disable */
      const map = new BMap.Map('dituContent');
      // 定义一个中心点坐标
      const point = new BMap.Point(117.122816, 36.121349);
      // 设定地图的中心点和坐标并将地图显示在地图容器中
      map.centerAndZoom(point, 18);
      // 将map变量存储在全局
      window.map = map;

      // 地图事件设置函数：
      map.enableDragging(); // 启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); // 禁用地图滚轮放大缩小，默认禁用(可不写)
      map.enableDoubleClickZoom(); // 启用鼠标双击放大，默认启用(可不写)
      map.disableKeyboard(); // 禁用键盘上下左右键移动地图，默认禁用(可不写)
      const ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE,
      });
      map.addControl(ctrl_nav);
      
      // 创建标注
      const marker = new BMap.Marker(point); 
      map.addOverlay(marker); // 将标注添加到地图中
      map.centerAndZoom(point, 15);
      const opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '山东众志电子有限公司', // 信息窗口标题
        enableMessage: false, // 设置允许信息窗发送短息
      };
      const infoWindow = new BMap.InfoWindow('地址：泰安市高新区南天门大街1110号泰山科技创业城A区1号', opts); // 创建信息窗口对象 
      map.openInfoWindow(infoWindow, point); // 开启信息窗口
      marker.addEventListener('click', () => {
        map.openInfoWindow(infoWindow, point); // 开启信息窗口
      });
    },
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  border: #ccc solid 1px;
  font-size: 14px;
  color: #666;
  line-height: 1.8em;
}
.iw_poi_title {
  color: #cc5522;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  padding-right: 13px;
  white-space: nowrap;
}
.iw_poi_content {
  font: 12px arial, sans-serif;
  overflow: visible;
  padding-top: 4px;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
</style>

