<template>
  <div class="skill-group smaller">
    <h2>{{ title }}</h2>

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
    title: {
      type: String,
      required: true,
      default: 'Skill group title',
    },
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
    margin-top: 0;
  }
  &__skill-name {
    margin-bottom: 0.5rem;
    // word-break: break-word;
    // overflow-wrap: break-word;
    // white-space: pre-wrap;
  }

  &__xp {
    display: flex;
    margin-bottom: 1rem;
  }

  &__xp-circle {
    $size: 9px;

    margin-right: $size;
    width: $size;
    height: $size;
    background: c('black');
    border-radius: $size;

    &:last-of-type {
      margin: 0;
    }
  }

  @media print {
    &__xp-circle {
      background-color: unset;
      box-shadow: inset 0 0 0 50px c(black);
    }
  }
}
</style>
