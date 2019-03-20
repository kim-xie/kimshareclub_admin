<template>
    <div class="login_wrap">
        <div class="wpn">
            <div class="form-data pos">
                <a href="javascript:;"><img src="../assets/imgs/login/logo.png" class="head-logo"></a>
                <div class="change-login">
                    <p :class="{'account_number':true, 'on':isActive}" @click="changeLoginType('account')">账号登录</p>
                    <p :class="{'message':true,'on':!isActive}" @click="changeLoginType('message')">短信登录</p>
                </div>
                <div class="form1" v-if="isAccountLogin">
                    <p class="p-input pos">
                        <!-- <label for="num">手机号/用户名/UID/邮箱</label> -->
                        <input type="text" id="num" v-model="account" placeholder="手机号/用户名/UID/邮箱">
                        <span class="tel-warn num-err hidden"><em>账号或密码错误，请重新输入</em><i class="icon-warn"></i></span>
                    </p>
                    <p class="p-input pos">
                        <!-- <label for="pass">请输入密码</label> -->
                        <input type="password" style="display:none"/>
                        <input type="password" v-model="password" id="pass" autocomplete="new-password" placeholder="请输入密码">
                        <span class="tel-warn pass-err hidden"><em>账号或密码错误，请重新输入</em><i class="icon-warn"></i></span>
                    </p>
                    <p class="p-input pos code hidden">
                        <!-- <label for="veri">请输入验证码</label> -->
                        <input type="text" id="veri" placeholder="请输入验证码">
                        <el-button id="TencentCaptcha"
                                data-appid="2091525220"
                                data-cbfn="callback"
                        >验证</el-button>
                        <!-- <img src=""> -->
                        <span class="tel-warn img-err hidden"><em>账号或密码错误，请重新输入</em><i class="icon-warn"></i></span>
                        <!-- <a href="javascript:;">换一换</a> -->
                    </p>
                </div>
                <div class="form2" v-else>
                    <p class="p-input pos">
                        <!-- <label for="num2">手机号</label> -->
                        <input type="number" v-model="phone" id="num2" placeholder="手机号">
                        <span class="tel-warn num2-err hidden"><em>账号或密码错误</em><i class="icon-warn"></i></span>
                    </p>
                    <p class="p-input pos">
                        <!-- <label for="veri-code">输入验证码</label> -->
                        <input type="number" v-model="code" id="veri-code" placeholder="输入验证码">
                        <a href="javascript:;" class="send">发送验证码</a>
                        <span class="time hidden"><em>120</em>s</span>
                        <span class="tel-warn error hidden">验证码错误</span>
                    </p>
                </div>
                <div class="r-forget cl">
                    <!-- <a href="./reg.html" class="z">账号注册</a>
                    <a href="./getpass.html" class="y">忘记密码</a> -->
                </div>
                <button class="lang-btn off log-btn" @click="submitForm">登录</button>
                <div class="third-party">
                    <a href="#" class="log-qq iconfont icon-qq"></a>
                    <a href="#" class="log-qq iconfont icon-weixin"></a>
                    <a href="#" class="log-qq iconfont icon-weibo"></a>
                </div>
                <p class="right">Powered by © 2018</p>
            </div>
        </div>
    </div>
</template>

