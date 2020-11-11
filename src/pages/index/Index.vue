<template>
  <div class="main">
    <el-container>
      <el-aside class="aside"> </el-aside>
      <el-container>
        <el-header class="header">
          <div class="header_top">
            <div class="header_top--log">log</div>
            <div class="header_top--user">个人中心</div>
          </div>
          <div class="header_btm">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">我的代办</el-menu-item>
              <el-menu-item index="2">项目概览</el-menu-item>
              <el-menu-item index="3">流程中心</el-menu-item>
              <el-menu-item index="4">咨询中心</el-menu-item>
            </el-menu>
          </div>
        </el-header>
        <el-main class="container"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="less" scoped>
.main {
  .header {
    min-height: 80px;
    padding: 0;
    .header_top {
      height: 50%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
  }
  .aside {
    background: blue;
  }
  .container {
    background: yellowgreen;
  }
}
</style>