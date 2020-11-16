<template>
  <div class="login_container">
    <div class="login_tile">
      <h2>登录</h2>
      <p>欢迎使用龙净环保</p>
    </div>
    <el-form
      autoComplete="on"
      :model="loginForm"
      ref="loginForm"
      :rules="rules"
      label-position="top"
      label-width="50px"
      class="login_form"
      size="medium"
    >
      <el-form-item label="请输入用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <div class="login_form--btn">
        <el-button type="text">忘记密码?</el-button>
      </div>
      <el-form-item label="请输入密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getModalData } from "@/api/index";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.loginForm.name !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.pass !== '') {
            this.$refs.loginForm.validateField('checkPass');
          }
          callback();
        }
      };
    return {
      loginForm: {
        pass: "",
        name: "",
      },
      rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            path:'home/Index'
          })
        } else {
          console.log("error!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container/deep/ .el-form-item__label {
  padding: 0;
}
.login_container/deep/ .el-form-item {
  margin: 10px;
}
.login_container {
  width: 280px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 auto;
  .login_tile {
    margin-bottom: 30px;
  }
  .login_form {
    .login_form--btn {
      padding: 0 10px;
      float: right;
      .el-button {
        padding: 0;
      }
    }
    .el-button--medium {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>