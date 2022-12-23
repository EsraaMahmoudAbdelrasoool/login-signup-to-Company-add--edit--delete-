<template>
  <Header />
  <h1>Hello ,welcome to Update page</h1>
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
    <button type="button" @click="updatecompany">Update Company</button>
  </form>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Update",
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
    async updatecompany() {
      const result = await axios.put(
        "http://localhost:3000/companies/"+ this.$route.params.id,
        {
          name: this.company.name,
          address: this.company.address,
          contact: this.company.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signup" });
    }
    const result = await axios.get(
      "http://localhost:3000/companies/" + this.$route.params.id
    );
    this.company = result.data;
  },
};
</script>

