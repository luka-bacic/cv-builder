<template>
  <header class="header">
    <div class="header__wrap">
      <h1 class="header__name">{{ name }}</h1>
      <div class="header__position">{{ position }}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Ana Amari',
    },
    position: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  // flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $header-size;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: $padding;

    background: c(header);
    border: $border;
    width: 60vw;
  }
  &__name,
  &__position {
    margin: 0;
    // text-transform: uppercase;
  }
  &__position {
    // margin: 0;
  }
}
</style>
