<template>
  <main class="main-content">
    <Summary :text="profileSummary" />
    <EmploymentHistory :jobs="workHistory" />
    <References :references="references" />
    <Volunteering :volunteering="volunteering" />
    <Education :schools="education" />
  </main>
</template>

<script>
import Summary from '../content/Summary';
import EmploymentHistory from '../content/EmploymentHistory';
import Volunteering from '../content/Volunteering';
import Education from '../content/Education';
import References from '../content/References';

import { profile, work, schools, volunteering, references } from '../../data';
export default {
  components: {
    Summary,
    EmploymentHistory,
    Volunteering,
    Education,
    References,
  },
  data() {
    return {
      profileSummary: profile,
      workHistory: work,
      education: schools,
      volunteering: volunteering,
      references: references,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  flex: 0 0 65%;
  background: c(main);
  padding-top: calc(#{$header-size} - 2vh);
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
    &.volunteer__xp,
    &.references__item {
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
