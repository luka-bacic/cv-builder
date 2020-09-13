<template>
  <main class="main-content">
    <Summary :text="profileSummary" />
    <EmploymentHistory :jobs="workHistory" />
    <Volunteering :volunteering="volunteering" />
    <Education :schools="education" />
  </main>
</template>

<script>
import Summary from '../content/Summary';
import EmploymentHistory from '../content/EmploymentHistory';
import Volunteering from '../content/Volunteering';
import Education from '../content/Education';

import { profile, work, schools, volunteering } from '../../data';
export default {
  components: { Summary, EmploymentHistory, Volunteering, Education },
  data() {
    return {
      profileSummary: profile,
      workHistory: work,
      education: schools,
      volunteering: volunteering,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 0 0 65%;
  background: c(main);
  padding-top: $header-size;
  padding-left: $padding;
  padding-right: $pm;
}
</style>

<style lang="scss">
.main-content > div {
  padding-top: $pm-sm;

  &:first-of-type {
    padding-top: 0;
  }

  > div {
    &.education__school,
    &.history__employment,
    &.volunteer__xp {
      padding-top: 1.2rem;

      &:first-of-type {
        padding-top: 0;
      }
    }

    @media print {
      page-break-inside: avoid;

      &.education__school,
      &.history__employment,
      &.volunteer__xp {
        padding-top: $pm-sm;

        &:first-of-type {
          padding-top: 0;
        }
      }
    }
  }
}
</style>
