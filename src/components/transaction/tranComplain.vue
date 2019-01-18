<template>
    <div class="appComplain">
        <!-- <h1>投诉详情</h1> -->
        <div class="header">
            <p>交易号：{{busId}}</p>
        </div>

        <div class="tbody pa tr t30 l50">
            <span class="pa tr t15 l15">投诉类型：</span>
            <select class="pa tr t15 l43">
                <option>XXXXXX</option>
                <option selected="">XXXXXX</option>
                <option>XXXXXX</option>
            </select>
            <br>
            <label class="pa tr t30 l17">联系方式QQ:</label><input type="text" class="pa tr t30 l58">
            <p class="pa t40 l5">凭证:</p>
            <input type="file" class="cnmm pa tr t60 l50">
            <p class="pa t70 l5">留言:</p>
            <input type="text" class="cnmm pa tr t75 l50">
        </div>

        <button class="ui-btn-lg ui-btn-primary sendClass pa b10 l0">
                上传
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
.appComplain{
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
