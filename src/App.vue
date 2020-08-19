<template>
  <div id="app">
    <router-view/>
    <MainTabBar v-show="$route.meta.showFooter"></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from "./components/mainTabbar/MainTabBar";
  import {mapActions} from 'vuex'
  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    mounted() {
      // this.$store.dispatch('getUserInfo')
      // this.getUserInfo();
      // this.getAddress()
    },
    methods:{
      // ...mapActions(['getUserInfo'])
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
