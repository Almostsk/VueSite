import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    scrollMeTo(refName) {
      // var element = this.$refs[refName];
      // var top = element.offsetTop;
  
      // window.scrollTo(0, top);
      console.log('dsfdsf');
    }
  },
  actions: {
    scrollMeTo() {
      console.log('fdgfdg');
      // ref.commit('scrollMeTo')
    }
  }
})
