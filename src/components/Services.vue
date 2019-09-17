<template>
    <section class="services" >
        <div class="container">
            <h2 class="services-title">services</h2>
            <swiper :options="swiperOptions" ref="servicesSlider" class="services-slider-desk">
                <swiper-slide
                   class="slider-container" 
                   v-for="(slide, index) in slides"
                   :key="slide.id"
                   >
                    <div ref="slider" class="slider-elements" v-on:mousemove="mouseOver($event, index)">
                        <div ref="rightTop" class="top-right" :style="{ 'background-image': 'url(' + slide.bg + ')' }">
                        </div>
                        <span ref="slideName" class="non-track left-text" v-html="slide.name">
                                <!-- {{ slide.name }} -->
                        </span>
                        <span class="slider-index"> 0{{ slide.id }} </span>
                        <div ref="topCenter" class="top-center" :style="{ 'background-image': 'url(' + slide.bg + ')' }">

                        </div>
                        <div ref="leftBottom" class="bottom-left" :style="{ 'background-image': 'url(' + slide.bg + ')' }">
                        </div>
                        <!-- <div ref="borderCenter" class="non-track border"></div> -->
                        <span @click="swiper.slidePrev()" class="non-track prev-slider-name" v-html="getPrevName(slides, index)"></span>
                        <span @click="swiper.slideNext()" class="non-track next-slider-name" > {{ getNextName(slides, index) }} </span>
                    </div>
                </swiper-slide>
            </swiper>  
             <!-- <swiper :options="swiperOptionsMob" ref="servicesSliderMob"  class="services-slider-mob">
                <swiper-slide
                   class="slider-container" 
                   v-for="(slide) in slides"
                   :key="slide.id"
                   > -->
                    <!-- <div ref="slider" class="slider-elements"> -->
                        <!-- <div  class="slider-mob-item" :style="{ 'background-image': 'url(' + slide.bg + ')' }"> -->
                        <!-- </div> -->
                        <!-- <span  class="non-track left-text" v-html="slide.name"> -->
                                <!-- {{ slide.name }} -->
                        <!-- </span> -->
                        <!-- <span class="slider-index"> 0{{ slide.id }} </span> -->
                        <!-- <span @click="swiper.slidePrev()" class="non-track prev-slider-name" v-html="getPrevName(slides, index)"></span> -->
                        <!-- <span @click="swiper.slideNext()" class="non-track next-slider-name" > {{ getNextName(slides, index) }} </span> -->
                    <!-- </div>
                </swiper-slide>
            </swiper>  -->
            <swiper :options="swiperOptionsMob" ref="servicesSliderMob"  class="services-slider-mob">
                <swiper-slide
                   class="slider-container slider-elements" 
                   v-for="(slide) in slides"
                   :key="slide.id"
                   >
                        <div  class="slider-mob-item" :style="{ 'background-image': 'url(' + slide.bg + ')' }">
                        </div>
                        <span  class="non-track left-text" v-html="slide.name">
                                <!-- {{ slide.name }} -->
                        </span>
                        <span class="slider-index"> 0{{ slide.id }} </span>
                        <!-- <span @click="swiper.slidePrev()" class="non-track prev-slider-name" v-html="getPrevName(slides, index)"></span> -->
                        <!-- <span @click="swiper.slideNext()" class="non-track next-slider-name" > {{ getNextName(slides, index) }} </span> -->
                </swiper-slide>
            </swiper> 
            <div class="slider-dots">
            </div>
            <div class="under-slider">
                <span class="arrow-left">
                    &#8592;
                </span>
                <span class="arrow-right">
                    &#8594;
                </span>
            </div>
        </div>
    </section>
</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import bg1 from '../assets/img/services/360.jpg';
import bg2 from '../assets/img/services/CRM.jpg';
import bg3 from '../assets/img/services/Consumer.jpg';
import bg4 from '../assets/img/services/Event.jpg';
import bg5 from '../assets/img/services/Cross-chanel.jpg';
import bg6 from '../assets/img/services/Digital.jpg';
import bg7 from '../assets/img/services/Acquisition.jpg';
import bg8 from '../assets/img/services/Trade.jpg';

