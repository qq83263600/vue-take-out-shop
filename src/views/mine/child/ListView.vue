<template>
  <div class="list-view">
    <div class="list-view-item">
      <i class="el-icon-user-solid"></i>
      <span>我的订单</span>
    </div>
    <div class="list-view-item">
      <i class="el-icon-s-shop"></i>
      <span>积分商城</span>
    </div>
    <div class="list-view-item">
      <i class="el-icon-star-on"></i>
      <span>会员卡</span>
    </div>
    <div class="line"></div>

    <div class="list-view-item">
      <i class="el-icon-success"></i>
      <span>服务中心</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListView"
  };
</script>

<style scoped>
  .list-view{
    width: 100%;
  }
  .list-view-item{
    line-height: 45px;
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
  }
  .list-view-item i{
    font-size: 24px;
    display: inline-block;/*行内块元素*/
    margin-right: 7px;
  }
  .list-view-item span{
    font-size: 16px;
    color: #333;
    display: inline-block;/*行内块元素*/
    width: 100%;
    border-bottom: 1px solid #dddddd;
  }
  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }
</style>