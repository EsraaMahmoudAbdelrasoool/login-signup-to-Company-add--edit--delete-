<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="add">Add page </router-link>
    <a @click="logout" href="#">Logout page</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  // to logout from the email use methods logout and put fun clear and router to match in page login to show
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
