<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.register input,
.login input,
.add input {
  width: 200px;
  height: 50px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button,
.login button,
.add button {
  width: 220px;
  height: 50px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
