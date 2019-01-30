<template>
    <div class="appSetting">
        <!--顶部页面提示-->
        <div class='mui-row mySelf'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow'></span>
                    <span>我的</span>
                </div>
            </div>
        </div>


        <header class="w100">
            <div>
                <img src="static/img/@3x/$.png" @click="perPelForm" />
            </div>
            <div>
                <p v-if='!email'><span><router-link to='/login'>请登录</router-link></span>/<span><router-link to='/reg'>注册</router-link></span></p>
                <p v-else>{{email}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span @click='logOut'>登出</span></p>
            </div>
        </header>
            <ul class="ui-list ui-list-link ui-list-single ui-border-tb mt40">
                <li>
                    <div class="ui-avatar-s wsgrxx">
                    </div>
                    <div class="ui-list-info ui-border-t" @click="perPelForm">
                        <h4 class="ui-nowrap" >查看个人信息</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s xgmm">
                    </div>
                    <div class="ui-list-info ui-border-t" @click="cPwd">
                        <h4 class="ui-nowrap" >修改个人密码</h4>
                    </div>
                </li>
            </ul>

            <ul class="ui-list ui-list-link ui-list-single ui-border-tb mt20">
                <li>
                    <div class="ui-avatar-s wdyqm">
                    </div>
                    <div class="ui-list-info ui-border-t " @click="myInvCode">
                        <h4 class="ui-nowrap" >我的邀请码</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s wdtjr">
                    </div>
                    <div class="ui-list-info ui-border-t " @click="mySup">
                        <h4 class="ui-nowrap" >我的推荐人</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s wdtd">
                    </div>
                    <div class="ui-list-info ui-border-t " @click="myTeam">
                        <h4 class="ui-nowrap" >我的团队</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s gywm">
                    </div>
                    <div class="ui-list-info ui-border-t " @click="aboutUs">
                        <h4 class="ui-nowrap" >关于我们</h4>
                    </div>
                </li>
            </ul>

    </div>
</template>
<script>
export default {
  name: "appSetting",
  data() {
    return {
			email:''
		}
  },
	created() {
		if(sessionStorage.getItem('email'))
        {
            this.uInfo=true;
            this.email=sessionStorage.getItem('email');
        }
	},
  methods: {
    logOut(){
        sessionStorage.removeItem('email');//清除用户信息
        history.go(0);
    },
    judge(){
      if(!sessionStorage.getItem('email'))
      {
        alert('还未登录 请先登录', 'Hello MUI');
        return false;
      }
      else
      {
          return true;
      }
    },
    cPwd(){
      if(this.judge())
      {
        this.$router.push('/setting/cPwd');
      }
    },
    cSafeCode(){
      if(this.judge())
      {
        this.$router.push('/setting/cSafeCode');
      }
    },
    perPelForm(){
      if(this.judge())
      {
        this.$router.push('/setting/perPelForm');
      }
    },
    cGetId(){
      if(this.judge())
      {
        this.$router.push('/setting/cGetId');
      }
    },
    myInvCode(){
      if(this.judge())
      {
        this.$router.push('/setting/myInvCode');
      }
    },
    mySup(){
      if(this.judge())
      {
        this.$router.push('/setting/mySup');
      }
    },
    myTeam(){
      if(this.judge())
      {
        this.$router.push('/setting/myTeam');
      }
    },
    aboutUs(){
      if(this.judge())
      {
        this.$router.push('/setting/aboutUs');
      }
    }
  }
};
</script>
<style lang="less">
p{
    margin:0;
    padding:0;
}
header{
    margin-top: -80px;
    padding-left:5%;
    height: 92px;
    background: #1E90FF;
    display:flex;
    justify-content:start;
    align-items:center;
}
header img{
	border-radius:50%;
    width:100%;
}
header p,header a{
	color:#fff;
	font-size:18px;
	font-family:'冬青';
}
header>div:nth-child(2){
    margin-left:5%;
}

.ui-list li h4 {
    color: #303133;
    margin-block-start: 0em;
    margin-block-end: 0em;
}
.xgmm{
    background-image:url('/static/img/@3x/切图@3x_05.png');
}
.xgaqm{
    background-image:url('/static/img/@3x/切图@3x_03.png');
}
.wsgrxx{
    background-image:url('/static/img/@3x/切图@3x_09.png');
}

.xgskzh{
    background-image:url('/static/img/@3x/切图@3x_13.png');
}
.wdyqm{
    background-image:url('/static/img/@3x/切图@3x_07.png');
}
.wdtjr{
    background-image:url('/static/img/@3x/切图@3x_11.png');
}
.wdtd{
    background-image:url('/static/img/@3x/切图@3x_15.png');
}
.gywm{
    background-image:url('/static/img/@3x/切图@3x_17.png');
}
.mt20{
    margin-top: 10%
}
</style>
