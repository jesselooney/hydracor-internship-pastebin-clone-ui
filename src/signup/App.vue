<template>
  <user-auth-form
    title="Sign up"
    alt-title="Log in"
    alt-url="/login"
    @submit="handleSubmit"
  />
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
import { signup } from "@/api.js";

export default {
  name: "App",
  components: {
    UserAuthForm,
  },
  methods: {
    async handleSubmit(credentials) {
      await signup(credentials);
      window.location.href = "/login";
    },
  },
};
</script>
