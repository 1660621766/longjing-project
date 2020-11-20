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
      <el-form-item label="请输入用户名" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <div class="login_form--btn">
        <el-button type="text">忘记密码?</el-button>
      </div>
      <el-form-item label="请输入密码" prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getModalData } from "@/api/index";
import { validate } from "@/utils/validate";
import Cookies from "js-cookie";
import { Message } from "element-ui";
// import Base64 from "../../../static/base64";
// import md5 from "blueimp-md5";
import { utils } from "@/utils";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.loginForm.account !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.pass !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      loginForm: {
        pass: "",
        account: "",
        imgSrc: "#", //动态获取验证码
        checked: true
      },
      logining: false,
      rules: {
        account: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        identifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ],
      },
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
            path: "home/Index",
          });
        } else {
          console.log("error!!");
          return false;
        }
      });
    },
    //登录
    handleLogin() {
      let vm = this;
      //调用方法isValidate  form表单校验  第一个参数this  第二个参数是from表单ref的值  第三个参数是form表单提交参数
      validate.isValidate(
        vm,
        "loginForm",
        (formData) => {
          if (formData.validates) {
            formData.param.flags = true;
            vm.logining = true;
            vm.$store
              .dispatch("Login", formData.param)
              .then((res) => {
                vm.$store
                  .dispatch("GetInfo")
                  .then((res) => {
                    // 拉取user_info
                    vm.$router.push({ path: "/" });
                    vm.logining = false;
                  })
                  .catch((err) => {
                    console.log(err);
                    vm.logining = false;
                  });
              })
              .catch((err) => {
                Message.error(err);
                vm.changeCode();
                vm.loginForm.identifyCode = "";
                vm.logining = false;
              });
          }
        },
        this.loginForm
      );
    },
    //动态获取验证码
    changeCode() {
      let date = new Date();
      this.loginForm.imgSrc = "/proxy/identifyCode?a=" + date.getTime();
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