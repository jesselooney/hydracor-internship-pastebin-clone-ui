<template>
  <strong>{{ email }}</strong>
  <button @click="handleLogout" class="icon button-clear">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
  </button>
</template>

<script>
import { getTokenOrRedirect } from "@/auth.js";
import { getUser } from "@/api.js";

const token = getTokenOrRedirect();

export default {
  name: "UserHeader",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async handleLogout() {
      localStorage.setItem("token", "");
      window.location.href = "/login";
    },
  },
  async created() {
    const response = await getUser(token);
    this.email = response?.data?.user?.email;
  },
};
</script>
