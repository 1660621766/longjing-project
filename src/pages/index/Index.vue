<template>
  <div class="index-wrapper">
    <div class="index-wrapper_l">
      <div class="index-swiper">
        <el-carousel height="" :interval="15000">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="index-echarts">
        <chart-pie v-for="item in 3" :key="item" :id="'myCharts'+item"></chart-pie>
      </div>
    </div>
    <div class="index-wrapper_r">
      <div class="index-card" v-for="item in 4" :key="item">
        <div class="index-card_icon">img</div>
        <div class="index-card_text">
          <p>喜讯item</p>
        </div>
         <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import chartPie from "@/components/echarts/Pie"

export default {
  components:{
    chartPie
  },
  data() {
    return {

    }
  },
  
};
</script>

<style lang="less" scoped>
.index-wrapper/deep/ .el-carousel__indicator--horizontal {
  padding: 12px 5px;
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 5px;
  }
}
.index-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 15px 0;
  // background: #fff;
  .index-wrapper_l {
    width: 60%;
    .index-swiper {
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        // line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    .index-echarts{
      display: flex;
      justify-content: space-between;
      background: #fff;
      margin-top: 15px;
    }
  }
  .index-wrapper_r{
    width: 39%;
    background: #fff;
    border-radius: 8px;
  }
}
</style>