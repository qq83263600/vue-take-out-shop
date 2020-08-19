<template>
  <router-link :to="userInfo._id ? '/mine':'/login'">
    <div>
      <nav-bar class="myNavBar">
        <div slot="center">我的</div>
      </nav-bar>
      <user-info v-on:toLogin="toLogin"></user-info>
      <money></money>
      <div class="org"></div>
      <list-view></list-view>
      <mt-button type="danger" class="setOut" v-show="userInfo._id" @click="goOut">退出登录</mt-button>
    </div>

  </router-link>

</template>

<script>
  import NavBar from "../../components/navbar/NavBar";
  import UserInfo from "./child/UserInfo";
  import Money from "./child/Money";
  import ListView from "./child/ListView";

  import {MessageBox,Toast} from "mint-ui";
  import {mapState} from 'vuex'

  export default {
    name: "Mine",
    components: {
      NavBar,
      UserInfo,
      Money,
      ListView
    },
    methods: {
      toLogin() {
        this.$router.push('/login').catch(() => {
        })
      },
      goOut() {
        MessageBox.confirm('点击确认按钮，将确认退出！').then(
            action =>{
          //请求退出
              this.$store.dispatch('goOut')
              Toast('退出登录成功')
        },
            action =>{
              Toast('你已经取消了退出登录')
            }
        );
      }
    },
    computed: {
      ...mapState(['userInfo'])
    }
  }
</script>

<style scoped>
  .myNavBar {
    background-color: #428bca;
    color: #f6f6f6;
    font-size: 18px;
  }

  .org {
    height: 15px;
    border-bottom: 1px solid #dddddd;
  }

  .setOut {
    width: 100%;
    margin-top: 10px;
  }
</style>