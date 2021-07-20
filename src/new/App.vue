<template>
  <h1>New paste</h1>
  <paste-detail @save="handleSave" initialText="" />
</template>

<script>
import { getTokenOrRedirect } from "@/auth.js";
import { addPaste } from "@/api.js";
import PasteDetail from "@/components/PasteDetail.vue";

const token = getTokenOrRedirect();

export default {
  name: "App",
  components: {
    PasteDetail,
  },
  methods: {
    async handleSave(text) {
      await addPaste(token, text);
      window.location.href = "/";
    },
  },
};
</script>
