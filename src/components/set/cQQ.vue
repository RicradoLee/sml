<template>
    <div class="cQQ">
        <!-- 修改QQ -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        手机号
                    </label>
                    <input type="password" placeholder="手机号" v-model="cQQ.data.phone">
                    <a href="#" class="ui-icon-close" @click="clearPhone">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        验证码
                    </label>
                    <input type="password" placeholder="6位验证码" v-model="cQQ.data.auth">
                    <a href="#" class="ui-icon-close" @click="clearAuth">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        QQ
                    </label>
                    <input type="password" placeholder="QQ号" v-model="cQQ.data.QQ">
                    <a href="#" class="ui-icon-close" @click="clearQQ">
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
      cQQ: {
        type: 1200,
        data: {
          user: null,
          token: null,
          phone: null,
          auth:null,
          QQ:null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    checkAndSend() {
        let url = "http://192.168.199.101:3001/cQQ";
        this.axios.post(
            url,
            this.qs.stringify(this.cQQ),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 1201 && res.data.msg == "change succeed"){
                Toast({
                    message:"修改成功",
                    iconClass:"icon icon-success"
                });
            }
        }); 
    },
    clearPhone() {
      this.cQQ.data.phone = null;
    },
    clearAuth() {
      this.cQQ.data.auth = null;
    },
    clearQQ() {
      this.cQQ.data.QQ = null;
    }
  }
};
</script>
<style lang="less">
</style>
