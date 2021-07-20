<template>
  <form @submit.prevent="$emit('submit', { email: email, password: password })">
    <h1>{{ title }}</h1>
    <label>
      Email
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="example@domain.com"
      />
    </label>
    <label>
      Password
      <input type="password" name="password" v-model="password" />
    </label>
    <button type="submit">{{ title }}</button>
    or
    <a class="button button-outline" :href="altUrl">{{ altTitle }}</a>
  </form>
</template>

<script>
export default {
  name: "UserAuthForm",
  props: ["title", "altTitle", "altUrl"],
  emits: ["submit"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
