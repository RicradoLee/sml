<template>
    <div class="appSetting">
        <header class="w100">
            <img src="static/img/@3x/$.png">
        </header>
            <ul class="ui-list ui-list-link ui-list-single ui-border-tb mt40">
                <li>
                    <div class="ui-avatar-s xgmm">
                        
                    </div>
                    <div class="ui-list-info ui-border-t" @click="cPwd">
                        <h4 class="ui-nowrap" >修改个人密码</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s xgaqm">
                    </div>
                    <div class="ui-list-info ui-border-t" @click="cSafeCode">
                        <h4 class="ui-nowrap" >修改安全码</h4>
                    </div>
                </li>
                <li>
                    <div class="ui-avatar-s wsgrxx">
                    </div>
                    <div class="ui-list-info ui-border-t" @click="perPelForm">
                        <h4 class="ui-nowrap" >完善个人信息</h4>
                    </div>
                </li>
            </ul>

            <ul class="ui-list ui-list-link ui-list-single ui-border-tb mt20">
                <li>
                    <div class="ui-avatar-s xgskzh">
                        
                    </div>
                    <div class="ui-list-info ui-border-t" @click="cGetId">
                        <h4 class="ui-nowrap" >修改收款账号</h4>
                    </div>
                </li>
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
    return {}
  },
  methods: {
    cPwd(){
      this.$router.push('/setting/cPwd');
    },
    cSafeCode(){
      this.$router.push('/setting/cSafeCode');
    },
    perPelForm(){
      this.$router.push('/setting/perPelForm');
    },
    cGetId(){
      this.$router.push('/setting/cGetId');
    },
    myInvCode(){
      this.$router.push('/setting/myInvCode');
    },
    mySup(){
      this.$router.push('/setting/mySup');
    },
    myTeam(){
      this.$router.push('/setting/myTeam');
    },
    aboutUs(){
      this.$router.push('/setting/aboutUs');
    }
  }
};
</script>
<style lang="less">
header{
    margin-top: -20px;
    height: 1.1rem;
    background: #ff9726;
}
.ui-list li h4 {
    color: #000;
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
