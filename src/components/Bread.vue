<template>
  <div>
    <div class="attendance-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>项目A</el-breadcrumb-item>
        <el-breadcrumb-item>{{infoProps}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>{{infoProps}}</h3>
  </div>
</template>

<script>
export default {
  props:['infoProps'],
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
  .attendance-bread {
    margin-bottom: 10px;
}
</style>