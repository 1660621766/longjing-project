<template>
  <div class="index-wrapper">
    <div class="index-wrapper_l">
      <div class="index-swiper">
        <el-carousel height="" :interval="15000">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="index-echarts">
        <div class="index-echarts_title">
          <h3>xxx项目</h3>
        </div>
        <div class="index-echarts_box">
          <chart-pie
            v-for="item in 3"
            :key="item"
            :id="'myCharts' + item"
          ></chart-pie>
        </div>
      </div>
    </div>
    <div class="index-wrapper_r">
      <div class="card-container" v-for="item in 4" :key="item">
        <div class="index-card">
          <div class="index-card_icon">
            <i class="el-icon-chat-line-square"></i>
          </div>
          <div class="index-card_text">
            <p>喜讯II</p>
            <h3>龙净环保荣获一等奖</h3>
            <p>2011-10-18</p>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import chartPie from "@/components/echarts/Pie";

export default {
  components: {
    chartPie,
  },
  data() {
    return {};
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
.index-wrapper/deep/ .el-divider {
  margin: 0;
}
.index-wrapper {
  display: flex;
  justify-content: space-between;
  // margin: 20px 15px 0;
  // background: #fff;
  .index-wrapper_l {
    width: 60%;
    .index-swiper {
      border-radius: 8px;
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
    .index-echarts {
      background: #fff;
      margin-top: 15px;
      border: 1px solid #eee;
      border-radius: 8px;
      .index-echarts_title{
        margin: 10px 0;
        padding: 0 10px;
      }
      .index-echarts_box{
        display: flex;
       justify-content: space-between;
      }
    }
  }
  .index-wrapper_r {
    width: 39%;
    margin-left: 1%;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #eee;
    .index-card {
      display: flex;
      align-items: center;
      padding: 25px;
      .index-card_icon {
        width: 25px;
        height: 25px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: #f4f5f7;
      }
    }
  }
}
</style>