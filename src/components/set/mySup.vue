<template>
    <div class="app-myInv">
        <!--顶部页面提示-->
        <div class='mui-row sup'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>邀请码</span>
                </div>
            </div>
        </div>
        <!-- 邀请人 -->
        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        邀请人
                    </label>
                    <p style="margin-left:10px;">{{Sup}}</p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      Sup: "Tom",
      getSup: {
        type: 800,
        data: {
          user: null,
          token: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
      backToOld(){
          this.$router.go(-1);
      },
    getInvCode(){
        let url = sessionStorage.getItem('serverIp')+"/getSup";
        this.axios.post(
            url,
            this.qs.stringify(this.getSup),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 801){
                this.Sup = res.data.data.Sup;
            }
        });
    }
  }
};
</script>
<style lang="less">
.sup .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.sup .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.sup .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.sup .back span:nth-child(1){
  margin-left:5%;
}
.sup .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
