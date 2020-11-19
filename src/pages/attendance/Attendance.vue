<template>
  <div class="attendance-wrapper">
    <div class="attendance-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>项目A</el-breadcrumb-item>
        <el-breadcrumb-item>人员考勤</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>人员考勤</h3>
    <div class="attendance-con">
      <div class="attendance-con_map">map</div>
      <div class="attendance-con_table">
        <div class="attendance-con_table--tabs">
          <el-menu
            :default-active="activeIndex"
            class="table_nav"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#1890FF"
          >
            <el-menu-item index="1">质量施工部</el-menu-item>
            <el-menu-item index="2">检测施工部</el-menu-item>
            <el-menu-item index="3">提报施工部</el-menu-item>
            <el-input
              placeholder="输入关键字搜索"
              v-model="searchVal"
              icon="el-icon-search"
              class="table-search"
            >
              <!-- <el-button
                slot="append"
                icon="el-icon-search"
                v-model="search"
              ></el-button> -->
            </el-input>
          </el-menu>
        </div>
        <div class="attendance-con_table--com">
          <table-component
            :tableData="tableData"
            :isShow="isShow"
          ></table-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableComponent from "@/components/Table";
const list = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    status: "家",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
    status: "公司",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
    status: "家",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
    status: "公司",
  },
  {
    date: "2016-05-01",
    name: "王小龙",
    address: "上海市普陀区金沙江路 1519 弄",
    status: "家",
  },
  {
    date: "2016-05-03",
    name: "王小龙",
    address: "上海市普陀区金沙江路 1516 弄",
    status: "公司",
  },
];
export default {
  data() {
    return {
      activeIndex: "1",
      searchVal: "",
      tableData: list,
      isShow: true,
    };
  },
  components: {
    tableComponent,
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // this.isShow = key == 1 ? true : false; //有两种情况的表头
    },
    dataFilter(val){
     this.tableData = list.filter(data => !val || data.name.toLowerCase().includes(val.toLowerCase()))
    }
  },
  watch:{
    searchVal(value){
      this.dataFilter(value)
    }
  }
};
</script>

<style lang="less" scoped>
.attendance-wrapper {
  .attendance-bread {
    margin-bottom: 10px;
  }
  .attendance-con {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .attendance-con_map {
      width: 45%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .attendance-con_table {
      width: 54%;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #fff;
      .attendance-con_table--tabs {
        margin-bottom: 20px;
        .el-input {
          width: 25%;
          position: absolute;
          top: 10px;
          right: 20px;
        }
      }
    }
  }
}
</style>