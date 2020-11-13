<template>
  <div class="login_container">
    <el-form
      autoComplete="on"
      :model="loginForm"
      ref="loginForm"
      label-position="top"
      label-width="0px"
      class="card-box login-form"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getModalData } from "@/api/index";
export default {
  data() {
    return {
      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      getModalData({
        type: 0,
        sort: 1,
      }).then(
        (res) => {},
        (err) => {
          console.log("ajax error");
        }
      );
    },
  },
};
</script>

<style>
.login_container{
    width: 500px;
}
</style>