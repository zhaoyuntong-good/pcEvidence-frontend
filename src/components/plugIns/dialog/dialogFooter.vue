<template>
  <div class="dialog-footer">
    <el-button size="small" @click="cancle()">取消</el-button>
    <el-button size="small" type="primary" @click="ok()">确定</el-button>
  </div>
</template>
<script>
  export default{
    name:'dialogFooter',
    data(){
      return{
      }
    },
    methods:{
      cancle(){
        this.$emit('cancle')
      },
      ok(){
        this.$emit('ok')
      }
    }
  }
</script>
<style lang="less" scoped>
.dialog-footer{
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: right;
}
</style>
