// 对话框配置说明
// dialogConfig   固定字段
// dialogConfig: {
//   name: null, // 对话框名字，必须
//   headerTet: '', // 对话框标题，必须
//   maskClick: false, // 对话框遮罩是否可点击，非必须，默认为false
//   drag: false, // 对话框是否可拖拽，非必须，默认为false
//   showClass: '', // 对话框初始化动画，非必须，默认可在dialog/index.js配置
//   hideClass：'', // 对话框销毁动画，非必须，默认可在dialog/index.js配置
//   sefHeader: false, // 对话框自定义头部，非必须，默认为false
//   selFooter: false, // 对话框自定义底部，非必须，默认为false
// },
import dialogHeader from '@/components/plugIns/dialog/dialogHeader';
import dialogFooter from '@/components/plugIns/dialog/dialogFooter';
export const dialogMixin = {
  components:{
    dialogHeader,
    dialogFooter
  },
  props:['config'],
  data() {
    return {
      // 弹框加载或销毁后，通过show来触发动画
      show:false,
    };
  },
  computed:{
    // 弹框动画,可针对每个弹框设置动画,不设置则为统一动画
    dagAteCls: function(){
      return this.show?this.config.showClass?this.config.showClass:'dialog5-enter-active':this.config.hideClass?this.config.hideClass:'dialog5-leave-active';
    },
    // 遮罩动画
    makAteCls: function(){
      return this.show?'mask-enter-active':'mask-leave-active';
    }
  },
  watch:{
    config: {
      handler(newVal, oldVal) {
        // 弹框加载后触发动画
        this.$nextTick(()=>{
          this.show = true;
        })
      },
      deep: true,
      immediate: true
    },
    show(){
      if(!this.show){
        // 执行完销毁动画后再销毁弹框
        setTimeout(()=>{
          if(this.$parent.$parent.$parent.dialogConfig){
            this.$parent.$parent.$parent.dialogConfig.name = null;
          }else{
            this.$parent.$parent.dialogConfig.name = null;
          }
        },285)
      }
    }
  },
  methods:{
    // 触发销毁动画
    cancle(){
      this.show = false;
    },
    // 确定
    ok(){
      this.$emit('ok');
    },
    // 遮罩点击
    maskClick(){
      this.config.maskClick?this.cancle():false;
    }
  }
}