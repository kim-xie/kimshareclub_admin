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
      <el-col :span="12">
        <div class="header-nav">
          <el-button>导航菜单</el-button>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="header-right">
          <theme></theme>
        </div>
        <div class="header-lang">
          <el-radio-group v-model="lang">
            <el-radio-button size="small" label="中文" @click.native="selectLang('zh_CN')"></el-radio-button>
            <el-radio-button size="small" label="英文" @click.native="selectLang('en')"></el-radio-button>
          </el-radio-group>
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
        activeIndex2: "2",
        lang: localStorage.getItem('lang')==='en' ? '英文' : '中文'
      };
    },
    components: {
      theme
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      selectLang(val){
        this.lang = val === 'en' ? '英文' : '中文';
        localStorage.setItem('lang',val);
        this.$i18n.locale = localStorage.getItem('lang');
        this.$message({
          message: 'Language Switch Success!',
          type: 'success'
        })
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
    margin: 10px;
  }
  .header-lang{
    float: right;
  }
  .el-badge__content.is-fixed{
    top: 15px;
    right: 16px;
  }
</style>


