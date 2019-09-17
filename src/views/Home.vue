<template>
  <div class="home">
    <HomeHead @goTo = "moveTo" />
    <Services id="services"/>
    <OurClients id="ourClients"/>
    <Contacts id="contacts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import Services from '@/components/Services.vue'
import OurClients from '@/components/OurClients.vue'
import Contacts from '@/components/Contacts.vue'
import { close } from 'fs';

export default {
  name: 'home-head',
  components: {
    HomeHead,
    Services,
    OurClients,
    Contacts
  },
  methods: {
    moveTo(el) {
      let comp = document.getElementById(el);
        let toTop = comp.offsetTop;

        comp.scrollIntoView()
      },

  }
}
</script>

