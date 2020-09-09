<template>
  <aside class="sidebar">
    <div class="sidebar__info">
      <h2 class="sidebar__title">Info</h2>

      <h3>Address</h3>
      <p>{{ address }}</p>

      <h3>Phone</h3>
      <p>{{ phone }}</p>

      <h3>Email</h3>
      <p>{{ email }}</p>
    </div>

    <div class="sidebar__skill-group">
      <h2 class="sidebar__title">Skills</h2>

      <div v-for="(item, i) in skills" :key="i" class="sidebar__skill">
        <p class="sidebar__skill-name">{{ item.name }}</p>

        <div class="sidebar__xp">
          <div
            v-for="(n, j) in parseInt(item.xp)"
            :key="j"
            class="sidebar__xp-circle"
          ></div>
        </div>
      </div>
    </div>
  </aside>
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
.sidebar {
  flex: 0 0 30%;
  padding-left: $pm-left;
  padding-right: $padding;
  background: c(sidebar);
  padding-top: $header-size;

  &__info {
  }

  &__title {
  }

  &__skill-group {
    h2 {
      margin-top: 2rem;
    }
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

  @media print {
    background-color: unset;
    // 1000px is a random high number that is definitely larger than the box dimension
    box-shadow: inset 0 0 0 1000px c(sidebar);
  }
}
</style>
