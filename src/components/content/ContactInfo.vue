<template>
  <div class="info smaller">
    <h2>Info</h2>

    <h3>Address</h3>
    <p>{{ address }}</p>

    <h3>Phone</h3>
    <p class="info__phone">{{ phone }}</p>

    <h3>Email</h3>
    <p class="info__email">{{ email }}</p>
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
.info {
  p {
    // font-size: 0.8rem;
  }

  &__email {
    letter-spacing: 0.05rem;
  }

  &__phone {
    letter-spacing: 0.1rem;
  }
}
</style>
