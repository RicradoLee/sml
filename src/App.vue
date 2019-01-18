<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <el-row>
      <el-col :span="24" class="w103">
        <div class="grid-content bg-purple-dark">
          首页
        </div>
      </el-col>
    </el-row>
    <router-view/>
    <!-- 底部导航栏 -->
    <footer>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark">
            <i class="el-icon-menu" @click="toMenu"></i>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark">
           <i class="el-icon-share" @click="toShare"></i>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark">
            <i class="el-icon-setting" @click="toSetting"></i>
          </div>
        </el-col>
      </el-row>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth, //屏幕宽度
      screenHeight: window.innerHeight // 屏幕尺寸
    };
  },
  created() {
    this.isCrosswise();
  },
  mounted() {
    const that = this;

    window.onresize = () => {
      return (() => {
        window.screenWidth = window.innerWidth;
        that.screenWidth = window.screenWidth;

        window.screenHeight = window.innerHeight;
        that.screenHeight = window.screenHeight;

        if (this.screenWidth > this.screenHeight) {
          alert(`请竖屏欣赏`);
        }

        var dpr, rem, scale;
        var docEl = document.documentElement;
        var fontEl = document.createElement("style");
        var metaEl = document.querySelector('meta[name="viewport"]');
        dpr = window.devicePixelRatio;
        rem = this.screenWidth * dpr / 10;
        // 设置data-dpr属性，留作的css hack之用
        docEl.setAttribute("data-dpr", dpr);
        // 动态写入样式
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";
        // 给js调用的，某一dpr下rem和px之间的转换函数

        window.rem2px = function(v) {
          v = parseFloat(v);
          return v * rem;
        };

        window.px2rem = function(v) {
          v = parseFloat(v);
          return v / rem;
        };

        window.dpr = dpr;
        window.rem = rem;
        
      })();
    };
  },
  beforeUpdate() {},
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
    },
    screenHeight(val) {
      this.screenHeight = val;
    }
  },
  computed: {},
  methods: {
    isCrosswise() {
      if (this.screenWidth > this.screenHeight) {
        alert(`请竖屏欣赏`);
      }
      var dpr, rem, scale;
      var docEl = document.documentElement;
      var fontEl = document.createElement("style");
      var metaEl = document.querySelector('meta[name="viewport"]');
      dpr = window.devicePixelRatio;
      rem = this.screenWidth * dpr / 10;
      // 设置data-dpr属性，留作的css hack之用
      docEl.setAttribute("data-dpr", dpr);
      // 动态写入样式
      docEl.firstElementChild.appendChild(fontEl);
      fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";
      // 给js调用的，某一dpr下rem和px之间的转换函数

      window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
      };

      window.px2rem = function(v) {
        v = parseFloat(v);
        return v / rem;
      };

      window.dpr = dpr;
      window.rem = rem;
    },
    toMenu(){
      this.$router.push('/index');
    },
    toShare(){
      this.$router.push('/middle');
    },
    toSetting(){
      this.$router.push('/setting');
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #fff;
}
@media screen and(min-width: 320px) and(max-width: 359px) {
  html #app {
    font-size: 12.8px !important;
  }
}
@media screen and(min-width: 360px) and(max-width: 374px) {
  html #app {
    font-size: 14.4px !important;
  }
}
@media screen and(min-width: 375px) and(max-width: 385px) {
  html #app {
    font-size: 15px !important;
  }
}
@media screen and(min-width: 386px) and(max-width: 392px) {
  html #app {
    font-size: 15.44px !important;
  }
}
@media screen and(min-width: 393px) and(max-width: 400px) {
  html #app {
    font-size: 16px !important;
  }
}
@media screen and(min-width: 401px) and(max-width: 414px) {
  html #app {
    font-size: 16.48px !important;
  }
}
@media screen and(min-width: 750px) and(max-width: 799px) {
  html #app {
    font-size: 30.72px !important;
  }
}
/*header*/
.el-row {
  // margin-bottom: 20px;
}
.bg-purple-dark {
  background: #ff9726;
}
.bg-purple {
  background: #ff9726;
}
.bg-purple-light {
  background: #ff9726;
}
.grid-content {
  min-height: 36px;
  font-size: 0.35rem;
  color: #fff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

/*底部样式修改*/
footer {
  position: fixed;
  bottom: 0%;
  left: 0%;
  width: 100%;
  .el-row {
    margin-bottom: 0px;
    .grid-content {
      min-height: 45px;
      font-size: 0.35rem;
      margin-top: 50%;
      i {
        line-height: 2;
      }
    }
    .grid-content:hover {
      background: #ffffff;
      i {
        color: #ff9726;
      }
    }
  }
}
</style>
