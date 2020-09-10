<template>
  <div class="education">
    <h2>Education</h2>

    <div v-for="(item, i) in schools" :key="i" class="education__school">
      <div class="item-heading">
        <h4>{{ item.degree }}, {{ item.institution }}</h4>

        <div class="item-city">
          {{ item.city }}
        </div>
      </div>

      <div class="item-date">
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
      default() {
        return [
          {
            degree: 'Ranged combat',
            institution: 'Military school',
            city: 'Cairo',
            date: 'September 2025 — June 2030',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.education {
}
</style>
