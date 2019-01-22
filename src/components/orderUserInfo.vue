<template>
  <div class='app-info'>
    <!--顶部页面提示-->
    <div class='mui-row orderU'>
      <div class='mui-col-xs-12'>
          <div class='grid-content bg-purple-dark back'>
            <span class='arrow' @click='backToOld'></span>
            <span>对方信息</span>
          </div>
      </div>
    </div>

    <div class='mui-row'>
      <div class='mui-col-xs-6'>
        <p class='firstT'>交易号:xxxxxx</p>
      </div>
      <div class='mui-col-xs-6'>
        <p class='firstT'>对方用户名:xxx</p>
      </div>
    </div>

    <div class='mui-row orderInfo'>
      <div class='mui-col-xs-6'>
        <ul class='uInfo'>
          <li>
            <p class='firstT'>金额:xxx(元)</p>
          </li>
          <li>
            <p class='firstT'>姓名:xxx</p>
          </li>
          <li>
            <p class='firstT'>收款平台:微信</p>
          </li>
          <li>
            <p class='firstT'>电话:00000000000</p>
          </li>
        </ul>
      </div>
      <div class='mui-col-xs-6'>
        <p class='secT'>收款二维码</p>
        <img src="static/img/@3x/$.png">
      </div>
    </div>

    <div class='mui-row myProof'>
      <div class='mui-col-xs-3'>
        <p class='firstT'>我的凭证：</p>
      </div>
      <div class='mui-col-xs-3'>
        <img src="static/img/@3x/$.png">
      </div>
      <div class='mui-col-xs-3'>
        <img src="static/img/@3x/$.png">
      </div>
      <div class='mui-col-xs-3'>
        <img src="static/img/@3x/$.png">
      </div>
    </div>

  </div>
</template>

<script>
export default{
  data(){
    return {}
  },
  methods: {
    backToOld(){
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="">
.orderU .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.orderU .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.orderU .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.orderU .back span:nth-child(1){
  margin-left:5%;
}
.orderU .back span:nth-child(2){
  margin:0 auto !important;
}
.app-info .firstT{
  font-size:18px;
  color:#000;
}
.app-info .secT{
  color:#000;
  font-size:14px;
}

.orderInfo{
  margin-top:15px;
  display:flex;
  align-items:center;
}

.uInfo,.myProof{
  display:flex;
  flex-direction:column;
  align-items:start;
}
.uInfo li{
  margin-left:18%;
}

.myProof{
  display:flex;
  flex-direction:row;
  align-items:start;
}
.myProof div:nth-child(1) p{
  margin-top:40%;
}
</style>