<template>
  <main class="main-content">
    <Summary :text="profileSummary" />
    <EmploymentHistory :data="workHistory" />
  </main>
</template>

<script>
import Summary from '../content/Summary';
import EmploymentHistory from '../content/EmploymentHistory';

import { profile, work } from '../../data';
export default {
  components: { Summary, EmploymentHistory },
  data() {
    return {
      profileSummary: profile,
      workHistory: work,
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
