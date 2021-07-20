<template>
  <user-auth-form
    title="Log in"
    alt-title="Sign up"
    alt-url="/signup"
    @submit="handleSubmit"
  />
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm.vue";
import { login } from "@/api.js";
import { saveToken } from "@/auth.js";

export default {
  name: "App",
  components: {
    UserAuthForm,
  },
  methods: {
    async handleSubmit(credentials) {
      const response = await login(credentials);
      saveToken(response?.data?.token);
      window.location.href = "/";
    },
  },
};
</script>
