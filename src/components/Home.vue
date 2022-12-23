<template>
  <Header />
  <h1>Hello {{ name }},welcome to home page</h1>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Address</td>
      <td>contact</td>
      <td>Actions</td>
    </tr>

    <tr v-for="item in companies" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update/' + item.id"> Update</router-link>
        <button @click="deletecompany(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "", // to return the name of email اللي بيدخله اصلا
      companies: [],
    };
  },

  components: {
    Header,
  },
  methods: {
    async deletecompany(id) {
      let result = await axios.delete("http://localhost:3000/companies/" + id);
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name; // عشان يخزن الاسم اللي كاتبه في الايميل عشان يطلعه ويقوله hello
      if (!user) {
        this.$router.push({ name: "signup" });
      }
      // 1- define axios 2- let result
      let result = await axios.get("http://localhost:3000/companies");
      console.warn(result);
      this.companies = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
