<template>
    <div class="app-index">
      <!-- 个人信息面板框 -->
          <div class="ui-dialog-cnt pa tr t24 l50">
           <ul class="ui-row">
                <li class="ui-col ui-col">
                  <p class="assets">总资产</p>
                  <p class="assetsMon">{{homeData.data.totalAssets}}</p>
                </li>
                <hr>
                <li class="ui-col ui-col">
                  <ul class="ui-row">
                    <li class="ui-col ui-col-50">
                      <p class="balance">余额</p>
                      <p class="balanceMon">{{homeData.data.balance}}</p>
                    </li>
                    <li class="ui-col ui-col-50">
                      <button class="ui-btn-lg-nowhole ui-btn-primary btn">提现</button>
                    </li>
                  </ul>
                </li>
                <hr>
                <li class="ui-col ui-col-50 br">
                  <p class="yesEarnings">昨日收益</p>
                  <p class="yesMon">{{homeData.data.yesEarnings}}</p>
                </li>
                <li class="ui-col ui-col-50">
                  <p class="addEarnings">累计收益</p>
                  <p class="addMon">{{homeData.data.addEarnings}}</p>
                </li>
            </ul>
        </div>
        <!-- 双横幅按钮 -->
        <ul class="ui-list ui-list-link ui-list-single ui-border-tb pa tr t50 l50 w102">
          <li>
              <div class="ui-avatar-s grzc">
                  
              </div>
              <div class="ui-list-info ui-border-t" @click="toBuy">
                  <h4 class="ui-nowrap">购入资产</h4>
              </div>
          </li>
          <li>
              <div class="ui-avatar-s mczc">
              </div>
              <div class="ui-list-info ui-border-t" @click="toSale">
                  <h4 class="ui-nowrap">卖出资产</h4>
              </div>
          </li>
        </ul>

        <!-- 交易记录和邀请收益选项卡 -->
        <section class="ui-panel ui-panel-center ui-border-tb pa tr t60 l50 w102">
          <ul class="ui-row">
            <li class="ui-col ui-col-50 tc" @click="busOrInvitation=0" :class="{bc:busOrInvitation == 0}">
              我的交易
            </li>
            <li class="ui-col ui-col-50 tc"  @click="busOrInvitation=1" :class="{bc:busOrInvitation == 1}">
              我的邀请
            </li>
          </ul>
        </section>

        <ul class="ui-list ui-list-link ui-list-single ui-border-tb pa tr t82-3 l50 w102" :class="{showed:busOrInvitation == 1}">
            <li class="x">
                <div class="ui-list-info ui-border-t">
                  <h4 class="ui-nowrap h05">
                    <p class="pa tr t20 l15">交易号:{{homeData.data.totalAssets}}
                      <span class="pa tr l400 t50">匹配时间：{{homeData.data.dealArr[0].expireDate | dateFilter}}</span>
                    </p>
                    <p class="pa tr t60 l10">购入</p>
                      <p class="pa tr t50 l26">金额:xx(元)
                      </p>
                      <p class="pa tr t70 l27">数额:XX(台)
                      </p>
                  </h4>
                  <p class="pa tr t66 l80">状态:{{homeData.data.dealArr[0].statusCode}}</p>
                </div>
            </li>
            <li class="x">
                <div class="ui-list-info ui-border-t h6">
                    <p class="pa tr t20 l18">对方用户:xxxx</p>
                    <p class="pa tr t46 l37">您需要在XXX时间内之前检查收款并为对方确认，超时会被处罚</p>
                    <button class="ui-btn-lg-nowhole ui-btn-primary pa tr t80 l35 br30">查看对方信息</button>
                </div>
                <button class="ui-btn-lg-nowhole ui-btn-primary pa tr t30 l88 w20 zIndex">我已付款</button>
                <button class="ui-btn-lg-nowhole ui-btn-primary pa tr t72 l88 w20 zIndex">投诉对方</button>
            </li>
            <li class="csfh">
              <p class="pa tr t0 l50 csfhA">若超时被投诉成功会导致封号</p>
            </li>
          </ul>
          

          <!-- 我的邀请 -->
          <ul class="ui-list ui-list-link ui-list-single ui-border-tb pa tr t70 l50 w102 h6" :class="{showed:busOrInvitation == 0}">
            <li class="x">
                <div class="ui-list-info ui-border-t">
                  <h4 class="ui-nowrap">
                    <p>
                      <span class="pa tr t70 l10 red">第{{homeData.data.invitation.num}}代邀请</span>
                      <span class="pa tr t70 l50 red">已激活</span>
                      <span class="pa tr t70 l80 red">奖励金</span>
                    </p>
                    <p>
                      <span class="pa tr t200 l20 red">用户名:{{homeData.data.invitation.invUser}}</span>
                      <span class="pa tr t200 l80 red">{{homeData.data.invitation.money}}</span>
                    </p>
                    <p class="pa tr t300 l22 red">注册时间:{{homeData.data.invitation.invDate | dateFilter}}</p>
                  </h4>
                </div>
            </li>
          </ul>


          
    </div>    
