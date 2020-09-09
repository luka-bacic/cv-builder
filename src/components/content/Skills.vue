<template>
  <div class="skill-group">
    <h2>Skills</h2>

    <div v-for="(item, i) in skills" :key="i" class="skill-group__skill">
      <p class="skill-group__skill-name">{{ item.name }}</p>

      <div class="skill-group__xp">
        <div
          v-for="(n, j) in parseInt(item.xp)"
          :key="j"
          class="skill-group__xp-circle"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
      default: function() {
        return [
          { name: '1st skill', xp: 5 },
          { name: '2nd skill', xp: 4 },
        ];
      },
      // validator: function(value) {
      //   value
      // },
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-group {
  h2 {
    margin-top: 2rem;
  }
  &__skill-name {
    margin-bottom: 0.5rem;
  }

  &__xp {
    display: flex;
    margin-bottom: 1rem;
  }

  &__xp-circle {
    $size: 10px;

    margin-right: $size;
    width: $size;
    height: $size;
    background: c('black');
    border-radius: $size;
  }
}
</style>
