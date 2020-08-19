<template>
  <div>
    <div>
      <top :title="address.name" @goSearch="goSearch"></top>
    </div>
<!--    轮播图-->
    <div class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(categorys,index) in categorysArry"
               :key="index">
            <a href="javascript:" v-for="(category,index) in categorys" :key="index" class="itemFoods">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url" alt="">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>

        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 滚动条 -->
<!--        <div class="swiper-scrollbar"></div>-->
      </div>

    </div>

  <shop-list></shop-list>
<!--    <div @click="getAddress">123</div>-->
  </div>
</template>

<script>
  // import NavBar from "../../components/navbar/NavBar";
  import {mapActions,mapState} from 'vuex'

  import Top from "./Top" ;
  import shopList from "../../components/shopList/shopList";
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "Home",
    components:{
      shopList,
      Top
    },
    data(){
      return {
        // geohash:'40.10038,116.36867',
        // topTitle:'',
        baseImageUrl:'https://fuss10.elemecdn.com/'
      }
    },
    created() {
      // this.getPosition()
      // this.$store.dispatch('getAddress')
      this.getAddress()
    },
    mounted() {

      this.$store.dispatch('getCategorys'),
      this.$store.dispatch('getShops')
      //创建swiper对象，实现轮播
      // new Swiper('.swiper-container',{
      //   loop: true, // 循环模式选项
      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      //   // 如果需要滚动条
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // })

    },
    watch:{
      categorys (value){
        //$nextTick 一旦完成界面更新，就会执行
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
      }
    },
    computed:{
      ...mapState(['address','categorys']),

      //根据categorys一维数组生成一个二维数组
      //小数组中的元素最大个数是8
      categorysArry(){
        const {categorys} = this
        //准一个空的二维数组
        const arr = []
        //准备一个小数组（最大长度是8）
        let minArr = []
        //遍历categorys
        categorys.forEach(c=>{
          //若当前小数组已经满了，创建一个新的数组
          if (minArr.length===8){
            minArr = []
          }
          //若当前小数组是空数组，将小数组保存到大数组中
          if (minArr.length===0){
            arr.push(minArr)
          }
          //将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },
    methods:{

      ...mapActions(['getAddress']),

      goSearch(){
        this.$router.push('/search').catch(()=>{})
      },
      // getHttp(){
      //   this.$http({
      //     method:'get',
      //     url:'/api/index_category'
      //   }).then((res)=>{
      //     // if (res.code === 0)
      //       console.log(res.data);
      //   })
      //
      // }

      //获取标签头
      // async getPosition(){
      // const {data:res} = await this.$http.get(
      //       '/api/position/'+this.geohash,
      //   )
      //   if (res.code ===!0){
      //     alert('获取标签信息失败')
      //   }else{
      //     // console.log(res);
      //     this.topTitle = res.data.name
      //   }
      // },

      //获取食品分类列表
      // async getHttp(){
      //   const {data:res} = await this.$http({
      //     methods: 'get',
      //     url:'/api/index_category'
      //   })
      //   if (res.code===!0){
      //     console.log('获取轮播图信息错误');
      //   }
      //   console.log(res.data);
      // },
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
  }
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
  }
  .center{
    overflow: hidden;
  }
  .home_nav{
    border-bottom: 1px solid #a3a3a5;
    margin-top: 15px;
    height: 200px;
    background: #fff;
  }
  .swiper-container{
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper{
    height: 100%;
    width: 100%;
  }
  .swiper-slide{
    display: flex;
    justify-content:center;/*与主轴对齐*/
    align-items:flex-start;/*（纵轴）起始位置的边界紧靠住该行的侧轴起始边界*/
    flex-wrap: wrap;/*	规定灵活的项目在必要的时候拆行或拆列*/
  }
  .itemFoods{
    width: 25%;
  }
  .food_container{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0;
    padding-bottom:10px
  }
  img{
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666666;
  }
  .swiper-pagination {
    /*background: #428bca;*/
  }
</style>