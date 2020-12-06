<template>
  <div>
      <!-- go(res),res为-1表示上一页，以此类推-2表示上上页，1代表下一页等 -->
      <button @click="$router.go(-2)">返回</button>
    <button @click="go()">我的页面</button>
    我是首页{{ $route.params.name }} {{ $route.params.age }}
    <router-link to="/home/test1">test1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        go(){
            // this.$router.push('/mine')
            this.$router.push({path:'/mine',query:{name:'zs'}})

        }
    },
};
</script>

<style lang="scss" scoped>
</style>