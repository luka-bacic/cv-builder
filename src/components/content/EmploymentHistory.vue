<template>
  <div class="history">
    <h2>Employment history</h2>

    <div v-for="(item, i) in data" :key="i" class="history__employment">
      <div class="history__top">
        <h4>{{ item.position }}, {{ item.company }}</h4>
        <div class="history__city">{{ item.city }}</div>
      </div>

      <div class="history__date">{{ item.date }}</div>

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
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  &__employment {
    &:first-of-type {
      h4 {
        margin-top: 0;
      }
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin-bottom: 0;
    }
  }

  &__date,
  &__city {
    font-size: 0.9rem;
    font-weight: 300;
  }

  &__city {
    margin-left: 100px;
    flex-shrink: 0;
  }

  &__date {
    margin-top: 0.25rem;
  }

  &__duties {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
  }
}
</style>
