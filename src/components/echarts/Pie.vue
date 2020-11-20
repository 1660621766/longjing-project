<template>
  <div class="pie-wraper">
    <div :id="id" :style="{ width: '250px', height: '250px' }"></div>
    <div class="pie-text">任务分配比例</div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入饼图
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
export default {
  data() {
    return {
      pieData: [
        { value: 1, name: "成功" },
        { value: 0, name: "失败" },
      ],
    };
  },
  props: ["id"],
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this;
      let pieChart = echarts.init(document.getElementById(this.id));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          transitionDuration: 0, //解决首次闪屏的问题
          showContent: false,
        },
        legend: {
          // orient: "vertical",
          left: "center",
          data: ["完成", "未完成"],
          icon: "circle",
        },
        color: ["#5B90FA", "#E7F3FF"],
        series: [
          {
            name: "统计结果",
            type: "pie",
            radius: "60%",
            center: ["50%", "45%"],
            label: {
              position: "inner",
              formatter: "{d}%",
              color: "#aaa",
            },
            data: [
              { value: 335, name: "完成" },
              { value: 130, name: "未完成" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      pieChart.setOption(option);
      let id=this.id
      setTimeout(function () {
        //方法2
        window.addEventListener("resize", function () {
          let infactWidth = $('.index-echarts_box').width()/3 >250 ? 250 :  $('.index-echarts_box').width()/3;
          $('#'+id).width(infactWidth);
          //监听
          pieChart.resize();
        });
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.pie-wraper {
  position: relative;
  .pie-text {
    width: 100%;
    position: absolute;
    bottom: 20px;
    text-align: center;
  }
}
</style>