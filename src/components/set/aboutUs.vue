<template>
    <div class="cPwd">

        <!-- 关于我们 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item  ui-border-b">
                    <label>
                        版本号
                    </label>
                    <p style="margin-left:10px;">{{vesion}}</p>
                </div>
                <div class="ui-form-item  ui-border-b">
                    <label>
                        联系我们：
                    </label>
                    <p style="margin-left:10px;">{{phone}}</p>
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
        vesion:"1.0.0",
        phone:189897897
    };
  },
  created() {},
  watch: {},
  methods: {

  }
};
</script>
<style lang="less">
</style>
