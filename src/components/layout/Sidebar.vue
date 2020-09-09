<template>
  <aside class="sidebar">
    <ContactInfo :address="address" :phone="phone" :email="email" />
    <Skills :skills="skills" />
  </aside>
</template>

<script>
import ContactInfo from '../content/ContactInfo';
import Skills from '../content/Skills';

export default {
  props: ['address', 'phone', 'email', 'skills'],

  components: {
    ContactInfo,
    Skills,
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

  @media print {
    background-color: unset;
    // 1000px is a random high number that is definitely larger than the box dimension
    box-shadow: inset 0 0 0 1000px c(sidebar);
  }
}
</style>
