<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:0px;
  margin:0px;
}
html,body {
  padding: 0px;
  margin: 0px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

li {
  list-style: none;
  color: #000;
}

ul,li,h1,h2,h3,h4,h5,p {
  padding: 0px;
  margin: 0px;
}

.mainContainer {
  width: 100%;
  background: #ffffff;
}

</style>
