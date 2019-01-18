<template>
    <div class="appMiddle">
        <!-- 运行状态 -->
        
        <section class="ui-panel ui-panel-center ui-border-tb">
            <div class="ui-row-flex ui-whitespace">
                <div class="ui-col ui-col">运行中:{{middleData.data.service}}(台)</div>
            </div>
            <div class="ui-row-flex ui-whitespace">
                <div class="ui-col ui-col">已到期:{{middleData.data.haveExpired}}(台)</div>
            </div>
            <div class="ui-row-flex ui-whitespace">
                <div class="ui-col ui-col">可售出:{{middleData.data.canSale}}(台)</div>
            </div>
            <ul class="ui-row">
                <li class="ui-col ui-col-50">
                    <p>今日收益</p>
                    <p>{{middleData.data.todayAmount}}(元)</p>
                </li>
                <li class="ui-col ui-col-50">
                    <p>今日收益</p>
                    <p>{{middleData.data.myAmount}}(元)</p>
                </li>
            </ul>
        </section>



        <ul class="ui-list ui-list-link ui-list-single ui-border-tb mt40">
            <li>
                <div class="ui-list-info ui-border-t">
                    <h4 class="ui-nowrap">收益兑换</h4>
                </div>
            </li>
            <li>
                <div class="ui-list-info ui-border-t">
                    <h4 class="ui-nowrap">提取收益</h4>
                </div>
            </li>
        </ul>



        <!-- 订单详情 -->
        <section class="ui-panel ui-panel-center ui-border-tb mt20">
            <h2 class="ui-arrowlink">
                <span>订单详情</span>
            </h2>
            <div class="ui-row-flex ui-whitespace">
                <!-- 栅格布局 左1/3 -->
                <div class="ui-col">
                    <img src="static/img/@3x/收藏.png" class="indentImg">
                </div>
                <!-- 栅格布局 右2/3 -->
                <div class="ui-col ui-col-2">
                    <div class="ui-row-flex ui-whitespace ui-row-flex-ver">
                        <div class="ui-col">
                            <p>
                                <span class="pa tr t38 l41">编号：{{middleData.data.serviceForm[0].sId}}</span>
                                <span class="pa tr t38 l80">已收益</span>
                            </p>
                        </div>
                        <div class="ui-col">
                            <p>
                                <span class="pa tr t58 l41">{{middleData.data.serviceForm[0].slode}}</span>
                                <span class="pa tr t58 l80">{{middleData.data.serviceForm[0].haveAmount}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 栅格布局 100% -->
            <div class="ui-col">
                <p>
                    <span class="pa tr t87 l25">创建时间:{{middleData.data.serviceForm[0].createDate | dateFilter}}</span>
                    <span class="pa tr t87 r18">到期时间:{{middleData.data.serviceForm[0].delDate | dateFilter }}</span>
                </p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "appMiddle",
  data() {
    return {
        middle:null,
        middleData:{
            type:401,
            data:{
                service:18,
                haveExpired:12,
                canSale:10,
                todayAmount:226.00,
                myAmount:338.08,
                serviceForm:[
                    {
                        sId:9527,
                        slode:"运行中",
                        createDate:new Date(),
                        delDate:new Date(),
                        haveAmount:155
                    }
                ]
            }
        }
    };
  },created(){
    this.getMiddleData();
  },
  methods:{
    getMiddleData(){
        let url = "http://192.168.199.101:3001/middle";
        this.middle = this.$store.state.loginData;
        this.axios.post(
          url,
          this.qs.stringify(this.middle),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          this.middleData = res.data;
      });

    }
  }
};
</script>
<style lang="less">
#app #appMiddle .ui-panel{
    text-align: left;
}
.ui-nowrap {
  color: #000;
}
.ui-arrowlink {
  color: #000;
}
.ui-arrowlink:after {
  background: #ffffff;
}
.indentImg {
  width: 48px;
  height: 48px;
  text-align: left;
}
.clear {
  height: 5rem;
  width: 100%;
  background: #000;
}
.colorB {
  color: #000;
}
.ui-row-flex-ver .ui-col {
   height: 0.5rem;
}
.mt20{
    margin-top: 10%;
}
.r18{
    right: -18%;
}
</style>
