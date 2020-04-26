<template>
  <div class="ShowImg">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'ShowImg',
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  data(){
  	return {
      
  	}
  },
  created(){
  },
  mounted(){
    // 默认展开第一项

  },
  methods: {
  }
}
</script>

<style scoped>
.ShowImg {
  position: relative;
  width: 100%;
  height: 100%;
}
.ShowImg img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50% , -50%);
}
</style>