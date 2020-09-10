<template>
  <header class="header">
    <div class="header__photo">
      <img
        src="https://i.picsum.photos/id/866/150/150.jpg?hmac=p6Qy476cgeZxVZMIFJmLW3x8SQSjGCkjzoPEKAKQ1Os"
        alt=""
      />
    </div>
    <div class="header__name-box">
      <h1 class="header__name">{{ name }}</h1>
      <p class="header__position">{{ position }}</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-size;
  position: absolute;
  top: 0;
  left: $pm;
  right: $pm;
  z-index: 10;

  &__photo {
    img {
      $size: 150px;
      width: $size - 10px;
      height: $size - 10px;
      border-radius: $size;
    }
  }

  &__name-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: $padding;
    width: calc(65vw - #{$pm} - #{$padding});
    background: c(header);
    border: $border;
    line-height: 1;
  }

  &__name,
  &__position {
    margin: 0;
  }

  &__position {
    text-transform: uppercase;
    margin-top: 1rem;
  }
}
</style>
