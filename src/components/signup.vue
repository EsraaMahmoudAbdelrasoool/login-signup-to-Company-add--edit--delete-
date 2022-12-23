<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      console.warn("signup", this.name, this.email, this.password);
      //axios
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>


