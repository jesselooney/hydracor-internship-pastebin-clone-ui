<template>
  <textarea v-model="text"></textarea>
  <button @click="$emit('save', text)">Save</button>
</template>

<script>
export default {
  name: "App",
  props: ["initialText"],
  data() {
    return {
      text: "",
    };
  },
  watch: {
    initialText() {
      this.text = this.initialText;
    },
  },
};
</script>
