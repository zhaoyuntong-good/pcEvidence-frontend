<template>
  <dialog-base ref="dialogBase" :config="config" @ok="ok()">
    <template slot="dialog-template">
      <div class="public-dialog-content">
        <div class="tip">{{ data.tip }}</div>
        <el-radio-group v-model="radio">
          <el-radio label="3">原告方</el-radio>
          <el-radio label="6">被告方</el-radio>
          <el-radio label="9">所有</el-radio>
        </el-radio-group>
      </div>
    </template>
  </dialog-base>
</template>
<script>
  import dialogBase from '@/components/plugIns/dialog/dialogBase.vue';
  export default{
    name:'demoDialog',
    components:{
      dialogBase,
    },
    props:['config','data'],
    data(){
      return{
        radio:'3'
      }
    },
    watch:{},
    // 完成了 data 数据的初始化，el没有时调用
    created: function () {
     
    },
    // 完成了 el 和 data 初始化，模板编译/挂载之前调用
    beforeMount: function () {},
    // 模板编译/挂载之后调用
    mounted: function () {
     
    },
    // 组件更新之前调用
    beforeUpdate: function () {},
    // 组件更新之后调用
    updated: function () {},
    // 组件销毁前调用
    beforeDestroy: function () {
      
    },
    // 组件销毁后调用
    destroyed: function () {
      
    },
    methods:{
      // 确定
      ok(){
        this.$refs.dialogBase.cancle();
      }
    }
  }
</script>
<style lang="less" scoped>
  .public-dialog-content{
    width: 430px;
    height: 100px;
    color: #606266;
  }
  .tip {
    margin-bottom: 20px;
  }
</style>
