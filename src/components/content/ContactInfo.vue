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
        const regex = new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/gim
        );

        const isValid = value.match(regex);

        if (!isValid) {
          console.error(
            'Please ensure the link for your LinkedIn profile is a valid URL. Check if it includes `https`'
          );
        }

        return isValid;
      },
    },
    github: {
      type: String,
      validator(value) {
        const regex = new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/gim
        );

        const isValid = value.match(regex);

        if (!isValid) {
          console.error(
            'Please ensure the link for your GitHub profile is a valid URL. Check if it includes `https`'
          );
        }

        return isValid;
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
