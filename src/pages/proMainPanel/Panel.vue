<template>
  <div class="panel-wraper">
      <div class="panel-title">
          <h4>龙净空气质量环保项目</h4>
          <span>XA00091001105</span>
          <p>龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
              龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
              龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
              龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
              龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目龙净空气质量环保项目
          </p>
      </div>
      <div class="listBtn">
          <list-btn v-for="(item, index) in listData" :key="index" :listData="item"></list-btn>
      </div>
  </div>
</template>

<script>
import ListBtn from '@/components/panel/ListBtn'
export default {
    data() {
        return{
            listData:[{
                text:'物料相关',
                list:[{name:'添加物料',path:''},{name:'添加物料',path:''},{name:'添加物料',path:''},{name:'添加物料',path:''}]
            },{
                text:'施工相关',
                list:[{name:'添加物料',path:''},{name:'添加物料',path:''},{name:'添加物料',path:''},{name:'添加物料',path:''}]
            },{
                text:'其他',
                list:[{name:'添加物料',path:''},{name:'添加物料',path:''},{name:'添加物料',path:''}]
            }]
        }
    },
    components:{
        ListBtn
    }
}
</script>

<style lang="less" scoped>
.panel-wraper{
    padding: 20px;
    background: #fff;
    .panel-title{
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        span{
            display: inline-block;
            font-size: 12px;
            color: #666;
            margin: 10px 0;
        }
        p{
            font-size: 14px;
        }
    }
}
</style>