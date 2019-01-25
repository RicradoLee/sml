<template>
  <div id="app-reg">

    <div class='title'>
      <div>
        <h3>注册</h3>
      </div>

      <div class='mui-row' :class="{showed:istype != 0}">
        <form class="mui-input-group info">
          <div class="mui-input-row">
              <label>邮箱</label>
              <input type="text" class="mui-input-clear" placeholder="请输入邮箱" v-model="sendData.data.email">
          </div>
          <div class="mui-input-row">
              <label>密码</label>
              <input type="password" class="mui-input-clear" placeholder="请输入密码" v-model="sendData.data.pwd">
          </div>

          <div class="mui-input-row">
              <label>验证码</label>
              <input id='test' type="text" class="mui-input-clear" placeholder="请输入验证码" v-model="sendData.data.authToken">
              <a href="#" @click="getToken" id='token'>
                <span style="text-align:right;">{{getAuthToken}}</span>
              </a>
          </div>
          <div class="mui-input-row">
              <label>邀请码</label>
              <input type="text" class="mui-input-clear" placeholder="请输入邀请码 可不填" v-model="sendData.data.invitationCode">
          </div>
        </form>
      </div>

      <div class='mui-row sub'>
        <button type="button" class="mui-btn mui-btn-primary" @click='next'>提交</button>
      </div>
    </div>

    <!-- 错误弹窗 -->
    <div class="ui-dialog" :class="{show:istype == 4}">
        <div class="ui-dialog-cnt">
            <div class="ui-dialog-bd">
                <p>{{theErrer}}错误</p>
            </div>
            <div class="ui-dialog-ft">
                <button type="button" data-role="button" @click="clearIsType">确定</button>
            </div>
        </div>
    </div>

    <!-- 注册成功 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:istype == 3}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>注册成功</h3>
          <p>你于{{time | dateFilter}}成功注册成为一名尊贵的吃大饼会员</p>
        </div>
        <div class="ui-dialog-ft">
          <router-link to='/login'><button class="ui-btn-lg" @click="toLogin">立即登录</button></router-link>
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
      time:new Date(),
      authNote:'sdafasfasfsdf',
      //sixAuthCode: null,
      istype:0,
      active: 1,
      getAuthToken: 4835,
      theErrer: null,
      sendData: {
        type: 100,
        data: {
          email: null,
          pwd:null,
          authToken: null,
          invitationCode: null
        }
      }
    };
  },
  beforeCreate() {},
  created() {
    this.getToken();
  },
  watch: {},
  methods: {
    clearIsType(){
      this.istype = 0;
    },
    toLogin(){
      this.$router.push('/login');
    }/*,
    regLogin(){
      let url = "http://192.168.199.101:3001/login";
      var loginData = {
        type:200,
        data:{
          user:this.sendData.data.phone || null,
          pwd:this.sendData.data.pwd || null
        }
      }
      this.axios
          .post(
            url, 
            this.qs.stringify(loginData), 
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then((res) => {
            console.log(res.data);
            if(res.data.data.msg == "successed" && res.data.type == 201){
              this.$router.push('/index');
            }
          });
    }*/,
    theErrerAuth() {
      this.theErrer = "验证码";
      this.istype = 4;
    },
    theErrerPho() {
      this.theErrer = "邮箱格式";
      this.istype = 4;
    },
    theErrerPwd() {
      this.theErrer = "密码";
      this.istype = 4;
    },
    getToken() {
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
    next() {
      //验证邮箱
      let reg1 = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (!reg1.test(this.sendData.data.email)) {
        this.theErrerPho();
        return;
      }
      //验证密码
      let reg2 = /^\w{8,15}$/;
      if (!reg2.test(this.sendData.data.pwd)) {
        this.theErrerPwd();
        return;
      }
      //验证随机验证码
      if (this.sendData.data.authToken != this.getAuthToken) {
        this.theErrerAuth();
        return;
      }

      if(this.sendData.data.authToken == this.getAuthToken && reg1.test(this.sendData.data.email) && reg2.test(this.sendData.data.pwd) && this.istype == 0){
        this.istype=1;
      }

      //获取验证码
      if (this.istype == 1) {
        console.log(this.istype == 1);
        if (this.active++ > 2) this.active = 1;
        let url = sessionStorage.getItem('serverIp')+"/reg";
        this.axios
          .post(url, this.qs.stringify(this.sendData), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.type == 101) {
              console.log(`初始化`);
              this.istype=2;
              this.authNote = res.data.data.authNote
            }
          });
      }

      // this.type=2;
      if (this.istype=2) {
        //console.log(this.authNote == this.sixAuthCode);
        //if(this.authNote == this.sixAuthCode){
          if (this.active++ > 2) this.active = 1;
          let regData = {};
          regData.type = 102;
          regData.data = {};
          regData.data.email = this.sendData.data.email || null;
          regData.data.pwd = this.sendData.data.pwd || null;
          regData.data.invitationCode = this.sendData.data.invitationCode || null;
          regData.data.sixAuthCode = this.sixAuthCode || null;
          console.log(regData);
          let url = sessionStorage.getItem('serverIp')+"/regAuth";
          this.axios.post(
            url,
            this.qs.stringify(regData),
            {
              headers:{
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then((res)=>{
            console.log(res.data);
            if(res.data.data.msg == "successed" && res.data.type == 103){
              Toast('注册成功');
              this.istype=3;
            }
          });
        //} 
      }
    }
  }
};
</script>
<style lang="less">
.title{
  margin-top:38%;
  background-color:#fff;
  padding:5% 3%;
}
#app-reg{
  background: url(/static/bg.jpg) no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
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
</style>
