<template>
    <div class="appDeital">

        <!-- <h1>交易详情</h1> -->
        <div class="header">
            <p>
                <span>交易号：{{busId}}</span>
                <span>对方用户名：{{user}}</span>
            </p>
        </div>

        <div class="tbody pa tr t30 l50">
            <p class="pa t20 l5">金额：005454(元)</p>
            <p class="pa t30 l5">姓名：阿斯蒂芬打法</p>
            <p class="pa t40 l5">收款平台：微信</p>
            <p class="pa tr t20 l70">收款二维码：</p>
            <div class="ewm pa t35 l57">
                asdfasf
            </div>
        </div>

        <div class="list pa tr t60 l50">
            <p class="pa t5 l5">对方电话:</p>
            <p class="pa t20 l5">我的凭证:</p>
            <input type="file" class="cnmm pa tr t60 l50">

            <!-- <button class="ui-btn ui-btn-primary sendClass pa tr t20 l80">
                上传
            </button> -->
        </div>

        <div class="list pa tr t80 l50">
            <p class="pa t20 l5">对方凭证:</p>
            <input type="file" class="cnmm pa tr t60 l50">

            <!-- <button class="ui-btn ui-btn-primary sendClass pa tr t20 l80">
                上传
            </button> -->
        </div>

        
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
.appDeital{
    width: 100%;
    height: 10rem;
    background: #ffffff;
    .list{
        width: 100%;
        height: 1.5rem;
        background: #ff00ff;
        .cnmm{
            // width: 20%;
            // height: 20%;
        }
        .sendClass{
            width: 1rem;
            height: 1rem;
        }
    }
    .header{
        width: 100%;
        height: 1rem;
    }
    .tbody{
        width: 100%;
        height: 3rem;
        background: #00ff00;
        .ewm{
            width: 100px;
            height: 100px;
            background: #ffffff;
        }
    }
}
</style>
