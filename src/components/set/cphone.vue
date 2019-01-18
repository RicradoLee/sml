<template>
    <div class="cPhone">
        <!-- 修改手机号 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        原手机号
                    </label>
                    <input type="password" placeholder="原手机号" v-model="cPhone.data.pastPhone">
                    <a href="#" class="ui-icon-close" @click="clearPastPhone">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        验证码
                    </label>
                    <input type="password" placeholder="6位验证码" v-model="cPhone.data.pastAuth">
                    <a href="#" class="ui-icon-close" @click="clearPastAuth">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        新手机号
                    </label>
                    <input type="password" placeholder="新收款账号" v-model="cPhone.data.newPhone">
                    <a href="#" class="ui-icon-close" @click="clearNewPhone">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        验证码
                    </label>
                    <input type="password" placeholder="验证码" v-model="cPhone.data.newAuth">
                    <a href="#" class="ui-icon-close" @click="clearNewAuth">
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
      cPhone: {
        type: 1100,
        data: {
          user: null,
          token: null,
          pastPhone: null,
          pastAuth: null,
          newPhone:null,
          newAuth: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    checkAndSend() {
        let url = "http://192.168.199.101:3001/cPhone";
        this.axios.post(
            url,
            this.qs.stringify(this.cPhone),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 1101 && res.data.msg == "change succeed"){
                Toast({
                    message:"修改成功",
                    iconClass:"icon icon-success"
                });
            }
        }); 
    },
    clearPastPhone() {
      this.cPhone.data.pastPhone = null;
    },
    clearPastAuth() {
      this.cPhone.data.pastAuth = null;
    },
    clearNewPhone() {
      this.cPhone.data.newPhone = null;
    },
    clearNewAuth() {
      this.cPhone.data.newAuth = null;
    }
  }
};
</script>
<style lang="less">
</style>
