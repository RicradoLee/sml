<template>
    <div class="app-myInvCode">
        <!--顶部页面提示-->
        <div class='mui-row invCode'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>邀请码</span>
                </div>
            </div>
        </div>
        <!-- 获取邀请码 -->
        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        邀请码
                    </label>
                    <p style="margin-left:10px;">{{invCode}}</p>
                </div>

                <div class="yeluosen">
                    <button type="button" 
                    v-clipboard:copy="invCode"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">复制</button>
                </div>

            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      invCode: 456467781,
      getInv: {
        type: 700,
        data: {
          user: null,
          toke: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    onCopy: function (e) {
      console.log('复制成功！');
      console.log(e.text);
    },
    onError: function (e) {
      console.log('复制失败！')
    },
    backToOld(){
      this.$router.go(-1);
    },
    getInvCode(){
        let url = sessionStorage.getItem('serverIp')+"/getInvCode";
        this.axios.post(
            url,
            this.qs.stringify(this.getInv),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 701){
                this.invCode = res.data.data.invCode;
            }
        });
    }
  }
};
</script>
<style lang="less">
.invCode .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.invCode .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.invCode .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.invCode .back span:nth-child(1){
  margin-left:5%;
}
.invCode .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
