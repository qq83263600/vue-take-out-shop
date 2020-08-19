<template>
  <div class="shops">
    <a>
      <div class="shop" v-for="(shop,index) in shops" :key="index" @click="goShop">
        <div class="left">
<!--          <img :src="baseImgUrl+shop.image_path" alt="">-->
          <img src="./timg.jpg" alt="">
        </div>
        <div class="right">
          <div class="top">
            <div class="yellow">品牌</div>
            <h4>{{shop.name}}</h4>
            <div class="supports" v-for="(item,index) in shop.supports" :key="index">{{item.icon_name}}</div>
          </div>
          <div class="center">
            <div class="star"><Star :score="shop.rating" :size="24"/></div>
            <div class="score">{{shop.rating}}</div>
            <div class="sell">月售{{shop.recent_order_num}}单</div>
            <div class="message">{{shop.delivery_mode.text}}</div>
          </div>
          <div class="bottom">
            <span>¥{{shop.float_minimum_order_amount}}起送</span>
            <span class="segmentation">/</span>
            <span>配送费约¥{{shop.float_delivery_fee}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Star from "../Star/Star";
  export default {
    name: "shopList",
    data(){
      return{
        baseImgUrl: 'http://cangdu.org:8001/img/'
      }
    },
    computed:{
      ...mapState(['shops'])
    },
    components:{
      Star,
    },
    methods:{
      goShop(){
        this.$router.replace({
          path:'/shop',
        })
      }
    }
  }
</script>

<style scoped>

  .shops{
    margin-bottom: 50px;
    overflow: hidden;
  }
  .shop{
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #666666;
  }
  .left{
    float: left;
    box-sizing: border-box;
    width: 23%;
    /*padding-right: 10px;*/
    height: 90px;
    /*padding-top: 8px;*/

  }
  img{
    display: block;
    width: 75px;
    height: 75px;
    padding-left: 10px;
    padding-top: 10px;
    /*align-self: center;*/
    /*align-items: center;*/
  }
  .right{
    padding-top: 10px;
    float: right;
    width: 77%;
    height: 90px;
  }
  .top{
    width: 100%;
  }
  .yellow{
    float: left;
    background-color: #ffe817;
    font-size: 11px;
    line-height: 11px;
    padding: 2px 2px;
    border-radius: 2px;
    margin-right: 5px;
    color: #333;
    font-weight: 700;
  }
  h4 {
    float: left;
    width: 200px;
    color: #333;
    font-width: 700;
    font-size: 16px;
    line-height: 16px;
  }
  .supports{
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0 2px;
    border-radius: 2px;
  }
  .center{
    /*justify-content:space-between;*/
    display: flex;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
    align-items:baseline;
  }
  .star{
    justify-content:space-around;
    float: left;
    font-size: 0;
  }
  .score{
    float: left;
    font-size: 10px;
    color: #ff5777;
    margin-left: 10px;
    display: block;
    line-height: 10px;
  }
  .sell{
    float: left;
    font-size: 10px;
    color: #666;
    transform: scale(0.8);
    vertical-align: baseline;
    box-sizing: border-box;
    display: inline-block;
  }
  .message{
    color: #428bca;
    border: 1px solid #428bca;
    transform: scale(0.7);
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
    margin-top: 10px;
    margin-left: 90px;
  }
  .bottom{
    width: 100%;
    color: #666666;
    font-size: 10px;
    margin-left: 15px;
  }
</style>