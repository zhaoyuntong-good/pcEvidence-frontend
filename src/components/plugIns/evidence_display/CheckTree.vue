<template>
  <div class="CheckTree">
    <el-tree
      class="sel-tree"
      ref="tree" 
      :props="defaultProps" 
      :data="treeData" 
      node-key="label"
      show-checkbox
      :highlight-current="true"
      :default-expanded-keys="defaultExpandedKeys" 
      :expand-on-click-node="false" 
      @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'CheckTree',
  props: {
    treeData: {
      type: Array,
      default: []
    },
    defaultProps: {
      type: Object,
      default: {
        children: 'children',
        label: 'label'
      }
    }
  },
  data(){
  	return {
      defaultExpandedKeys: []
  	}
  },
  created(){
  },
  mounted(){
    // 默认展开第一项

  },
  methods: {
    handleNodeClick (val) {

    }
  }
}
</script>

<style scoped>
.sel-tree {
  background-color: rgba(0,0,0,0);
}
.custom-tree-node {
  display: flex;
}
.tip-box {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  margin-left: 10px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>