export default {
    components: {
        swiper,
        swiperSlide
    },
    data: () => ({
        swiperOptions: {
            slidesPerView: 1,
            shortSwipes: false,
            longSwipes: false,
            allowTouchMove: false,
            followFinger: false,
            touchStartPreventDefault: false,
            preventClicks: false,
            preventClicksPropagation: false,
            simulateTouch: false,
            effect: 'flip',
            speed: 1000,
            navigation: {
                nextEl: '.arrow-right',
                prevEl: '.arrow-left'
            },
        },
        swiperOptionsMob : {
            slidesPerView: 1,
            effect: 'coverflow',
            autoHeight: false,
            height: 320,
            setWrapperSize: true,
            loop: true,
            navigation: {
                nextEl: '.arrow-right',
                prevEl: '.arrow-left'
            },
            pagination: {
                el: '.slider-dots',
                type: 'bullets',
                bulletClass: 'slider-dot',
                bulletActiveClass: 'slider-dot-active'
            }
            
        },
        sliderSize: {},
        center: {},
        slides: [
            {
                id: 1,
                name: '360&#176; strategy',
                bg: bg1
            },
            {
                id: 2,
                name: 'CRM/Direct marketing',
                bg: bg2
            },
            {
                id: 3,
                name: 'Consumer promo',
                bg: bg3
            },
            {
                id: 4,
                name: 'Event marketing',
                bg: bg4
            },
            {
                id: 5,
                name: 'Cross-chanel creative',
                bg: bg5
            },
            {
                id: 6,
                name: 'Digital',
                bg: bg6
            },
            {
                id: 7,
                name: 'Acquisition & Loyalty campaigns',
                bg: bg7
            },
            {
                id: 8,
                name: 'Trade marketing',
                bg: bg8
            },
        ]
    }),
    computed: {
        swiper() {
            return this.$refs.servicesSlider.swiper
        },
        swiperMob() {
            return this.$refs.servicesSliderMob.swiper
        }
    },
    methods: {
        mouseOver(event, id){
            // console.log(event);
            let sliderName = this.$refs.slideName[id];
            let centerBlock = this.$refs.topCenter[id];
            // let border = this.$refs.borderCenter[id];
            let leftBottom = this.$refs.leftBottom[id];
            let rightTop = this.$refs.rightTop[id];

            let x = event.offsetX,
                y = event.offsetY;

            let posX = Math.floor(x*100/this.sliderSize.width),
                posY = Math.floor(y*100/this.sliderSize.height);    

            
            if(event.target.classList[0] !== "non-track"  && event.target.classList[0] !== "services") {
                let posRight = 50 - posX/2,
                    posTop = posY/2; 

                    sliderName.style.transform= `translate(${posTop/5}%, ${posRight/5}%)`;
                if(posRight < 30) {
                    centerBlock.style.clipPath = `inset(${posTop}% ${posRight}% 15% ${100 - posRight -40}% )`;
                } else {
                    centerBlock.style.clipPath = `inset(${posTop}% ${posRight}% 15% 30% )`;
                    // leftBottom.style.clipPath = `inset(15% 35% ${Math.floor(Math.random() * 5)}% ${Math.floor(Math.random() * 3)}% )`;
                }
                leftBottom.style.clipPath = `inset(15% 35% ${Math.floor(posTop/10)}% ${Math.floor(posRight/10)}% )`;
                rightTop.style.clipPath = `inset(${Math.floor(posTop/10)}% ${Math.floor(posRight/10)}% 15% 30%)`;
                
                // border.style.top = `calc(${posTop}% - 3px)`;
                // border.style.right = `calc(${posRight}% - 3px)`;
            }  

            
                
        },
        getPrevName(slides, index) {
            return (slides[index - 1] == undefined ? '' :   slides[index - 1].name)
        },
        getNextName(slides, index) {
            return (slides[index + 1] == undefined ? '' :   slides[index + 1].name)
        }
    },
    mounted() {
        this.sliderSize.width = this.$refs.slider[0].clientWidth;
        this.sliderSize.height = this.$refs.slider[0].clientHeight;
        // this.center.x = window.innerWidth / 2;
        // this.center.y = window.innerHeight /2;
    
    }
}
</script>