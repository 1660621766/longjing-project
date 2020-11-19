<template>
  <div class="list-wrapper">
    <p>{{ listData.text }}</p>
    <div class="list-btn">
      <router-link
        v-for="(item, index) in listData.list"
        :key="index"
        :to="{path:item.path,query:{name:item.name}}"
      >
        <el-button size="small" type="goon">{{ item.name }}</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listData"],
  data() {
    return {
    };
  },
  mounted() {
    // console.log(this.listData);
  },
};
</script>

<style lang="less" scoped>
.list-wrapper {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  p {
    padding: 10px 0;
  }
}
.el-button--goon.is-active,
.el-button--goon:active {
  background: #f6f9fe;
  border-color: #e9f6ff;
  color: #fff;
}

.el-button--goon:hover {
  background: #b2b8a6;
  border-color: #e9f6ff;
  color: #000;
}

.el-button--goon {
  color: #000;
  background-color: #f6f9fe;
  border-color: #e9f6ff;
}
</style>