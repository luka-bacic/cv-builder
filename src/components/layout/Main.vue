<template>
  <main class="main-content">
    <Summary :text="profileSummary" />
  </main>
</template>

<script>
import Summary from '../content/Summary';

import { profile } from '../../data';
export default {
  components: { Summary },
  data() {
    return {
      profileSummary: profile,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 0 0 70%;
  // border: 1px solid red;
  background: c(main);
  // margin-top: -$header-size;
  padding-top: $header-size;
  padding-left: $padding;
  padding-right: $pm-left;
}
</style>
