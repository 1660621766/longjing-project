<template>
  <div class="table-wrapper">
    <el-table
      ref="filterTable"
      :data="tableData"
      fit
      :header-cell-style="{ background: '#eee' }"
      style="width: 100%"
      v-if="isShow"
    >
      <el-table-column
        prop="name"
        label="操作人"
        width="180"
        :filters="[{ text: '王小虎', value: '王小虎' }]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="status" label="打卡状态" width="180">
      </el-table-column>
      <el-table-column prop="date" label="操作时间"> </el-table-column>
    </el-table>

    <el-table
      ref="filterTable"
      :data="tableData"
      fit
      :header-cell-style="{ background: '#eee' }"
      style="width: 100%"
      v-if="!isShow"
    >
      <el-table-column
        prop="name"
        label="操作人"
        width="180"
        :filters="[{ text: '王小虎', value: '王小虎' }]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="status" label="日志状态" width="180">
      </el-table-column>
      <el-table-column prop="date" label="操作时间"> </el-table-column>
      <el-table-column prop="address" label="内容" :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableData", "isShow"],
  data() {
    return {};
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style lang="less" scoped>
</style>