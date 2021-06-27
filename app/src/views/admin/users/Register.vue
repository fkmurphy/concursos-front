<template>
    <div>   
    <h1>Hola</h1>
    <form>
      <div class="form-group">
        <label for="email">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="details.name"
          placeholder="Enter name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="details.email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="details.password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="password_confirmation">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="password_confirmation"
          v-model="details.password_confirmation"
          placeholder="Confirm password"
        />
      </div>
      <button type="button" @click="register" class="btn btn-primary">
        Register
      </button>
    </form>
    </div>
</template>

<script>

export default {
  name: 'Register',
  data: function() {
    return {
      details: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  computed: {
    //...mapGetters(["errors"])
  },
  mounted() {
    //this.$store.commit("setErrors", {});
  },
  methods: {
    //...mapActions("auth", ["sendRegisterRequest"]),
    register: function() {
      this.sendRegisterRequest(this.details).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
