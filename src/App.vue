<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    
    <router-view/>
    <!-- 底部导航栏 -->
    <footer>
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/index" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/middle"  >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">申资</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </footer>
    
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: "App",
  data() {
    return {
      screenWidth: window.innerWidth, //屏幕宽度
      screenHeight: window.innerHeight, // 屏幕尺寸
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
    jumpTo(e){
      console.log(111);
      console.log(e.target);
    },
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
      console.log(11);
    },
    toShare(){
      this.$router.push('/middle');
      console.log(22);
    },
    toSetting(){
      this.$router.push('/setting');
      console.log(33);
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
span.headmsg{
  font-family:'冬青黑体';
  font-size:18px !important;
}
.el-row {
  // margin-bottom: 20px;
}
.bg-purple-dark {
  background: #1E90FF;
}
.grid-content {
  min-height: 36px;
  font-size: 0.35rem;
  color: #fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
div.grid-content i:nth-child(1){
  margin-top:-6px;
}
div.grid-content i:nth-child(2){
  margin-top:-18px;
  font-size:15px;
}
.grid-content.user{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  min-height: 36px;
  color: #fff;
}
.grid-content.user i,.grid-content.user span{
  font-size: 20px;
}
.grid-content.user div>span:nth-child(1){
  margin-right:-8px;
}
.grid-content.user div>span:nth-child(2){
  margin-right:10px;
}

.row-bg {
  padding: 10px 0;
  background-color: #1E90FF;
}

</style>
