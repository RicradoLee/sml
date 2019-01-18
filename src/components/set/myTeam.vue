<template>
    <div class="mySup">
        <!-- 我的团队 -->

        <div class="ui-form ui-border-t" >
            <form action="">
                <div class="ui-form-item ui-form-item-link ui-border-b"  v-for="(item,i) of jsonP" @click="toIndexPage(i);">
                    <label>
                        第{{i}}级
                    </label>
                </div>
            </form>
        </div>


    </div>
</template>
<script>
export default {
  data() {
    return {
      jsonP: [{}, {}, {}, {}],
      getTeam: {
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
    toIndexPage(i) {
        this.$router.push('/setting/myTeam/team/?page' + i);
    },
    getTeam() {
      let url = "http://192.168.199.101:3001/getTeam";
      this.axios
        .post(url, this.qs.stringify(this.getSup), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.type == 801) {
            this.Sup = res.data.data.Sup;
          }
        });
    }
  }
};
</script>
<style lang="less">
</style>
