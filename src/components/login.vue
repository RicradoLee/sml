<template>
  <div class="app-login" id='app-login'>
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
                      <input type="text" placeholder="请输入用户名或邮箱" v-model="forPwdData.data.user">
                      <a href="#" class="ui-icon-close">
                      </a>
                  </div>
                  <div class="ui-form-item ui-border-b">
                      <label>
                          密码
                      </label>
                      <input type="password" placeholder="8-15位密码" v-model="forPwdData.data.pwd">
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

    <div :class="{show:pageNum == 2}">
      <div class='title'>
        <div>
          <h3>修改密码</h3>
        </div>

        <div class='mui-row'>
          <form class="mui-input-group info">
            <div class="mui-input-row">
                <label>邮箱</label>
                <input type="text" class="mui-input-clear" placeholder="请输入邮箱" v-model="forPwdData.data.user">
            </div>
            <div class="mui-input-row">
                <label>旧密码</label>
                <input type="password" class="mui-input-clear" placeholder="请输入旧密码" v-model="forPwdData.data.pwd">
            </div>

            <div class="mui-input-row">
                <label>新密码</label>
                <input type="password" class="mui-input-clear" placeholder="请输入新密码" v-model="newPwd">
            </div>
            <div class="mui-input-row">
                <label>再次输入密码</label>
                <input type="password" class="mui-input-clear" placeholder="请再次输入密码" v-model="againPwd">
            </div>
          </form>
        </div>

        <div class='mui-row sub'>
          <button type="button" class="mui-btn mui-btn-primary" @click='checkAuthToken'>提交</button>
        </div>
      </div>

      <!-- 修改成功 -->
      <div class="ui-dialog ui-dialog-operate" :class="{show:pageNum == 4}">
        <div class="ui-dialog-cnt">
          <div class="ui-dialog-bd">
            <h3>修改成功</h3>
          </div>
          <div class="ui-dialog-ft">
          <button class="ui-btn-lg" @click="toLoginIndex">立即登录</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      againPwd:null,
      newPwd:null,
      Auth:null,
      pageNum:0,
      forPwdData:{
        type:205,
        data:{
          user:null,
          pwd:null
        }
      }
    };
  },
  mounted() {},
  created() {},
  updated() {
  },
  methods: {
    checkAuthToken(){
      if(this.pageNum==2){
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
          if(res.data.type == 206){
            this.pageNum = 4;
          }
       });
      }
    },
    toForPwd(){
      this.pageNum = 2;
    },
    toReg(){
      this.$router.push('/reg');
    },
    toLoginIndex(){
      this.pageNum = 0;
      this.$router.push('/login');
    },
    toService(){
      this.pageNum = 10;
    },
    LoginQue(){
      //验证邮箱格式
      let reg1 = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;//邮箱验证
      if (!reg1.test(this.forPwdData.data.user)) {
        Toast('邮箱格式有误');
        return;
      }
      //验证密码
      let reg2 = /^\w{8,15}$/;
      if (!reg2.test(this.forPwdData.data.pwd)) {
        Toast('密码格式有误');
        return;
      }

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
          if(res.data.type == 200){
              sessionStorage.setItem('email',res.data.data.user);//登陆成功之后将邮箱存入全局变量
              sessionStorage.setItem('id',res.data.data.id);
              alert('登录成功');
              // Toast('登录成功');
              this.$router.push('/index');
              this.$store.state.loginData = res.data.data.user;
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
  color:#fff;
  font-size: @thisRem;
  .ui-dialog {
    background: url('/static/bg.jpg') no-repeat;
    background-size: 100% 100%;
    z-index:11;
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

.title{
  margin-top:38%;
  padding:5% 3%;

}
#app-login{
  background: url(/static/bg.jpg) no-repeat;
  background-size: 100% 100%;
  height:92% !important;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 11;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
#token{
  position:absolute;
  top:8px;
  left:307px;
}
.info{
  background:none;
}
.sub button{
  width:100%;
}

.show{
  display: block;
}
#app-login .ui-dialog-ft button{
  margin-left:100%;
}
</style>
