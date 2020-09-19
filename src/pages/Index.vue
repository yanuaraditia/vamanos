<template>
    <Layout contact="true">
        <g-link class="bg-info text-decoration-none text-white d-block text-center p-2" to="/covid">Informasi COVID-19, selalu pakai masker, jaga jarak aman.</g-link>
        <section class="front-banner py-5" v-bind:style="frontPhoto">
            <div class="body">
                <div class="container-fluid my-md-5">
                    <div class="row">
                        <div class="col-md-4">
                            <Carousel></Carousel>
                        </div>
                        <div class="col-md-8 align-items-lg-center my-auto pl-xl-5 pt-5 pt-md-0">
                            <h1 class="ndes-1 f-2">Ra usah isin maning dadi wong ngomong ngapak</h1>
                            <p class="mt-3">Kami merangkul dan menghubungkan mahasiswa kebumen yang berkuliah di lingkup amikom yogyakarta.</p>
                            <div class="text-left mt-md-4">
                            <g-link to="/join" class="btn btn-lg btn-primary full-radius px-lg-5">Yuh Melu</g-link>
                            <g-link to="/about" class="btn btn-lg btn-link ml-md-3 full-radius">Selengkape</g-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 bg-light">
            <div class="container-fluid py-5">
                <div class="row">
                    <div class="col-md-8 pl-lg-5 my-md-auto">
                        <h1 class="ndes-1 f-2">Jaga selalu kesehatanmu,<br> ada impian yang harus kau kejar</h1>
                        <p>Selalu mencuci tangan, kenakan masker, taati selalu protokol kesehatan. Kurangi aktifitas di ruang publik, terapkan pola hidup sehat.</p>
                        <div class="row mt-md-5">
                          <div class="col-md-6 col-12">
                              <h6 class="m-0">Jawa Tengah</h6>
                              <h1 class="ndes-1 f-2 text-muted">
                                  <div v-if="isLoaded">
                                      <span class="text-danger">{{jateng.counter}}</span>
                                  </div>
                                  <b-spinner v-else label="Loading..."></b-spinner>
                              </h1>
                          </div>
                          <div class="col-md-6 col-12">
                              <h6 class="m-0">Daerah Istimewa Yogyakarta</h6>
                              <h1 class="ndes-1 f-2 text-muted">
                                  <div v-if="isLoaded">
                                      <span class="text-danger">{{jogja.counter}}</span>
                                  </div>
                                  <b-spinner v-else label="Loading..."></b-spinner>
                              </h1>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center d-lg-flex align-items-lg-center">
                        <g-image src="~/assets/images/covid.png" fit="contain" class="covid"></g-image>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>
<script>
import Carousel from '~/components/Carousel.vue'
import axios from 'axios'
export default {
    components: {
        Carousel
    },
    metaInfo: {
      title: 'Beranda'
    },
    data() {
        return {
            isLoaded: false,
            jateng: {
                counter: 0,
            },
            jogja: {
                counter: 0,
            },
            dataMentah: [],
        }
    },
    methods: {
        async loadData() {
            axios
            .get('https://dev.imaka.or.id/api/deployer')
            .then(res => {
                this.dataMentah = res.data.data
                for(var i = 0; i< this.dataMentah.length ; i++) {
                    if(this.dataMentah[i]['kodeProvi'] == 33) {
                        this.jateng.counter = this.dataMentah[i]['kasusPosi']
                    } else if(this.dataMentah[i]['kodeProvi'] == 34) {
                        this.jogja.counter = this.dataMentah[i]['kasusPosi']
                    }
                }
                this.isLoaded = true
            }).catch(e => {
                console.log(e)
            });
        },
    },
    created() {
        this.loadData()
        setInterval(()=>{
            this.isLoaded = false
            this.loadData()
        },300000)
    },
    computed: {
        frontPhoto() {
            return '~/front/front-1.png';
        }
    }
}
</script>
