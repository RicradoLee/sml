<template>
    <div class="mySup">
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
    getInvCode(){
        let url = "http://192.168.199.101:3001/getSup";
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
</style>
