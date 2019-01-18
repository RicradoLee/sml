<template>
    <div class="mySup">
        <!-- 我的团队 -->

        <div class="ui-form ui-border-t" >
            <form action="">
                <div class="ui-form-item ui-form-item-link ui-border-b"  v-for="(item,i) of jsonP[num]">
                    <label>
                        {{item}}
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
        num:0,
      jsonP: [{
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }],
      getTeam: {
        type: 800,
        data: {
          user: null,
          token: null
        }
      }
    };
  },
  created() {
      var URL = window.location.href;
      let v =  URL.slice(
          URL.indexOf('page')+4,
          URL.indexOf('page')+5
      );
      console.log(v);
      this.num = v;
  },
  watch: {},
  methods: {
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
