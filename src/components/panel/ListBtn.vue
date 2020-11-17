<template>
  <div class="list-wrapper">
    <div v-for="(item, index) in listData" :key="index">
      <p>{{item.text}}</p>
      <div class="listBtn">
        <el-button size="small" type="info"  v-for="(btnData, btnIndex) in item.list" :key="btnIndex">{{ btnData }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listData"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.listData);
  },
};
</script>

<style lang="less" scoped>
.list-wrapper {
  padding: 10px 0;
  p {
    padding: 10px 0;
  }
}
</style>