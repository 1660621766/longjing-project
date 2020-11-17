<template>
  <div class="todo-wrapper">
    <div class="todo-wrapper_l">
      <div class="todo-list" v-for="item in 3" :key="item">
        <h3>质量审核</h3>
        <p>龙净净化项目-龙净结构-龙净物料</p>
      </div>
    </div>
    <!-- <el-divider direction="vertical"></el-divider> -->
    <div class="todo-wrapper_r">
      <p>xxx项目</p>
      <div class="todo-timeLine">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :color="activity.color"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="todo-card">
          <div class="todo-card_con" v-for="item in 6" :key="item">
              <p>焊接毛刺度：</p>
              <div class="todo-card_text">
                  <div>
                      <span>指标值:</span>
                      <span>>200</span>
                  </div>
                  <div>
                      <span>实际值:</span>
                      <span>201</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="todo-img">
          <img src="@/assets/logo.png" alt="">
      </div>
      <div class="todo-nots">
          <p><span>情况说明：</span>xxxx情况符合，工艺达标</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "图标",
          color: "cornflowerblue",
        },
        {
          content: "颜色",
          color: "cornflowerblue",
        },
        {
          content: "尺寸",
          color: "",
        },
        {
          content: "节点",
          color: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.todo-wrapper {
  display: flex;
  background: #fff;
  border-radius: 5px;
  .todo-wrapper_l {
    width: 20%;
    padding: 20px;
    border-right: 1px solid #ccc;
    .todo-list {
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
      background: cornflowerblue;
      color: #fff;
    }
  }
  .todo-wrapper_r {
    flex: 1;
    padding: 20px;
    .todo-timeLine {
      margin-left: 96px;
    }
    .todo-card{
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        .todo-card_con{
            padding: 25px 30px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            p{
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: bold;
            }
            .todo-card_text{
                display: flex;
                div:first-child{
                    margin-right: 36px;
                }
                span{
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
    .todo-img{
        margin-bottom: 20px;
    }
    .todo-nots{
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
  }
}
.el-timeline {
  display: flex;
  padding: 10px 0;
  .el-timeline-item {
    float: left;
    position: relative;
    flex: 1;
    padding-bottom: 20px;
  }
  .el-timeline-item:last-child {
    flex: 0;
  }
}
.el-timeline-item:last-child/deep/ .el-timeline-item__wrapper {
  width: 100px;
}
.el-timeline-item/deep/ .el-timeline-item__tail {
  position: absolute;
  left: 4px;
  top: 5px;
  height: 2px;
  width: 100%;
  border-top: 2px solid #E4E7ED;
}
.el-timeline-item/deep/ .el-timeline-item__wrapper {
  padding-top: 25px;
  padding-left: 0;
  left: -3px;
}
</style>