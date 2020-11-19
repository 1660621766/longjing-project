<template>
  <div class="panel-wraper">
    <div class="panel-title">
      <h4>龙净空气质量环保项目</h4>
      <span>XA00091001105</span>
      <p>
        龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
        龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
        龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
        龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
        龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
      </p>
    </div>
    <div class="panel-listBtn">
      <list-btn
        v-for="(item, index) in listData"
        :key="index"
        :listData="item"
      ></list-btn>
    </div>
    <div class="panel-tabs">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="物料进度" name="first">
          <div class="panel-tabs_con">
            <div class="panel-tabs_con--btn">
              <el-button type="text" v-for="item in 6" :key="item"
                >物料A</el-button
              >
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="施工进度" name="second">
          <div class="panel-tabs_con">
            <div class="panel-tabs_con--btn">
              <el-button type="text" v-for="item in 6" :key="item"
                >物料A</el-button
              >
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="panel-plan">
      <div class="panel-plan_progress">
        <div class="panel-plan_box" v-for="item in 10" :key="item">
          <span class="panel-plan_order panel-plan_order--active">{{
            item
          }}</span>
          <span class="panel-plan_text panel-plan_text--active">进料</span>
          <span class="panel-plan_line"></span>
        </div>
      </div>
      <div class="panel-plan_img">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import ListBtn from "@/components/panel/ListBtn";
const listData = [
  {
    text: "物料相关",
    list: [
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
    ],
  },
  {
    text: "施工相关",
    list: [
      { name: "人员考勤", path: "/home/SubPanel" ,id:'kq'},
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
    ],
  },
  {
    text: "其他",
    list: [
      { name: "添加物料", path: "" },
      { name: "添加物料", path: "" },
      { name: "填写我的工作日志", path: "/home/SubPanel",id:'log' },
    ],
  },
];
export default {
  data() {
    return {
      listData,
      activeName: "first",
    };
  },
  components: {
    ListBtn,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.panel-wraper {
  padding: 20px;
  background: #fff;
  .panel-title {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    span {
      display: inline-block;
      font-size: 12px;
      color: #666;
      margin: 10px 0;
    }
    p {
      font-size: 12px;
    }
  }
  .panel-tabs {
    margin-top: 30px;
    .panel-tabs_con {
      padding: 0 20px;
      .panel-tabs_con--btn {
        .el-button + .el-button {
          margin-left: 25px;
          color: #000;
        }
      }
    }
  }
  .panel-plan {
    background: #eee;
    margin: 20px;
    padding: 20px;
    .panel-plan_progress {
      display: flex;
      flex-flow: row wrap;
      //   margin-bottom: 20px;
      .panel-plan_box {
        margin: 0 10px 20px 0;
        span {
          display: inline-block;
        }
        span + span {
          margin-left: 5px;
        }
        .panel-plan_order {
          width: 26px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          border: 1px solid #999;
          border-radius: 13px;
          color: #999;
        }
        .panel-plan_order--active {
          //    background: #409EFF;
          //    color: #fff;
        }
        .panel-plan_line {
          width: 100px;
          margin-bottom: 5px;
          border-bottom: 1px solid #999;
        }
      }
    }
  }
}
</style>