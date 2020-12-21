<template>
  <div class="references">
    <h2>References</h2>

    <div v-for="(item, i) in references" :key="i" class="references__school">
      <div class="item-heading">
        <h4>
          {{ item.name }} <span>from</span> &nbsp;
          <a :href="item.companyLink">{{ item.company }}</a>
        </h4>

        <div class="item-city">
          {{ item.location }}
        </div>
      </div>

      <div class="item-date">
        Letter of recommendation
        <a :href="item.linkToPdf">link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    references: {
      type: Array,
      required: true,
      default() {
        return [
          {
            name: 'Jack Morrison',
            company: 'Overwatch',
            companyLink: 'https://example.com',
            location: 'Bern',
            linkToPdf: 'https://example.com',
          },
        ];
      },
      validator(prop) {
        let isValid = true;
        const stringErr =
          'should be of type `string` in `References` component.';
        const linkErr = 'should be a valid URL in `References` component';
        const linkRegex = new RegExp(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        );

        prop.forEach(item => {
          if (typeof item.name !== 'string') {
            isValid = false;
            console.error(`\`name\` ${stringErr}`);
          }

          if (typeof item.company !== 'string') {
            isValid = false;
            console.error(`\`company\` ${stringErr}`);
          }

          if (!item.companyLink.match(linkRegex)) {
            isValid = false;
            console.error(`\`companyLink\` ${linkErr}`);
          }

          if (typeof item.location !== 'string') {
            isValid = false;
            console.error(`\`location\` ${stringErr}`);
          }

          if (!item.linkToPdf.match(linkRegex)) {
            isValid = false;
            console.error(`\`linkToPdf\` ${linkErr}`);
          }
        });

        return isValid;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.references {
  h4 {
    span {
      font-weight: 400;
    }
  }
}
</style>
