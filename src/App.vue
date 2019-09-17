<template>
  <div id="app">
    <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
      <router-view/>
    </vue-custom-scrollbar>  
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
const { detect } = require('detect-browser');
const browser = detect();

export default {
  components: {
    vueCustomScrollbar
  },
  data: () => ({
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .7,
        swipeEasing: true,

      }
  }),
  methods: {
    scrollHanle(evt) {

    }
  },
  created() {
    if (browser.name == 'ie') {
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
      this.$router.push('/browser-support');
    }
    if (browser.name == 'chrome') {
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
    }
  }
}
</script>

<style lang="scss">
  @import "~@/styles/main.scss";
</style>
