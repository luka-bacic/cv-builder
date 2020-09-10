<template>
  <div class="history">
    <h2>Employment history</h2>

    <div v-for="(item, i) in jobs" :key="i" class="history__employment">
      <div class="item-heading">
        <h4>{{ item.position }}{{ item.company && `, ${item.company}` }}</h4>
        <div class="item-city">{{ item.city }}</div>
      </div>

      <div class="item-date">{{ item.date }}</div>

      <ul class="history__duties">
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
    jobs: {
      type: Array,
      required: true,
      default() {
        return [
          {
            position: 'Captain',
            company: 'Overwatch',
            city: 'Bern',
            date: 'November 2030 — January 2050',
            duties: ['Second in command', 'Sharpshooter'],
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
