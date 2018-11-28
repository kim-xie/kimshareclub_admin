<template>
    <div class="login_wrap">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form">
					<span class="login100-form-title">登录</span>

					<div class="wrap-input100" data-validate="请输入用户名">
						<input class="input100" type="text" name="username" placeholder="请输入用户名" autocomplete="off">
					</div>

					<div class="wrap-input100" data-validate="请输入密码">
						<input class="input100" type="password" name="password" placeholder="请输入密码">
					</div>

					<div class="text-right forgot">
						<a href="javascript:;">忘记密码？</a>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">登 录</button>
						</div>
					</div>

					<div class="txt1 text-center">
						<span>第三方登录</span>
					</div>

					<div class="flex-c-m">
						<a href="javascript:;" class="login100-social-item bg1">
							<i class="iconfont icon-weixin fs24"></i>
						</a>

						<a href="javascript:;" class="login100-social-item bg2">
							<i class="iconfont icon-qq fs24"></i>
						</a>

						<a href="javascript:;" class="login100-social-item bg3">
							<i class="iconfont icon-weibo fs24"></i>
						</a>
					</div>

					<div class="flex-col-c">
						<a href="javascript:" class="txt2">立即注册</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data: function(){
            return {

            }
        },
        mounted () {

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login_wrap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-image: url('../assets/imgs/login_bg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .login_wrap .container-login100 {
        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .wrap-login100 {
        width: 360px;
        background: #fff;
        border-radius: 10px;
        padding: 45px 35px 35px 35px;
        overflow: hidden;
    }
    .login100-form {
        width: 100%;
    }
    .login100-form-title {
        display: block;
        font-family: 'Microsoft Yahei';
        font-size: 39px;
        color: #333333;
        line-height: 1.2;
        text-align: center;
        padding-bottom: 50px;
    }
    .wrap-input100 {
        width: 100%;
        position: relative;
        border-bottom: 2px solid #d9d9d9;
        margin-bottom: 23px;
    }
    .input100 {
        outline: none;
        border: none;
        font-family: 'Microsoft Yahei';
        font-size: 16px;
        color: #333333;
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        background: transparent;
        padding: 0 7px 0 43px;
    }
    .container-login100-form-btn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .wrap-login100-form-btn {
        width: 100%;
        display: block;
        position: relative;
        z-index: 1;
        border-radius: 25px;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
        -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
        -webkit-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
        -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
        -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    }
    .login100-form-bgbtn {
        position: absolute;
        z-index: -1;
        width: 300%;
        height: 100%;
        background-color: #a64bf4;
        /* background-color: -webkit-linear-gradient(linear, 0 0, 0 100%, from(＃2074af), to(＃2c91d2));
        background-color: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        background-color: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        background-color: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff); */
        top: 0;
        left: -100%;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
    }
    .login100-form-btn {
        font-family: 'Microsoft Yahei';
        font-size: 16px;
        color: #fff;
        line-height: 1.2;
        text-transform: uppercase;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 50px;
    }
    .wrap-login100-form-btn:hover .login100-form-bgbtn {
        left: 0;
    }
    button:hover {
        cursor: pointer;
    }
    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }
    .forgot{
        padding-bottom: 20px;
    }
    .txt1 {
        font-family: 'Microsoft Yahei';
        font-size: 14px;
        line-height: 1.5;
        color: #666666;
        padding: 30px 0 20px 0;
    }
    .flex-c-m {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        -ms-align-items: center;
        align-items: center;
    }
    .login100-social-item {
        font-size: 25px;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px;
    }
    .bg1 {
        background-color: #3b5998;
    }
    .bg2 {
        background-color: #1da1f2;
    }
    .bg3 {
        background-color: #ea4335;
    }
    .flex-col-c {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
        -ms-align-items: center;
        align-items: center;
        padding-top: 25px;
    }
    .txt2 {
        font-family: 'Microsoft Yahei';
        font-size: 14px;
        line-height: 1.5;
        color: #333333;
        text-transform: uppercase;
    }
</style>