<template>
  <div class="volunteer">
    <h2>Volunteering</h2>

    <div v-for="(item, i) in volunteering" :key="i" class="volunteer__xp">
      <div class="item-heading">
        <h4>{{ item.role }}{{ item.company && `, ${item.company}` }}</h4>
        <div class="item-city">{{ item.city }}</div>
      </div>

      <div class="item-date">{{ item.date }}</div>

      <ul class="volunteer__duties">
        <li v-for="(duty, j) in item.duties" :key="j">
          {{ duty }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    volunteering: {
      type: Array,
      required: true,
      default() {
        return [
          {
            role: 'Helping injured soldiers',
            company: 'Local hospital',
            city: 'Cairo',
            date: 'May 2023 — August 2025',
            duties: [
              'Sort donations',
              'Clean facility',
              'Greet and instruct customers',
            ],
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  &__duties {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
  }
}
</style>
