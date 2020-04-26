<template>
  <div class="EvidenceDisplay">
    <!-- 弹框组件 -->
    <component 
      :data="dialogData"
      :config="dialogConfig"
      :is="dialogConfig.name">
    </component>
    <!-- 主内容 -->
    <div class="main-box">
      <div class="title">证据审批</div>
      <div class="bar"></div>
      <div class="opiton-box">
        <div class="case-number">{{caseNumber}}</div>
        <el-button class="sel-btn" type="primary" @click="empower(0)">取消</el-button>
        <el-button class="sel-btn" type="primary" @click="empower(1)">授权</el-button>
        <el-button class="sel-btn" type="primary">上传卷宗系统</el-button>
      </div>
      <div class="content">
        <!-- 左侧树 -->
        <div class="tree-box">
          <!-- 类型切换 -->
          <div class="teb-box">
            <div class="teb" 
              :class="tebIndex === index ? 'teb-active' : ''"
              v-for="(item, index) in tebList" 
              :key="item.id"
              @click="tebClick(index)">
              {{item.name}}
            </div>
          </div>
          <!-- 树容器 -->
          <div class="tree-content">
            <check-tree :treeData="treeData" :defaultProps="defaultProps"></check-tree>
          </div>
          <el-upload
            class="upload-file"
            action=""
            :limit="1"
            :auto-upload="false"
            :file-list="fileList"
            :show-file-list="false"
            :on-change="fileChange">
            <el-button type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <!-- 证据展示 -->
        <div class="evidence-box">
          <!-- <show-img :imgSrc="imgSrc"></show-img> -->
          <!-- <foxit-pdf :pdfSrc="pdfSrc" :fdfData="fdfData" @submitPdf="submitPdf"></foxit-pdf> -->
          <!-- <show-mp4 :mp4Url="mp4Url"></show-mp4> -->
          <show-mp3 :mp3Src="mp3Src"></show-mp3>
        </div>
        <!-- 备注 -->
        <div class="remarks-box">
          <div class="title-box">
            <div class="icon"></div>
            <div class="icon-title">备注区域</div>
            <el-button class="sel-small-btn" size="small" @click="addRemarks()">添加</el-button>
          </div>
          <div class="list-box">
            <div class="list" v-for="item in remarksList" :key="item.id">
              <div class="list-title">
                <div class="name">原告：{{ item.name }}</div>
                <div class="time">{{ item.time }}</div>
              </div>
              <div class="list-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">技术支持：北京华夏电通科技有限公司 地址：北京市海淀区西北旺镇丰秀中路3号院6号楼 电话：010-62965555</div>
  </div>
</template>

