<template>
  <div class='app-details'>
    <div class='up'>
      <div class="mui-row">
        <div class="mui-col-xs-6">
          <p>交易号:{{homeData.data.totalAssets}}</p>
        </div>
        <div class="mui-col-xs-6">
          <p>匹配时间:{{homeData.data.dealArr[0].expireDate | dateFilter}}</p>
        </div>
      </div>
    </div>

    <div class='middle'>
      <div class='mui-row'>
        <div class="mui-col-xs-2">
          <p>购入</p>
        </div>
        <div class="mui-col-xs-6">
          <p>金额:xx(元)</p>
          <p>数额:XX(台)</p>
        </div>
        <div class="mui-col-xs-4">
          <p>状态:{{homeData.data.dealArr[0].statusCode}}</p>
        </div>
      </div>
    </div>

    <div class='userInfo'>
      <div class='mui-row'>
        <div class="mui-col-xs-9 lDet">
          <p>对方用户:XXX</p>
          <p>您需要在XXX时间前为对方付款并提交付款证据，待对方确认后您即可购入成功</p>
          <router-link to='/orderUserInfo'><button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">查看对方信息</button></router-link>
        </div>
        <div class="mui-col-xs-3 rButton">
            <button type="button" class="mui-btn mui-btn-success mui-btn-outlined">我已付款</button>
            <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">投诉对方</button>
        </div>
      </div>
    </div>

    <div class='infoFoot'>
      <p>若超时被投诉成功会导致封号</p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      busOrInvitation:0,
      loginData:this.$store.state.loginData,
      homeData:{
        type:301,
        data:{
          totalAssets:521,
          balance:250,
          yesEarnings:521,
          addEarnings:521,
          invitation:{
            num:0,
            isCode:false,
            invUser:"asdfsadf",
            money:1324,
            invDate:new Date()
          },
          dealArr:[
            {
              invAmount:521524,
              dealId:25125521252,
              statusCode:'申购中',
              expireDate:new Date(),
              proData:'七天',
              estAmount:1254.85
            },
            {
              saleAmount:521524,
              dealId:25125521252,
              statusCode:'已完成',
              expireDate:new Date(),
              saleType:'提现',
              reaAmount:1254.85
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="less">
p{
  margin:0;
  padding:0;
}

.app-details{
  display:flex;
	flex-direction:column;
}

.middle,{
  border-bottom:1px solid #000;
}
.middle .mui-col-xs-2{
  display:flex;
	justify-content:center;
	align-items:center;
}
.middle .mui-col-xs-2 p{
  margin-left:34px;
}
.middle .mui-col-xs-4 p,.middle .mui-col-xs-2 p{
  margin-top:13px;
}
.middle .mui-col-xs-6{
  margin-left:-20px;
}

.userInfo{
  margin-top:10px;
}
.userInfo .mui-row{
  display:flex;
  align-items:center;
}
.rButton button:nth-child(1){
  margin-bottom:20px;
}
.rButton button:nth-child(2){
  margin-bottom:-8px;
}
.lDet{
  display:flex;
  flex-direction:column;
}

.infoFoot{
  margin-top:10px;
  border:1px solid #000;
}
</style>