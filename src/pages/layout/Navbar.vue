<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="header_top">
          <div class="header_top--log">log</div>
          <div class="header_top--user">
            <span><i class="el-icon-user"></i></span>
            <span>个人中心</span>  
            <span><i class="el-icon-setting"></i></span>
            <span><i class="el-icon-switch-button"></i></span>
          </div>
        </div>
        <div class="header_btm">
          <el-menu
            :default-active="activeIndex"
            class="header_nav"
            mode="horizontal"
            @select="handleSelect"
            router
            active-text-color="#0955AD"
          >
            <el-menu-item index="/home/Index">首页</el-menu-item>
            <el-menu-item index="/home/Todo">我的代办</el-menu-item>
            <el-menu-item index="/home/Panel">项目A</el-menu-item>
            <el-menu-item index="4">项目B</el-menu-item>
          </el-menu>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
import { getModalData } from "@/api/index";
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  mounted() {
    this.activeIndex=this.$route.path =="/home/Attendance" ? "/home/Panel" : this.$route.path;
    getModalData({
        type: 0,
        sort: 1,
      }).then((res) => {
          
      },err =>{
          console.log('ajax error')
      });
  },
  updated(){
    console.log('update')
  },
  computed:{
    activeRoute(){
      console.log(this.$router)
      return this.$router
    }
  },
  watch:{
    $route(now, old) { //监控路由变换，控制返回按钮的显示
        this.activeIndex = now.path =="/home/Attendance" ? "/home/Panel" : now.path;
			}
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  min-height: 120px;
  padding: 0;
  background: #ffffff;
  .header_top {
    height: 50%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    .header_top--user{
      span{
        display: inline-block;
        padding: 5px;
        cursor: pointer;
      }
    }
  }
  .header_btm{
    .header_nav{
      padding-left: 30%;
    }
  }
}
</style>