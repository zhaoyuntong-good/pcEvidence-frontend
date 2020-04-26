<template>
  <div class="public-dialog-mask" :class="makAteCls" @click="maskClick()">
    <div class="public-dialog-box" :class="dagAteCls" @click.stop="">
      <!-- 弹框头部组件 -->
      <dialog-header v-if="!config.selHeader" :drag="config.drag" :tet="config.headerTet"></dialog-header>
      <slot name="dialog-template"></slot>
      <dialog-footer v-if="!config.selFooter" @cancle="cancle()" @ok="ok()"></dialog-footer>
    </div>
  </div>
</template>
<script>
  import { dialogMixin } from '@/assets/js/dialog';
  export default{
    name:'dialogBase',
    mixins:[dialogMixin],
  }
</script>

