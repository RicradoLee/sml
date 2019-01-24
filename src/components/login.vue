<template>
  <div class="app-login">
    <!-- 登录主页面 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 0}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>登录</h3>
            <div class="ui-form ui-border-t">
              <form action="">
                  <div class="ui-form-item ui-border-b">
                      <label>
                          账号
                      </label>
                      <input type="text" placeholder="手机号或账号" v-model="loginData.data.user">
                      <a href="#" class="ui-icon-close">
                      </a>
                  </div>
                  <div class="ui-form-item ui-border-b">
                      <label>
                          密码
                      </label>
                      <input type="password" placeholder="8-15位密码" v-model="loginData.data.pwd">
                      <a href="#" class="ui-icon-close">
                      </a>
                  </div>

                  <el-checkbox label="记住密码" name="type" class="mt10"></el-checkbox>
                
                  <p class="mt10">
                    <span class="taL" @click="toForPwd">忘记密码</span>
                    <span class="taR" @click="toReg">新用户注册</span>
                  </p>
                  <div class="ui-btn-wrap">
                      <button class="ui-btn-lg ui-btn-primary" @click="LoginQue">
                          登录
                      </button>
                  </div>
                  <footer>
                    <p class="f-white">登录即代表阅读并同意《
                      <span class="f-blue" @click="toService">服务条款</span>》
                    </p>
                  </footer>
              </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务条款 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 10}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>服务条款</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos itaque officia qui. Commodi dolorum sed alias illo, beatae autem, dolore sapiente ad ipsam cumque at vitae mollitia, dolor optio quo!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam fuga optio vitae at eos odit rem, quidem omnis repudiandae nam debitis fugiat animi ab accusamus praesentium, perferendis ipsum soluta mollitia?
          </p>
        </div>
        <i class="ui-dialog-close" data-role="button" @click="toLoginIndex"></i>
      </div>
    </div>

    <!-- 忘记密码 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 2}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>忘记密码</h3>
            <div class="ui-form ui-border-t">
              <form action="">
                  <div class="ui-form-item ui-border-b">
                      <label>
                          账号
                      </label>
                      <input type="text" placeholder="手机号或账号" v-model="forPwdData.data.user">
                      <a href="#" class="ui-icon-close" @click="clearUser">
                      </a>
                  </div>
                  <div class="ui-form-item ui-form-item-pure ui-border-b pd0">
                      <label>
                        验证码&nbsp
                      </label>
                      <input type="text" placeholder="四位验证码" v-model="forPwdData.data.AuthToken">
                      <a href="#" @click="getAuth">
                        <span style="text-align:right;margin-left:-40px;">{{getAuthToken}}</span>
                      </a>
                  </div>
                  <div class="ui-btn-wrap">
                      <button class="ui-btn-lg ui-btn-primary" @click="forPwd">
                        下一步
                      </button>
                  </div>
              </form>
          </div>
          <i class="ui-dialog-close" data-role="button" @click="toLoginIndex"></i>
        </div>
      </div>
    </div>

    <!-- 输入验证码 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 3}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>输入验证码</h3>
            <div class="ui-form ui-border-t">
              <form action="">
                  <div class="ui-form-item ui-border-b">
                      <label>
                        验证码
                      </label>
                      <input type="text" placeholder="短信验证码" v-model="Auth">
                      <a href="#" class="ui-icon-close" @click="clearAuth">
                      </a>
                  </div>
                  <div class="ui-btn-wrap">
                      <button class="ui-btn-lg ui-btn-primary" @click="forPwd">
                        下一步
                      </button>
                  </div>
              </form>
          </div>
          <i class="ui-dialog-close" data-role="button" @click="toLoginIndex"></i>
        </div>
      </div>
    </div>

    <!-- 修改密码 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 4}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>输入新密码</h3>
            <div class="ui-form ui-border-t">
              <form action="">
                  <div class="ui-form-item ui-border-b">
                      <label>
                        密码
                      </label>
                      <input type="password" placeholder="8-15位包含数字和字母" v-model="newPwd">
                      <a href="#" class="ui-icon-close" @click="clearNewPwd">
                      </a>
                  </div>
                  <div class="ui-form-item ui-border-b">
                      <label>
                        重复密码
                      </label>
                      <input type="password" placeholder="" v-model="againPwd">
                      <a href="#" class="ui-icon-close" @click="clearAgaPwd">
                      </a>
                  </div>
                  <div class="ui-btn-wrap">
                      <button class="ui-btn-lg ui-btn-primary" @click="forPwd">
                        下一步
                      </button>
                  </div>
              </form>
          </div>
          <i class="ui-dialog-close" data-role="button" @click="toLoginIndex"></i>
        </div>
      </div>
    </div>

    <!-- 修改成功 -->
    <div class="ui-dialog ui-dialog-operate ui-dialog-operate-icon" :class="{show:pageNum == 5}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>喔！天呐！你终于修改好密码了 ！蛋疼</h3>
        </div>
        <div class="ui-dialog-ft">
          <button class="ui-btn-lg" @click="toLoginIndex">立即登录</button>
        </div>
          <i class="ui-dialog-close" data-role="button"  @click="toLoginIndex"></i>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      againPwd:null,
      newPwd:null,
      Auth:null,
      getAuthToken:4835,
      pageNum:0,
      loginData:{
        type:200,
        data:{
          user:null,
          pwd:null
        }
      },
      forPwdData:{
        type:205,
        data:{
          user:null,
          AuthToken:4385
        }
      }
    };
  },
  mounted() {},
  created() {},
  updated() {
  },
  methods: {
    forPwd(){
      switch(this.pageNum){
        case 2:
          this.checkAuthToken();
        break;

        case 3:
          this.checkAuthToken();
        break;

        case 4:
          this.sendPwdData();
        break;
      }
    },
    sendPwdData(){
      if(this.pageNum==4){
        let data = {
          type:209,
          data:{
            pwd:this.newPwd || null,
            user:this.forPwdData.data.user || null
          }
        };

        let url = sessionStorage.getItem('serverIp')+"/forPwd";
        this.axios.post(
          url,
          this.qs.stringify(this.forPwdData),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          if(res.data.data.msg == "change succeed" && res.data.type == 210){
            this.pageNum = 5;
          }
        });
      }
    },
    checkAuth(){
      if(this.pageNum==3){
        let data = {
          type:207,
          data:{
            sixAuth:null,
            user:this.forPwdData.data.user || null
          }
        };
        let url = sessionStorage.getItem('serverIp')+"/forPwd";
        this.axios.post(
          url,
          this.qs.stringify(this.forPwdData),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          if(res.data.data.sixAuth == this.Auth && res.data.type == 208){
            this.pageNum = 4;
          }
        });
      }
    },
    checkAuthToken(){
      if(this.pageNum==2){
        console.log(this.forPwdData);
        let url = sessionStorage.getItem('serverIp')+"/forPwd";
        this.axios.post(
          url,
          this.qs.stringify(this.forPwdData),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          if(res.data.data.AuthToken == this.AuthToken && res.data.type == 206){
            this.pageNum = 3;
          }
       });
      }
    },
    getAuth(){
      //获取验证码
      let url = sessionStorage.getItem('serverIp')+"/getToken";
      this.axios
        .get(url)
        .then(res => {
          //console.log(res.data);
          this.getAuthToken = res.data.getAuthToken;
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearNewPwd(){
      this.newPwd = null;
    },
    clearAgaPwd(){
      this.againPwd = null;
    },
    clearAuth(){
      this.Auth = null;
    },
    clearUser(){
      this.forPwdData.data.user = null;
    },
    toForPwd(){
      this.pageNum = 2;
      this.getAuth();
    },
    toReg(){
      this.$router.push('/reg');
    },
    toLoginIndex(){
      this.pageNum = 0;
    },
    toService(){
      this.pageNum = 4;
    },
    LoginQue(){
      if(this.pageNum==0){
        let url = sessionStorage.getItem('serverIp')+"/login";
        this.axios.post(
          url,
          this.qs.stringify(this.loginData),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          if(res.data.data.msg == "successed" && res.data.type == 201){
              sessionStorage.setItem('uPhone',this.loginData.data.user);//登陆成功之后将电话存入全局变量
              this.$router.push('/index');
              // this.$router.go(-1);
              this.$store.state.loginData = res.data;
          }
        });
      }
    }
  }
};
</script>
<style lang="less">
@thisRem: 0.1rem;
.app-login {
  margin: 0;
  font-size: @thisRem;
  color: #fff;
  .ui-dialog {
    background: url('/static/bg.jpg') no-repeat;
    background-size: 100% 100%;
    .pd0{
      padding-right: 0px;
    }
    .mt10{
      margin-top: 5%;
      text-align: left;
      .taL{
        margin-left: 5%;
        color: #12B7F5;
      }
      .taR{
        float: right;
        margin-right: 5%;
        color: #12B7F5;
      }
    }
    input:-webkit-autofill{
      background-color:#fff !important;
      -webkit-box-shadow: 0 0 0px 1000px white inset
    }
  }
  footer {
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000000;
    .f-white {
      margin-top:-41px;
      .f-blue {
        color: red;
      }
    }
  }
}
</style>
