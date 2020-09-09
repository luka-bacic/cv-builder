<template>
  <aside class="sidebar ">
    <div class="sidebar__content">
      <ContactInfo :address="address" :phone="phone" :email="email" />
      <SkillGroup title="Skills" :skills="skills" />
      <SkillGroup title="Languages" :skills="languages" />
      <Hobbies />
    </div>
    <div class="sidebar__bgcolor"></div>
  </aside>
</template>

<script>
import ContactInfo from '../content/ContactInfo';
import SkillGroup from '../reusable/SkillGroup';
import Hobbies from '../content/Hobbies';
import { address, phone, email, skills, languages } from '../../data';

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
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex: 0 0 35%;
  padding-left: $pm-left;
  padding-right: $padding;
  padding-top: $header-size;

  &__content {
    position: relative;
    z-index: 10;
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
  }
}
</style>
