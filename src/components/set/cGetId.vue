<template>
    <div class="cGetId">
        <!-- 修改收款账号 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        手机号
                    </label>
                    <input type="password" placeholder="手机号" v-model="cGetId.data.phone">
                    <a href="#" class="ui-icon-close" @click="clearPhone">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        验证码
                    </label>
                    <input type="password" placeholder="6位验证码" v-model="cGetId.data.authToken">
                    <a href="#" class="ui-icon-close" @click="clearAuth">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        新收款账号
                    </label>
                    <input type="password" placeholder="新收款账号" v-model="cGetId.data.newGetId">
                    <a href="#" class="ui-icon-close" @click="clearGetId">
                    </a>
                </div>
                <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary" @click="checkAndSend">
                        修改
                    </button>
                </div>
            </form>
        </div>


    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
      againPwd: null,
      cGetId: {
        type: 700,
        data: {
          user: null,
          token: null,
          phone: null,
          newGetId: null,
          authToken:null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    checkAndSend() {
        let url = "http://192.168.199.101:3001/cGetId";
        this.axios.post(
            url,
            this.qs.stringify(this.cGetId),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 701 && res.data.msg == "change succeed"){
                Toast({
                    message:"修改成功",
                    iconClass:"icon icon-success"
                });
            }
        }); 
    },
    clearPhone() {
      this.cGetId.data.phone = null;
    },
    clearAuth() {
      this.cGetId.data.authToken = null;
    },
    clearGetId() {
      this.cGetId.data.newGetId = null;
    }
  }
};
</script>
<style lang="less">
</style>
