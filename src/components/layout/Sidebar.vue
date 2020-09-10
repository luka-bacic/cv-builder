<template>
  <aside class="sidebar ">
    <div class="sidebar__bgcolor"></div>
    <div class="sidebar__content">
      <ContactInfo
        :address="address"
        :phone="phone"
        :email="email"
        :linkedIn="linkedIn"
        :github="github"
      />
      <SkillGroup title="Skills" :skills="skills" />
      <SkillGroup title="Languages" :skills="languages" />
      <Hobbies :hobbies="hobbies" />
    </div>
  </aside>
</template>

<script>
import ContactInfo from '../content/ContactInfo';
import SkillGroup from '../reusable/SkillGroup';
import Hobbies from '../content/Hobbies';
import {
  address,
  phone,
  email,
  linkedIn,
  github,
  skills,
  languages,
  hobbies,
} from '../../data';

export default {
  components: {
    ContactInfo,
    SkillGroup,
    Hobbies,
  },

  data() {
    return {
      address: address,
      phone: phone,
      email: email,
      skills: skills,
      languages: languages,
      hobbies: hobbies,
      linkedIn: linkedIn,
      github: github,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex: 0 0 35%;
  padding-left: $pm;
  padding-right: $padding;
  padding-top: $header-size;

  &__content {
    position: relative;
    z-index: 10;

    > div {
      padding-top: 1.2rem;

      &:first-of-type {
        padding-top: 0;
      }
    }
  }

  &__bgcolor {
    background: c(sidebar);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 35%;
    z-index: 1;
  }

  @media print {
    &__bgcolor {
      background-color: unset;
      // 1000px is a random high number that is definitely larger than the box dimension
      box-shadow: inset 0 0 0 1000px c(sidebar);
    }

    &__content > div {
      page-break-inside: avoid;

      padding-top: $pm-sm;

      &:first-of-type {
        padding-top: 0;
      }
    }
  }
}
</style>
