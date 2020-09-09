<template>
  <aside class="sidebar ">
    <ContactInfo :address="address" :phone="phone" :email="email" />
    <SkillGroup title="Skills" :skills="skills" />
    <SkillGroup title="Languages" :skills="languages" />
    <Hobbies />
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
  background: c(sidebar);
  padding-top: $header-size;

  @media print {
    background-color: unset;
    // 1000px is a random high number that is definitely larger than the box dimension
    box-shadow: inset 0 0 0 1000px c(sidebar);
  }
}
</style>
