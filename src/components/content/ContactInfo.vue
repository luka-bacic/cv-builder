<template>
  <div class="info smaller">
    <h2 v-if="address || phone || email || linkedIn || github">
      Info
    </h2>

    <div v-if="phone">
      <h3>Phone</h3>
      <p class="info__phone">{{ phone }}</p>
    </div>

    <div v-if="email">
      <h3>Email</h3>
      <a :href="`mailto:${email}`" class="info__email">{{ email }}</a>
    </div>

    <div v-if="address">
      <h3>Address</h3>
      <p>{{ address }}</p>
    </div>

    <div v-if="linkedIn">
      <h3>LinkedIn</h3>
      <a :href="linkedIn" class="info__linkedin">
        {{ this.stripUrl(linkedIn) }}
      </a>
    </div>

    <div v-if="github">
      <h3>GitHub</h3>
      <a :href="github" class="info__github">
        {{ this.stripUrl(github) }}
      </a>
    </div>
  </div>
</template>

<script>
import { validateUrl } from '../../assets/js/helpers';

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
    linkedIn: {
      type: String,
      validator(value) {
        return validateUrl(value, 'your LinkedIn profile');
      },
    },
    github: {
      type: String,
      validator(value) {
        return validateUrl(value, 'your GitHub profile');
      },
    },
  },
  methods: {
    // Strips URL protocol and `www.`
    stripUrl(url) {
      return url.replace(/^https?:\/\/|www./gi, '');
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  &__email,
  &__linkedin,
  &__github {
    letter-spacing: 0.01rem;
  }

  &__phone {
    letter-spacing: 0.1rem;
  }
}
</style>