<script>
import {
  getUnits,
  login
} from "@/api/login";
import CheckTree from '@/components/plugIns/evidence_display/CheckTree.vue';
import ShowImg from '@/components/plugIns/evidence_display/ShowImg.vue';
import foxitPdf from '@/components/plugIns/foxit-pdf';
import ShowMp4 from '@/components/plugIns/evidence_display/ShowMp4.vue';
import ShowMp3 from '@/components/plugIns/evidence_display/ShowMp3.vue';
export default {
  name: 'EvidenceDisplay',
  components: {
    CheckTree,
    ShowImg,
    foxitPdf,
    ShowMp4,
    ShowMp3,
    empower: () => import("@/components/dialogs/evidence_display/empower.vue"),
    addRemarks: () => import("@/components/dialogs/evidence_display/addRemarks.vue")
  },
  data(){
  	return {
      dialogConfig: {
        name: null,
        headerTet: '',
      },
      dialogData: {},
      caseNumber: '（2019）辽0782民初112号',
      tebIndex: 0,
      tebList: [
        {
          id: 0,
          name: '原告'
        },
        {
          id: 1,
          name: '被告'
        },
        {
          id: 2,
          name: '其他'
        },
      ],
      treeData: [
        {
          label: '证据 1',
          children: [{
            label: 'jpg1',
          }]
        }, {
          label: '证据 2',
          children: [{
            label: 'pdf1',
          }]
        }, {
          label: '证据 3',
          children: [{
            label: 'mp3',
          }]
        }, {
          label: '证据 4',
          children: [{
            label: 'mp4',
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      imgSrc: require('../assets/imgs/2020-03-06_170855.png'),
      pdfSrc: '/FoxitPDFSDKforWeb_DemoGuide.pdf',
      mp4Url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      mp3Src: '/obj_w5zDlMODwrDDiGjCn8Ky_2180586519_98b2_4d51_b6d3_c8c65de6a0bf053a2cd94d1f9473d069.mp3',
      fdfData: null,
      remarksList: [
        {
          id: 0,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
        {
          id: 1,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
        {
          id: 2,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
        {
          id: 3,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
        {
          id: 4,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
        {
          id: 5,
          name: '张三',
          time: '2019-09-02 13:00:00',
          content: '创造性信心是以人为本的设计师在实现思维的飞跃，信任他们的直觉以及追求他们尚未完全弄清楚的解决方案时所依赖的品质。'
        },
      ],
      fileList: [],
  	}
  },
  created(){
    setTimeout(() => {
      fetch('/comments (1).fdf').then( res => res.arrayBuffer().then( buffer => this.fdfData = buffer))
    },5000)
  },
  methods: {
    submitPdf (val) {
      console.log(val)
    },
    // 证据书切换
    tebClick (val) {
      this.tebIndex = val;
    },
    // 选择文件
    fileChange (file) {
      
    },
    // 授权
  	empower (option) {
      option ? this.dialogData.tip = '请您选择允许查看该证据的当事人类型！' : this.dialogData.tip = '请您选择不允许查看该证据的当事人类型！'
      this.dialogConfig.headerTet = '授权管理';
      this.dialogConfig.name = 'empower';
    },
    // 添加备注
    addRemarks(){
      this.dialogConfig.headerTet = '添加备注';
      this.dialogConfig.name = 'addRemarks';
    },
    async theGetUnit(){
  		let params = {
  			isContains: -1
      }
      const respons = await getUnits(params, this.aa);
      // console.log(respons)
      const res = await login(params);
      // console.log(res)
    },
  }
}
</script>

<style scoped>
.main-box {
  position: relative;
  width: 90vw;
  height: calc(100vh - 85px);
  margin: 0 auto;
  overflow: auto;
}
.title {
  width: 100%;
  height: 35px;
  color: #fff;
  line-height: 35px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
}
.bar {
  width: 40px;
  height: 3px;
  background-color: #2F8DED;
  margin: 0 auto;
}
.opiton-box {
  width: 100%;
  height: 40px;
}
.case-number {
  margin-top: -15px;
  font-size: 20px;
  color: #FFFFFF;
}
.sel-btn {
  float: right;
  margin-left: 10px;
  margin-top: -34px;
}
.content {
  width: 100%;
  height: calc(100% - 64px);
  background-color: #fff;
  border-radius: 6px;
}
.tree-box {
  float: left;
  width: 16%;
  height: 100%;
  background-color: #FAFAFA;
}
.teb-box {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #DCDFE6;
  cursor: pointer;
}
.teb-active {
  border-bottom: 2px solid #2F8DED;
  color: #2F8DED;
}
.teb {
  height: 46px;
  line-height: 46px;
}
.tree-content {
  width: 100%;
  height: calc(100% - 130px);
  overflow: auto;
}
.upload-file {
  margin-top: 20px;
  text-align: center;
}
.evidence-box {
  float: left;
  width: 60%;
  height: 100%;
  border-left: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
}
.img {
  width: 100%;
  height: auto;
}
.remarks-box {
  float: right;
  width: 24%;
  height: 100%;
  padding: 10px;
}
.remarks-box .title-box {
  width: 100%;
  height: 34px;
  margin-bottom: 5px;
}
.icon {
  float: left;
  width: 28px;
  height: 34px;
  background-image: url('../assets/imgs/yuangaozhizheng.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.icon-title {
  float: left;
  color: #606266;
  line-height: 34px;
  margin-left: 5px;
}
.sel-small-btn {
  float: right;
}
.list-box {
  width: 100%;
  height: calc(100% - 39px);
  overflow-y: auto;
}
.list {
  width: 100%;
  height: 210px;
  border-bottom: 1px solid #DCDFE6;
}
.list:last-child {
  border-bottom: none;
}
.list-title {
  height: 40px;
}
.list-title .name {
  float: left;
  line-height: 40px;
  max-width: 116px;
}
.list-title .time {
  float: right;
  line-height: 40px;
  color: #C0C4CC;
  overflow: hidden;
}
.list-content {
  width: 100%;
  height: 140px;
  background-color: #F5F7FA;
  border-radius: 4px;
  padding: 5px;
  line-height: 24px;
}
.footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #001529;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 60px;
  text-align: center;
}

</style>