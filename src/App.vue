<template>
  <div id="app">
    <Header :name="name" :position="job" />
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

import { name, job } from './data';

export default {
  name: 'App',
  data() {
    return {
      name: name,
      job: job,
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
