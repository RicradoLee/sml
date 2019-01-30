<template>
   <div class='app-home'>
      <!--顶部状态栏-->
      <el-row>
        <el-col :span="24" class="w103">
          <div class="grid-content bg-purple-dark">
          我的资产
          </div>
        </el-col>
      </el-row>
      <!--顶部资产信息面板-->
      <div class='mInfo'>
        <!--内层-->
        <div class='tInfo'>
          <ul>
            <li>
              <p class='infoTitle'>总资产(元)</p>
              <p class='infoDet'>{{homeData.data.totalAssets}}</p>
            </li>
            <li>
              <div>
                <p class='infoTitle'>余额(元)</p>
                <p class='infoDet'>{{homeData.data.balance}}</p>
              </div>
              <mt-button size='small' type='primary'>提现</mt-button>
            </li>
            <li>
              <div>
                <p class='infoTitle'>昨日收益(元)</p>
                <p class='infoDet'>{{homeData.data.yesEarnings}}</p>
              </div>
              <div>
                <p class='infoTitle'>累计收益(元)</p>
                <p class='infoDet'>{{homeData.data.addEarnings}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--中部-->
      <div class='asset'>
        <div @click="toBuy">
          <mt-cell title='购入资产' icon='more'>
            <img slot="icon" src="../../static/img/@3x/mczc.png" width="24" height="24">
            <div class='arrow'></div>
          </mt-cell>
        </div>
        <div @click="toSale">
          <mt-cell title='卖出资产' icon='more'>
            <img slot="icon" src="../../static/img/@3x/grzc.png" width="24" height="24">
            <div class='arrow'></div>
          </mt-cell>
        </div>
      </div>

      <!-- 交易记录和邀请收益选项卡 -->
        <!-- navbar -->
      
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">交易记录</mt-tab-item>
          <mt-tab-item id="2">分享收益</mt-tab-item>
        </mt-navbar>
    
    
      <!-- tabcontainer -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <!--选项卡详情-->
            <div class='cecBox' @click='jumpToDet' v-for='item in homeData.data.dealArr'>
              <ul>
                <!--交易记录-->
                <li class='record upRecord'>
                  <div>
                    <div>
                      <p class='firstT'>投资金额:<span style='color:red;'>{{homeData.data.totalAssets}}</span>元</p>
                      <p class='secT'>交易号:{{item.dealId}}</p>
                    </div>
                    <div>
                      <p class='firstT' style='color:#f90;'>申购中</p>
                    </div>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <p style='color:green;'>购入</p>
                      </li>
                      <li>
                        <p class='secT'>产品期限：{{item.proData}}</p>
                        <p class='secT'>到期时间：{{item.expireDate | dateFilter}}</p>
                      </li>
                      <li>
                        <p class='secT'>{{item.estAmount}}</p>
                        <p class='secT'>预估收益(元)</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class='record'>
                  <div>
                    <div>
                      <p class='firstT'>卖出金额:<span style='color:red;'>{{homeData.data.totalAssets}}</span>元</p>
                      <p class='secT'>交易号:{{item.dealId}}</p>
                    </div>
                    <div>
                      <p class='firstT' style='color:#f90;'>已完成</p>
                    </div>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <p style='color:green;'>卖出</p>
                      </li>
                      <li>
                        <p class='secT'>卖出方式：提现</p>
                        <p class='secT'>卖出时间：{{item.expireDate | dateFilter}}</p>
                      </li>
                      <li>
                        <p class='secT'>{{item.estAmount}}</p>
                        <p class='secT'>预估收益(元)</p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div style='height:200px;'></div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div class='cecBox' v-for='item in homeData.data.dealArr'>
              <ul>
                <!--分享收益-->
                <li class='record'>
                  <div style='border-bottom:1px solid gray;'>
                    <div>
                      <p class='firstT'>投资金额:<span style='color:red;'>{{homeData.data.totalAssets}}</span>元</p>
                      <p class='secT'>交易号:{{item.dealId}}</p>
                    </div>
                    <div>
                      <p class='firstT' style='color:#f90;'>收益中</p>
                    </div>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <p class='secT'>投资方：王先生</p>
                        <p class='secT'>到期时间:02-24 12:00:00</p>
                      </li>
                      <li>
                        <p class='secT'>第8代</p>
                        <p style='color:#f90;font-size:18px;'>1,254.85</p>
                        <p class='secT'>预估收益(元)</p>
                      </li>
                    </ul>
                  </div>
                  <div style='border-top:1px solid gray;'>
                    <p class='secT'>此份收益将在<span style='color:#000;'>05-21 12:00:00</span>后可提取，若认购方违约此份收益将无效。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div style='height:200px;'></div>
          </mt-tab-container-item>
        </mt-tab-container>
   </div>   
</template>
<script>
import {Button,Cell,Navbar, TabItem} from 'mint-ui'
export default {
  name: "app-home",
  data() {
    return {
      busOrInvitation:0,
      selected:'1',
      loginData:this.$store.state.loginData,
      uInfo:false,//判断是否有用户信息
      homeData:{
        type:null,
        data:{
          totalAssets:null,
          balance:null,
          yesEarnings:null,
          addEarnings:null,
          invitation:{
            num:null,
            isCode:null,
            invUser:null,
            money:null,
            invDate:null
          },
          dealArr:[
            {
              invAmount:null,
              dealId:null,
              statusCode:null,
              expireDate:null,
              proData:null,
              estAmount:null
            },
            {
              saleAmount:null,
              dealId:null,
              statusCode:null,
              expireDate:null,
              saleType:null,
              reaAmount:null
            }
          ]
        }
      }
    };
  },created(){

    if(!sessionStorage.getItem('email'))
    {
      this.uInfo=false;
      return;
    }

    this.getHomeData();
  },
  methods:{
    jumpToDet(){
      this.$router.push('/details');
    },
    toSale(){
      this.$router.push('/sale');
    },
    toBuy(){
      this.$router.push('/buy');
    },
    getHomeData(){
      console.log(this.$store.state);
        let url = sessionStorage.getItem('serverIp')+"/home";
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
div.mInfo{
  background:#1E90FF;
  padding:40px 20px;
}
.mInfo .tInfo{
  background:#fff;
  border-radius:5%;
  padding:20px 20px;
}
.tInfo>ul>li{
  display:flex;
  padding:10px 0;
}
.tInfo>ul>li:nth-child(1){
  flex-direction:column;
  align-items:start;
  border-bottom:1px solid gray;
}
.tInfo>ul>li:nth-child(2){
  border-bottom:1px solid gray;
}
.tInfo>ul>li:nth-child(2),.tInfo>ul>li:nth-child(3){
  flex-direction:row;
  justify-content:space-between;
}

.mInfo .infoTitle{
  color:gray;
  fontsize:14px;
}
.mInfo .infoDet{
  font-weight:bold;
}
.tInfo>ul>li:nth-child(1) p:nth-child(2){
  color:#000;
  font-size:22px;
}
.tInfo>ul>li:nth-child(2) div p:nth-child(2),.tInfo>ul>li:nth-child(3) div p:nth-child(2){
  color:#000;
  font-size:18px;
}
.tInfo>ul>li:nth-child(3) div{
  display:flex;
  flex-direction:column;
  align-items:start;
}
.tInfo>ul>li:nth-child(3) div:nth-child(1) p:nth-child(2){
  color:#0c0;
}
.tInfo>ul>li:nth-child(3) div:nth-child(2) p:nth-child(2){
  color:#f00;
}

.mint-cell-title{
  display:flex;
  justify-content:start;
  align-items:center;
}
.asset .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.asset .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(45deg);
}

ul.checked{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}


.cecBox ul{
  padding:10px 10px;
}
.cecBox>ul>li{
  margin-bottom:15px;
}

.cecBox{
  background:#fff;
}
.record{
  display:flex;
  flex-direction:column;
}
.record div:nth-child(1){
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.record div:nth-child(1) div:nth-child(1){
  display:flex;
  flex-direction:column;
  align-items:start;
}
.record div:nth-child(2) ul{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
}
.app-home .firstT{
  font-size:21px;
  color:#000;
}
.app-home .secT{
  color:gray;
  font-size:14px;
}
</style>
