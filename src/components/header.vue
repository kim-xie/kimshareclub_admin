<template>
  <div class="headerWrap">
    <el-row class="header">
      <el-col class="header-left" :span="6">
        <div class="logo">
          <a href="javascript:;">
            <img src="@/assets/imgs/logo/logo.png" alt="logo">
          </a>
        </div>
      </el-col>
      <el-col :span="12"></el-col>

      <el-col :span="6">
        <div class="header-right">
          <theme></theme>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import theme from './theme.vue'
  export default {
    data() {
      return {
        activeIndex: "2",
        activeIndex2: "2"
      };
    },
    components: {
      theme
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
  .headerWrap{
    height: 60px;
    line-height: 60px;
  }
  .header-left .logo{
    height: 58px;
    line-height: 60px;
    text-align: left;
    background-color: rgb(84, 92, 100);
    border-bottom: 2px solid transparent;
  }
  .header-left .logo img{
    height: 90%;
    vertical-align: middle;
  }
  .header-right{
    float: right;
  }
  .el-badge__content.is-fixed{
    top: 15px;
    right: 16px;
  }
</style>


