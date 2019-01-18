<template>
    <div class="appTrade">

        <!-- <h1>交易纠纷</h1> -->
        <div class="header">
            <p class="pa t10 l10">交易号：{{busId}}</p>
            <p class="pa t15 l10">纠纷类型：超时未确认</p>
            <p class="pa t20 l10">投诉时间：2019.01.12</p>
            <p class="pa t25 l10">发起人:yonghum</p>
            <button class="ui-btn ui-btn-primary sendClass pa tr t20 l80 w30">
                撤销投诉
            </button>
        </div>

        <p>协商记录</p>

        <div class="tbody">
            
            <div class="ewm pa t40 l1">
                asdfasf
            </div>

            <p class="pa t41 l35">留言：xxxxxxxx</p>
            <p class="pa t51 l35">凭证:</p>
            <input type="file" class="cnmm pa tr t58 l80">
            
        </div>

        <div class="list">

            <div class="ewm2 pa t70 l1">
                asdfasf
            </div>

            <p class="pa t66 l45">系统</p>
            <p class="pa t70 l28">01/01 15:52:11</p>
            <p class="pa t75 l28">用户XXX于XXX发起投诉</p>
            <p class="pa t80 l28">请用户XXX在XXX时间前做出回应，若无回应判定此次投诉成功</p>
        </div>

        <button class="ui-btn-lg ui-btn-primary sendClass pa b8 l0">
            留言
        </button>

        
    </div>
</template>
<script>
export default {
    data(){
        return{
            busId:164567789713,
            user:"asdfsdf"
        }
    }    
}
</script>
<style lang="less">
.appTrade{
    width: 100%;
    height: 10rem;
    background: #ffffff;
    .header{
        width: 100%;
        height: 2.5rem;
        background: #00ff00;
    }
    .tbody{
        height: 100%;
        height: 2.5rem;
        background: #ff0000;
        .ewm{
            width: 100px;
            height: 100px;
            background: #ffffff;
        }
    }
    .list{
        .ewm2{
            width: 100px;
            height: 100px;
            background: #919191;
        }
    }
}
</style>
