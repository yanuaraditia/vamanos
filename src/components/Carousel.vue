<template>
    <b-carousel
      id="carousel-1"
      fade
      v-model="slide"
      :interval="4000"
      indicators
      img-width="600"
      img-height="600"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <b-carousel-slide :img-src="`/front/front-${pengurus.id}.png`" v-for="pengurus in penguruses" :key="pengurus.id">
            <h5 class="text-primary f-2">{{pengurus.user.name}}</h5>
            <span>{{pengurus.name}}</span>
        </b-carousel-slide>
    </b-carousel>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                slide: 0,
                sliding: null,
                isLoaded : false,
                penguruses : []
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            },
            loadPengurus() {
                if(localStorage.penguruses) {
                    this.penguruses = JSON.parse(localStorage.penguruses)
                    this.isLoaded = true
                }
                axios.get('https://dev.imaka.or.id/api/pengurus')
                .then(res => {
                    this.penguruses = res.data.data
                    localStorage.penguruses = JSON.stringify(this.penguruses)
                    this.isLoaded = true
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.loadPengurus()
        }
    }
</script>