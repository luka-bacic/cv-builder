<template>
  <main class="main-content">
    <Summary :text="profileSummary" />
    <EmploymentHistory :data="workHistory" />
    <Education :schools="education" />
  </main>
</template>

<script>
import Summary from '../content/Summary';
import EmploymentHistory from '../content/EmploymentHistory';
import Education from '../content/Education';

import { profile, work, schools } from '../../data';
export default {
  components: { Summary, EmploymentHistory, Education },
  data() {
    return {
      profileSummary: profile,
      workHistory: work,
      education: schools,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 0 0 65%;
  // border: 1px solid red;
  background: c(main);
  // margin-top: -$header-size;
  padding-top: $header-size;
  padding-left: $padding;
  padding-right: $pm-left;
}
</style>
