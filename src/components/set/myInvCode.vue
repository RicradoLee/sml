<template>
    <div class="myInvCode">
        <!-- 获取邀请码 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        邀请码
                    </label>
                    <p style="margin-left:10px;">{{invCode}}</p>
                </div>

                <!-- 复制功能暂时实现不了 -->
                <!-- <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary">
                        复制
                    </button>
                </div> -->

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
    getInvCode(){
        let url = "http://192.168.199.101:3001/getInvCode";
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
</style>
