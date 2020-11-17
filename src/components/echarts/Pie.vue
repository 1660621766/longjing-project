<template>
  <div :id="id" :style="{ width: '300px', height: '300px' }"></div>
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
      let myChart = echarts.init(document.getElementById(this.id));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          transitionDuration: 0//解决首次闪屏的问题
        },
        legend: {
          orient: "vertical",
          left: "center",
          data: ["完成", "未完成"],
        },
        color:['#5B90FA', '#E7F3FF'],
        series: [
          {
            name: "统计结果",
            type: "pie",
            radius: "70%",
            center: ["50%", "60%"],
             label: {
                        position: 'inner',
                        formatter: '{d}%',
                        color: '#aaa'
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

      myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>