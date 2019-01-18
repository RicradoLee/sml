<template>
    <div class="appLeavrMsg">

        <!-- <h1>留言</h1> -->
        <div class="header">
            <p class="pa t10 l10">交易号：{{busId}}</p>
            <p class="pa t15 l10">投诉类型：XXXXX</p>
            <p class="pa t20 l10">发起人:yonghum</p>
            <p class="pa t25 l10">发起时间:1/1 15：49:40</p>
        </div>

        <p class="pa t38 l15">留言:</p>
        <input type="text" class="ly pa tr t47 l60">

        <p class="pa t50 l15">凭证:</p>
        <input type="file" class="cnmm pa tr t l70">



        <button class="ui-btn-lg ui-btn-primary sendClass pa b8 l0">
            提交
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
.appLeavrMsg{
    width: 100%;
    height: 10rem;
    background: #ffffff;
    .header{
        width: 100%;
        height: 2.5rem;
        background: #00ff00;
    }
}
</style>
