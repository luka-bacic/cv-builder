<template>
  <div id="app">
    <Header :name="name" :position="job" :photoName="pfp" />
    <Sidebar />
    <Main />
  </div>
</template>

<script>
// require('typeface-montserrat');
import 'sanitize.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Sidebar from './components/layout/Sidebar';

import { name, job, photoName } from './data';

export default {
  name: 'App',
  data() {
    return {
      name: name,
      job: job,
      pfp: photoName,
    };
  },
  components: { Main, Sidebar, Header },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
