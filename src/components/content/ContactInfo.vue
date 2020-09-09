<template>
  <div class="info">
    <h2>Info</h2>

    <h3>Address</h3>
    <p>{{ address }}</p>

    <h3>Phone</h3>
    <p>{{ phone }}</p>

    <h3>Email</h3>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      required: true,
      default: '65 Main Street, Numbani, Nigeria',
    },
    phone: {
      type: String,
      required: true,
      default: '+61 444 555 666',
    },
    email: {
      type: String,
      required: true,
      default: 'ana.amari@overwatch.org',
    },
  },
};
</script>

<style lang="scss" scoped>
/* prettier-ignore */
</style>
