<template>
  <div id="app">
    <Header :name="name" :position="job" />
    <Sidebar
      :address="address"
      :phone="phone"
      :email="email"
      :skills="skills"
    />
    <Main />
  </div>
</template>

<script>
import 'sanitize.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Sidebar from './components/layout/Sidebar';

import { name, job, address, phone, email, skills } from './data';

export default {
  name: 'App',
  data() {
    return {
      name: name,
      job: job,
      address: address,
      phone: phone,
      email: email,
      skills: skills,
    };
  },
  components: { Main, Sidebar, Header },
};
</script>

<style lang="scss" scoped>
#app {
  // font-family: sans-serif;

  font-family: 'Lato', sans-serif;

  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
