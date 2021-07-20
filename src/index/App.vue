<template>
  <h1>Your pastes</h1>
  <ul class="pastes">
    <paste
      @delete="handleDelete"
      v-for="paste in pastes"
      :key="paste.id"
      :id="paste.id"
      :text="paste.text"
    />
  </ul>
  <a href="/new" class="button">New Paste</a>
</template>

<script>
import Paste from "@/components/Paste.vue";
import { getTokenOrRedirect } from "@/auth.js";
import { getPastes, deletePaste } from "@/api.js";

const token = getTokenOrRedirect();

export default {
  name: "App",
  components: {
    Paste,
  },
  data() {
    return {
      pastes: [],
    };
  },
  created() {
    this.loadPastes();
  },
  methods: {
    async handleDelete(id) {
      await deletePaste(token, id);
      this.loadPastes();
    },
    async loadPastes() {
      const response = await getPastes(token);
      this.pastes = response?.data?.pastes;
    },
  },
};
</script>
