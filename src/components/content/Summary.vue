<template>
  <div class="summary">
    <h2>Profile</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default:
        "Ana's versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.",
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
}
</style>
