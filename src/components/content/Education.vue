<template>
  <div class="education">
    <h2>Education</h2>
    <div v-for="(item, i) in schools" :key="i">
      <div class="education__top">
        <h4 class="education__degree">
          {{ item.degree }}, {{ item.institution }}
        </h4>
        <div class="education__city">
          {{ item.city }}
        </div>
      </div>
      <div class="education__date">
        {{ item.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schools: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.education {
  &:first-of-type {
    h4 {
      margin-top: 0;
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
}
</style>
