<template>
  <div class="ShowMp3">
    <audio :src="mp3Src" autoplay></audio>
  </div>
</template>

<script>
export default {
  name: 'ShowMp3',
  props: {
    mp3Src: {
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
.ShowMp3 {
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