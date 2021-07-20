<template>
  <h1>Edit paste</h1>
  <paste-detail @save="handleSave" :initialText="text" />
</template>

<script>
import { getTokenOrRedirect } from "@/auth.js";
import { getPaste, editPaste } from "@/api.js";
import PasteDetail from "@/components/PasteDetail.vue";

const token = getTokenOrRedirect();

export default {
  name: "App",
  components: {
    PasteDetail,
  },
  data() {
    return {
      id: "",
      text: "",
    };
  },
  created() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    this.id = urlSearchParams.get("id");
    this.loadPaste();
  },
  methods: {
    async loadPaste() {
      const response = await getPaste(token, this.id);
      this.text = response?.data?.paste?.text;
    },
    async handleSave(newText) {
      await editPaste(token, this.id, newText);
      window.location.href = "/";
    },
  },
};
</script>