</template>
<script>
export default {
  name: "app-index",
  data() {
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
    };
  },created(){
    this.getHomeData();
  },
  methods:{
    toSale(){
      this.$router.push('/sale');
    },
    toBuy(){
      this.$router.push('/buy');
    },
    getHomeData(){
        let url = "http://192.168.199.101:3001/home";
        this.axios.post(
          url,
          this.qs.stringify(this.loginData),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          this.homeData = res.data;
      });

    }
  }
};
</script>
<style lang="less">
ul,p{
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: left;
  padding-inline-start: 0px;
}
.ui-row{
  hr{
    width: 80%;
  }
}
.ui-dialog-cnt {
  border-top: 0px solid; 
  width: 90%;
  height: 3rem;
  .ui-row{
    margin-top: 0.3rem;
  }
}
.ui-row-flex-ver .ui-col {
    height: 0.5rem;
}
.ui-list{
  .ui-nowrap{
    .red{
      font-size: 0.2rem;
      color: #ff0000;
    }
    .l400{
      left: 400%;
    }
    .t300 {
        top: 330%;
    }
  }
}
.assets{
  margin-left: 10%;
  margin-top: 2%;
}
.assetsMon{
  margin-left: 15%;
  margin-top: 0%;
}
.balance{
  margin-left: 20%;
  margin-top: 0%;
}
.balanceMon{
  margin-left: 30%;
  margin-top: 0%;
}
.btn{
  width: 50%;
}
.yesEarnings,.yesMon,.addEarnings,.addMon,.tc{
  text-align: center;
}
.br{
  border-right:2px solid #dddddd;
}
.grzc{
  background-image:url('/static/img/@3x/grzc.png');
  background-size: 34px 34px;
   background-repeat: no-repeat;
}
.mczc{
  background-image:url('/static/img/@3x/mczc.png');
  background-size: 33px 33px;
  background-repeat: no-repeat;
}
.tc{
  padding-top:10px;
  padding-bottom:10px;
}
.ui-list-link>.x:after {
    background: #fff;
    z-index: 0;
}
.showed{
  display: none;
}
.bc{
  color:#ff9726;
  border-bottom:2px solid #ff9726;
  
}
.h6{
  height: 1.2rem;
}
.h05{
  height: 0.68rem;
}
.pr{
  position: absolute;
  top: -160%;
  left: 0%;
}
.red{
  font-size: 0.2rem;
  color: #ff0000;
}
.t82-3{
  top:77.8%;
}
.zIndex{
  z-index: 2;
}
.br30{
  border-radius: 60px;
  background: #fff;
  color: #1492f8;
  //border: 1px solid #000000;
}
.csfh{
  width: 100%;
  height: 0.1rem;
}
.csfh::after{
    content: "";
    display: block;
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -7px;
    width: 8px;
    height: 14px;
    background:transparent !important;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
}
.csfhA{
  color: #ff0000 !important;
}
</style>
