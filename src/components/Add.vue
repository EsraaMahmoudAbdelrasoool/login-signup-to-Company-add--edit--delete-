<template>
  <Header />
  <h1>Hello ,welcome to Add page</h1>
  <form class="add">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="company.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter address"
      v-model="company.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter contact"
      v-model="company.contact"
      name="contact"
    />
    <button type="button" @click="addcompany">Add New Company</button>
  </form>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      company: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addcompany() {
      console.warn(this.company);
      const result = await axios.post("http://localhost:3000/companies", {
        name: this.company.name,
        address: this.company.address,
        contact: this.company.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
      console.warn("result", result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>
