<template>
  <div class="references">
    <h2>References</h2>

    <div v-for="(item, i) in references" :key="i" class="references__item">
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
import { validateUrl, validateStr } from '../../assets/js/helpers';

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

        prop.forEach(item => {
          isValid = validateStr(item.name, "your reference's name");

          isValid = validateStr(item.company, "your reference's company name");

          isValid = validateUrl(
            item.companyLink,
            'the company site in your reference'
          );

          isValid = validateUrl(
            item.linkToPdf,
            'your letter of recommendation'
          );

          isValid = validateStr(item.company, "your reference's location");
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
