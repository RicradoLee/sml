<template>
  <div class="hello">
    <router-link to="/login">点此前往登陆页</router-link><br>
    <router-link to="/reg">点此前往注册页</router-link><br>
    <router-link to="/index">点此前往首页</router-link><br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {
    sessionStorage.setItem('serverIp','http://172.163.8.212:3001');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  font-size: 0.3rem;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
