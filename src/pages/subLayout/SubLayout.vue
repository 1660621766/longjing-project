<template>
  <div class="attendance-wrapper">
    <div class="attendance-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>项目A</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>{{breadName}}</h3>
    <Attan></Attan>
  </div>
</template>

<script>
import Attan from './attendance/Attendance'
export default {
  data() {
    return {
      breadName:''
    };
  },
  mounted() {
    console.log(this.$route)
    this.breadName = this.$route.query.name
  },
  components: {
    Attan
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.attendance-wrapper {
  .attendance-bread {
    margin-bottom: 10px;
  }
  
}
</style>