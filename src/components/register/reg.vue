<template>
  <div id="app-reg">
    <el-steps :active="active" simple>
      <el-step icon="el-icon-edit"></el-step>
      <el-step icon="el-icon-upload"></el-step>
      <el-step icon="el-icon-check"></el-step>
    </el-steps>

    <div class="ui-form ui-border-t" :class="{showed:istype != 0}">
        <form action="">
            <div class="ui-form-item ui-form-item-pure ui-border-b">
                <input type="text" placeholder="手机号" v-model="sendData.data.phone">
                <a href="#" class="ui-icon-close" @click="clearPhone"></a>
            </div>
            <div class="ui-form-item ui-form-item-pure ui-border-b">
                <input type="password" placeholder="密码" v-model="sendData.data.pwd">
                <a href="#" class="ui-icon-close" @click="clearPwd">
                </a>
            </div>
            <div class="ui-form-item ui-form-item-pure ui-border-b">
                <input type="text" placeholder="验证码" v-model="sendData.data.authToken">
                <a href="#" @click="getToken">
                  <span style="text-align:right;">{{getAuthToken}}</span>
                </a>
            </div>
            <div class="ui-form-item ui-form-item-pure ui-border-b">
                <input type="text" placeholder="邀请码"  v-model="sendData.data.invitationCode">
                <a href="#" class="ui-icon-close"  @click="clearInvitationCode"></a>
            </div>
        </form>
    </div>

    <!-- 发送成功 验证验证码 -->
    <div class="ui-form ui-border-t showed" :class="{showedTwo:istype == 2}">
        <form action="">
            <div class="ui-form-item ui-border-b">
                <label>
                  验证码
                </label>
                <input type="text" placeholder="6位短信验证码" v-model="sixAuthCode">
                <a href="#" class="ui-icon-close" @click="sixAuthCode=null">
                </a>
            </div>
        </form>
    </div>

    <!-- 注册成功 -->
    <div class="ui-dialog ui-dialog-operate" :class="{show:istype == 3}">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>注册成功</h3>
          <p>你于{{time | dateFilter}}成功注册成为一名尊贵的吃大饼会员</p>
        </div>
        <div class="ui-dialog-ft">
          <button class="ui-btn-lg" @click="toLogin">立即登录</button>
        </div>
      </div>
    </div>

    <button class="ui-btn-lg ui-btn-primary" @click="next">下一步</button>




    <!-- 前往登陆 -->
    <button class="returnLogin pa tr b10 l50" type="button" @click="toLogin"></button>



    <!-- 弹窗 -->
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      time:new Date(),
      authNote:'sdafasfasfsdf',
      sixAuthCode: null,
      istype:0,
      active: 1,
      getAuthToken: 4835,
      theErrer: null,
      sendData: {
        type: 100,
        data: {
          phone: null,
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
      this.theErrer = "手机号";
      this.istype = 4;
    },
    theErrerPwd() {
      this.theErrer = "密码";
      this.istype = 4;
    },
    getToken() {
      //获取验证码
      let url = "http://192.168.199.101:3001/getToken";
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
    clearIsType(){
      this.istype = 0;
    },
    clearInvitationCode() {
      this.sendData.data.invitationCode = null;
    },
    clearPhone() {
      this.sendData.data.phone = null;
    },
    clearPwd() {
      this.sendData.data.pwd = null;
    },
    next() {

      let reg1 = /^1[3-8]\d{9}$/;
      if (!reg1.test(this.sendData.data.phone)) {
        this.theErrerPho();
        return;
      }
      
      let reg2 = /^\w{8,15}$/;
      if (!reg2.test(this.sendData.data.pwd)) {
        this.theErrerPwd();
        return;
      }

      if (this.sendData.data.authToken != this.getAuthToken) {
        this.theErrerAuth();
        return;
      }
      
      if(this.sendData.data.authToken == this.getAuthToken && reg1.test(this.sendData.data.phone) && reg2.test(this.sendData.data.pwd) && this.istype == 0){
        this.istype=1;
      }

      if (this.istype == 1) {
        console.log(this.istype == 1);
        if (this.active++ > 2) this.active = 1;
        let url = "http://192.168.199.101:3001/reg";
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
        if(this.authNote == this.sixAuthCode){
          if (this.active++ > 2) this.active = 1;
          let regData = {};
          regData.type = 102;
          regData.data = {};
          regData.data.phone = this.sendData.data.phone || null;
          regData.data.pwd = this.sendData.data.pwd || null;
          regData.data.invitationCode = this.sendData.data.invitationCode || null;
          regData.data.sixAuthCode = this.sixAuthCode || null;
          console.log(regData);
          let url = "http://192.168.199.101:3001/regAuth";
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
              this.istype=3;
            }
          });
        } 
      }
    }
  }
};
</script>
<style lang="less">
@thisRem: 0.1rem;
#app-reg {
  width: 100%;
  font-size: @thisRem;
  .el-steps--simple {
    border-radius: 0px;
    background: #ffffff;
  }
  .showed {
    display: none;
  }
  .showedTwo{
    display: block;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: url('/static/bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: block;
  .ui-dialog-close {
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
  }
  .returnLogin{
    width: 48px;
    height: 48px;
    background: url('/static/img/@3x/fx.png') no-repeat;
    background-size: 48px 48px;
    background-position: 0px 0px;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 9999;
  }
}
</style>
