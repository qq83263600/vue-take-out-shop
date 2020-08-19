<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/search">
      <img slot="item-icon" src="../../assets/img/tabbar/search.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/search_active.svg" alt="">
      <div slot="item-text">搜索</div>
    </tab-bar-item>
    <tab-bar-item path="/order">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="../../assets/img/tabbar/user.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/user_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../tabbar/TabBar";
  import TabBarItem from "../tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
