<template>
    <section 
        class="home-head" 
        :style="{backgroundImage: 'url(' + activeBackground + ')'}"
        >
        <div class="container home-container">
            <header class="header"> 
                <img class="main-logo" src="../assets/img/main-logo.png" alt="logo">
                <ul class="header-menu">
                    <li class="header-item" @click="$emit('goTo','services')">services</li>
                    <li class="header-item" @click="$emit('goTo','ourClients')">our clients</li>
                    <li class="header-item" @click="$emit('goTo','contacts')">contacts</li>
                </ul>
                <Slide class="mob-menu" right>
                    <span class="header-item" @click="$emit('goTo','services')">services</span>
                    <span class="header-item" @click="$emit('goTo','ourClients')">our clients</span>
                    <span class="header-item" @click="$emit('goTo','contacts')">contacts</span>
                </Slide>
            </header>
            <div class="home-main">
                <transition name="fade">
                    <div class="who-are-we" v-if="activeWho">
                        <h2 class="home-title">who we are</h2>
                        <p class="home-text">
                            We are the relationship marketing agency. It means we are here to bring your brands closer to your consumers.  Looking for the intersections where brands 
                            meet consumer needs. Choosing moments when attention aperture is wide enough to let our message in. 
                        </p>
                        <p class="home-text">
                            Leading to the shortest path to purchase. <br>
                            Creating retention aura to make them stay. 
                        </p>
                        <div class="who-arrow" @click="aboutUs">
                            &#10093;
                        </div>
                    </div>                
                </transition>
                <transition name="fade">
                    <div class="our-story" v-if="!activeWho">
                        <h2 class="home-title">our story</h2>
                        <p class="home-text">
                            We are the relationship marketing agency. It means we are here to bring your brands closer to your consumers.  Looking for the intersections where brands 
                            meet consumer needs. Choosing moments when attention aperture is wide enough to let our message in. 
                        </p>
                        <p class="home-text">
                            Leading to the shortest path to purchase. <br>
                            Creating retention aura to make them stay. 
                        </p>
                        <div class="our-arrow" @click="aboutUs">
                            &#10092;
                        </div>
                    </div>
                </transition>
            </div>
            <div class="home-footer" :class="{hidden : !activeWho}">
                <span 
                    class="home-country"
                    v-for="country in countries"
                    :key="country.id"
                    :class="{active : country.isActive}"
                    @click='choseCountry(country)'
                    >
                    {{ country.name }}
                </span>
            </div>
        </div>
    </section>
</template>

<script>

import bg1 from '../assets/img/ukraine-bg.jpg';
import bg2 from '../assets/img/kazakhstan-bg.jpg';
import bg3 from '../assets/img/armenia-bg.jpg';
import bg4 from '../assets/img/azerbaijan-bg.jpg';
import bg5 from '../assets/img/georgia-bg.jpg';
import bg6 from '../assets/img/our-story-bg.jpg';
import { Slide } from 'vue-burger-menu';

export default {
    components: {
        Slide
    },
    data: () =>  ({
        countries: [
            {
                'id': 1,
                'name': 'Ukraine',
                'isActive': true,
                'bg': bg1
            },
            {
                'id': 2,
                'name': 'Kazakhstan',
                'isActive': false,
                'bg': bg2
            },
            {
                'id': 3,
                'name': 'Armenia',
                'isActive': false,
                'bg': bg3
            },
            {
                'id': 4,
                'name': 'Azerbaijan',
                'isActive': false,
                'bg': bg4
            },
            {
                'id': 5,
                'name': 'Georgia',
                'isActive': false,
                'bg': bg5
            },                        
        ],
        activeBackground: bg1,
        activeWho: true
    }),
    methods: {
        choseCountry(country) {
            const countries = this.countries;
            for(let i = 0; i < countries.length; i++) {
                
                if(country.name == countries[i].name) {
                    countries[i].isActive = true;
                    this.activeBackground = countries[i].bg;
                } else {
                    countries[i].isActive = false;
                }
            }
            console.log(country);
            // console.log(this.countries);
        },
        aboutUs() {
            this.activeWho = !this.activeWho;
            if(!this.activeWho) {
                this.activeBackground = bg6;
            } else {
                let arr = this.countries.filter((item) => {
                    return item.isActive;
                });
                this.activeBackground = arr[0].bg;
            }
        }
    }
}
</script>