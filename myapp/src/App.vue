<template>
  <div id="app">
    <!-- 美团外卖 -->
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- 一个 : 相当于 v-bind:  -->
    <router-link :to="{ name: 'home', params: { name: 'zs', age: 10 } }">
      首页
    </router-link>
    <!-- <router-link to="/mine">我的</router-link> -->
    <router-link :to="{ path: '/mine', query: { name: 'lisi', age: 18 } }">
      我的
    </router-link>
    <!-- 路径跳转传参 -->
    <!-- <router-link to="/mine/lisi/18"> 我的 </router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
