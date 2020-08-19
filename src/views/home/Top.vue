<template>
  <nav-bar class="home-nav">
    <router-link slot="left" @click="goSearch" to="/search">
      <img src="./search.svg" alt="">
    </router-link >
    <div slot="center">{{title}}</div>
    <router-link slot="right" class="right" :to="userInfo._id?'userInfo':'login'">
      <span v-if="!userInfo._id">登录|注册</span>
      <span v-else><img src="./user_active.svg" alt=""></span>
    </router-link>
  </nav-bar>
</template>

<script>

  import NavBar from "../../components/navbar/NavBar";
  import {mapState} from 'vuex'
  export default {
    props:{
      title:String
    },
    name: "Top",
    data(){
      return{

      }
    },
    components:{
      NavBar
    },

    methods:{
      goSearch(){
        this.$emit('goSearch')
      },
    },
    computed:{
      ...mapState(['userInfo'])
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #428bca;
    color: #f6f6f6;
    font-size: 18px;
  }
  .home-nav div img{
    width: 25px;
    margin-top: 8px;
  }
  .right{
    font-size: 12px;
    color: #eeeeee;
  }
</style>