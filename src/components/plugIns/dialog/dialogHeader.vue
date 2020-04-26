<template>
  <div class="dialog-header" :class="drags?'dragClass':''" @mousedown="mouseDown($event)" @mouseup="mouseUp()">
    {{tet}}
    <div class="header-close el-icon-close" @mousedown.stop="" @mouseup.stop="cancle()"></div>
  </div>
</template>
<script>
  export default{
    name:'dialogHeader',
    props:['drag','tet'],
    data(){
      return{
        drags:false,
        mousemoveCallBack:null,
        titleBox:null,
        parentDom:null,
        pointX:null,
        pointY:null,
        boxX:null,
        boxY:null
      }
    },
    // 完成了 data 数据的初始化，el没有时调用
    created: function () {
      this.drag ? this.drags = true : this.drags = false;
    },
    methods:{
      mouseDown(event){
        if(this.drags){
          let length = document.getElementsByClassName('dialog-header').length;
          // 获取弹框头部
          this.titleBox = document.getElementsByClassName('dialog-header')[length - 1];
          // 获取整个弹框
          this.parentDom = this.titleBox.parentNode;
          // 记录鼠标点击位置
          this.pointX = event.clientX;
          this.pointY = event.clientY;
          // 记录弹框初始位置
          this.boxX = this.parentDom.offsetLeft;
          this.boxY = this.parentDom.offsetTop;
          // 设置弹框初始位置并改变定位
          this.parentDom.style.left = this.boxX + 'px';
          this.parentDom.style.top = this.boxY + 'px';
          this.parentDom.style.position = 'inherit';
          // 鼠标移动，改变弹框位置
          this.mousemoveCallBack = event => {
            this.parentDom.style.top = this.boxY + event.clientY - this.pointY + 'px';
            this.parentDom.style.left = this.boxX + event.clientX - this.pointX + 'px';
          }
          // 监听鼠标移动
          document.addEventListener('mousemove',this.mousemoveCallBack);
        }
      },
      mouseUp(){
        if(this.drags){
          // 兼容ie,将定位方式改为absolute
          this.parentDom.style.position = 'absolute';
          // 销毁监听的事件
          document.removeEventListener('mousemove',this.mousemoveCallBack);
          this.mousemoveCallBack = null;
        }
      },
    	// 关闭弹框
    	cancle(){
    		this.$parent.cancle();
    	},
    }
  }
</script>
<style lang="less" scoped>
	.dialog-header{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #DCDFE6;
    text-align: left;
    line-height: 50px;
    padding-left: 16px;
    font-size: 16px;
    color: #606266;
  }
  .dragClass{
    cursor: move;
    -moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .header-close{
    position: absolute;
    top: 14px;
    right: 11px;
    font-size: 22px;
    cursor: pointer;
  }
</style>
