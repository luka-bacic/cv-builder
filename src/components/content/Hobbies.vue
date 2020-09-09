<template>
  <div class="hobbies smaller">
    <h2>Hobbies</h2>

    <p>{{ hobbies }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hobbies: {
      type: String,
      required: true,
      default: 'Sleep-darting Genjies, healing Genjies, nano boosting Genjies',
    },
  },
};
</script>

<style lang="scss" scoped>
.hobbies {
  h2 {
    margin-top: 2rem;
  }
}
</style>