<script>
    window.callback = function(res){
            console.log(res)
            // res（未通过验证）= {ret: 1, ticket: null}
            // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
            if(res.ret === 0){
                // alert(res.ticket)   // 票据
                console.info('验证通过-----');
            }
        }
    export default {
        data(){
            return {
                isActive: true,
                isAccountLogin: true,
                account: '',
                password: '',
                phone: '',
                code: ''
            }
        },
        mounted () {
        },
        created () {
        },
        methods: {
            // 切换登录方式
            changeLoginType(type){
                if(type==='message'){
                    this.isActive = false;
                    this.isAccountLogin = false;
                }else{
                    this.isActive = true;
                    this.isAccountLogin = true;
                }
            },
            // 登录
            submitForm() {
                if(this.isAccountLogin){
                    if(!this.account || !this.password){
                        this.$message({message:'账号和密码不能为空！',type:'warning'});
                        return false;
                    }
                }else{
                    if(!this.phone || !this.code){
                        this.$message({message:'手机和验证码不能为空！',type:'warning'});
                        return false;
                    }
                }
                localStorage.setItem('mn',this.account?this.account:this.phone);
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #TencentCaptcha{
        float: right;
        padding: 6px 16px;
    }
    .lang-btn {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        background-color: #3499DA;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #FFF;
        border: none;
        letter-spacing: 1px;
        overflow: hidden;
        text-align: center;
        border-radius:2px;
    }
    .lang-cancel{background:0;color:#2d3e50}
    .lang-btn-none{background:#e4e9ed;color:#2d3e50;}
    .lang-btn-none:hover{background:#e4e9ed;color:#2d3e50;}
    .lang-btn-c{display:inline-block;position:relative;vertical-align:middle;cursor:pointer;white-space:nowrap;background:#e4e9ed;height:40px;line-height:40px;
                font-size:16px;color:#2d3e50;border:0;letter-spacing:1px;overflow:hidden;text-align:center;border-radius:2px}
    .lang-btn:active{outline:0;box-shadow:none}
    .lang-btn:focus{border:0;outline:0;box-shadow:none}
    .lang-btn:hover{text-decoration:none}
    .lang-btn::-moz-focus-inner {border: 0;padding: 0;}
    .lang-btn-success { background-color: #4a993e; }
    .lang-btn-eroor { background-color: #b33630; }
    .lang-btn-disabled { background-color: #ddd; color: #777; cursor: default; }
    .lang-btn-show { background-color: #e4e9ed; color: #2d3e50; cursor: default; }
    .lang-btn-relating { background-color: #b8c5ce; color: #2d3e50; }

    .lang-btn .lang-btn-content {  padding: 0 30px; display: block; }
    .lang-btn-big .lang-btn-content { padding: 0 45px; }
    .lang-btn-huge { height: 50px; line-height: 50px; }
    .lang-btn-huge .lang-btn-content { padding: 0 45px; }
    .lang-btn-col-blue{background:#3499DA;color:#fff;}
    .lang-btn-col-blue:hover{background:#3da2e3;color:#fff;}
    .lang-btn-fixed-small { width: 100px; }
    .lang-btn-fixed-small .lang-btn-content { padding: 0; }
    .lang-btn-fixed-big { width: 160px; }
    .lang-btn-fixed-big .lang-btn-content { padding: 0; }
    .lang-btn-fixed-Large { width: 100%; }
    .lang-btn-fixed-Large .lang-btn-content { padding: 0; }
    .login_wrap{
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        background: url("../assets/imgs/login/bj.jpg") no-repeat center;
        background-size: cover;
        position:  relative;
    }
    .form-data{
        background-color: #ffffff;
        width: 460px;
        left: 50%;
        margin-left: -230px;
        border-radius: 5px;
        box-shadow: 0 0 30px rgba(0,0,0,.1);
        padding: 65px 0 30px 0;
        position: fixed;
        top: 15%;
    }
    .form-data .tel-warn{
        position: absolute;
        color: #ea5d5f;
        font-size: 12px;
        right: 0;
        top: 22px;
    }
    .form-data .tel-warn i{
        display: inline-block;
        vertical-align: middle;
        color: #ea5d5f;
        font-size: 16px;
        margin-top: -3px;
        margin-left: 5px;
    }
    .form-data .p-input,.find_password .p-input{
        padding: 5px 0;
        height: 36px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
        width: 340px;
        margin: 0 auto 16px;
        line-height: 14px;
        display: block;
    }
    .form-data .code{
        width: 340px;
        margin-left: 60px;
    }
    .form-data .code input{
        width: 200px;
    }
    .form-data .code img{
        width: 120px;
        position: absolute;
        right: 0;
        bottom: 2px;
    }
    .form-data .code .img-err{
        right: 120px;
        top: 15px
    }
    .form-data .code a{
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #000;
        left: 320px;
        bottom: 0;
    }
    .form-data .send{
        color: #969696;
        position: absolute;
        right: 0;
        top: 14px;
        z-index: 10;
    }
    .form-data .send:hover{
        color: #3895e8;
    }
    .form-data .time{
        color: #969696;
        position: absolute;
        right: 0;
        top: 24px;
        font-size: 14px;
    }
    .form-data label,.find_password label{
        font-size: 14px;
        position: absolute;
        display: inline-block;
        color: #cacaca;
        top: 22px;
    }
    .form-data input,.find_password input{
        outline: none;
        border: none;
        z-index: 5;
        position: absolute;
        top: 13px;
        width: 340px;
        background-color: transparent;
        font-size: 14px;
    }
    input[type=number] {
        -moz-appearance:textfield;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .form-data .head-logo{
        position: absolute;
        top: -47px;
        left: 116px;
    }
    .reg_checkboxline{
        font-size: 14px;
        color: #cacaca;
        height: 30px;
        margin: 20px auto 20px;
        line-height: 30px;
        width: 340px;
    }
    .form-data .pass-warn{
        width: 400px;
        color: #ea5d5f;
        font-size: 14px;
        margin: 0 auto;
    }
    .reg_checkboxline p{
        line-height: 30px;
        padding: 0;
        border-bottom: 0;
    }
    .reg_checkboxline a{
        color: #9e9e9e;
    }
    .reg_checkboxline a:hover{
        color: #3895e8;
    }
    .reg_checkboxline i.boxcol {
        background: #3498db;
        color: #fff;
    }
    .icon-ok-sign {
        background: #b8c4ce;
        border-radius: 2px;
        margin-right: 5px;
        cursor: pointer;
        overflow: hidden;
        width: 16px;
        height: 16px;
        font-size: 12px;
        display: block;
        margin-top: 7px;
        line-height: 16px;
        text-align: center;
    }
    .form-data .lang-btn{
        width: 340px;
        font-size: 18px;
        font-weight: bold;
        color: white;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 20px auto;
        display: block;
        border-radius: 5px;
        cursor: pointer;
        background-color: #42a5f5;
    }
    .form-data .lang-btn.off{
        color: #a0a0a0;
        background-color: #e5e5e5;
    }
    .bottom-info{
        width: 400px;
        line-height: 18px;
        font-size: 14px;
        color: #cacaca;
        margin: 0 auto 30px;
        text-align: center;
    }
    .bottom-info a{
        color: #42a5f5;
    }
    .form-data .error{
        color: #ea5d5f;
        font-size: 14px;
        top: -5px;
        right: 0;
        position: absolute;
    }
    .form-data .r-forget{
        width: 340px;
        margin: 0 auto;
    }
    .form-data .r-forget a{
        font-size: 12px;
        color: #8d8d8d;
    }
    .form-data .r-forget a:hover{
        color: #3895e8;
    }
    .form-data .third-party{
        width: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .form-data .third-party .icon-qq{
        font-size: 32px;
        color: #e5e5e5;
        display: inline-block;
        vertical-align: middle;
    }
    .form-data .third-party .icon-qq:hover{
        color: #42a5f5;
    }
    .form-data .third-party .icon-weixin:hover{
        color: #0fccbc;
    }
    .form-data .third-party .icon-weibo:hover{
        color: #da2a2e;
    }
    .form-data .third-party .icon-weixin{
        font-size: 40px;
        color: #e5e5e5;
        display: inline-block;
        vertical-align: middle;
    }
    .form-data .third-party .icon-weibo{
        font-size: 36px;
        color: #e5e5e5;
        display: inline-block;
        vertical-align: middle;
    }
    .form-data .change-login{
        width: 400px;
        margin: 0 auto 10px;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color: #cacaca;
    }
    .form-data .change-login p{
        cursor: pointer;
    }
    .form-data .change-login p.on{
        color: #76b9f7;
    }
    .find_password{
        background-color: #ffffff;
        width: 460px;
        border-radius: 5px;
        box-shadow: 0 0 30px rgba(0,0,0,.1);
        padding: 30px 0;
        left: 50%;
        margin-left: -230px;
        position: fixed;
        top: 15%;
    }
    .find_password h4{
        font-size: 18px;
        color: #42a5f5;
        text-align: center;
        width: 400px;
        margin: 0 auto;
    }
    .find_password .right_now{
        width: 380px;
        text-align: right;
        margin: 20px auto 30px;
        font-size: 12px;
        color: #cacaca;
    }
    .find_password .right_now a{
        color: #42a5f5;
    }
    .find_password .pc-very,.find_password .pc-code{
        display: none;
    }
    .find_password .very2{
        font-size: 14px;
        position: absolute;
        display: inline-block;
        color: #cacaca;
        top: 14px;
        right: 0;
    }
    #pc_reset,#pc_reset2{
        width: 280px;
    }
    .pc_reset span{
        display: inline-block;
        font-size: 14px;
        position: absolute;
        /* color: #cacaca; */
        top: 14px;
        right: 0;
    }
    .error-tip{
        position: absolute;
        right: 0;
        top: 15px;
        color: #ea5d5f;
        font-size: 14px;
        /* width: 400px; */
        margin: 0 auto;
        display: none;
    }
    .find_password .jihuo_email{
        width: 400px;
        text-align: center;
        font-size: 14px;
        color: #8d8d8d;
        margin: 0 auto;
    }
    .find_password .again{
        width: 400px;
        color: #cacaca;
        font-size: 12px;
        text-align: center;
        margin: 0 auto;
    }
    .find_password .again a{
        color: #42a5f5;
    }
    .login_wrap .right{
        position: absolute;
        width: 1180px;
        bottom: -80px;
        text-align: center;
        line-height: 40px;
        left: 50%;
        margin-left: -590px;
        color: rgba(0,0,0,.3);
    }
</style>