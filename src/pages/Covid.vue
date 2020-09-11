<template>
    <Layout>
        <section class="pt-5">
            <div class="container pt-lg-5">
                <div class="row">
                    <div class="col-md-6 pb-lg-5">
                        <h1 class="ndes-1 f-2">Jaga selalu kesehatanmu, ada mimpi yang harus kau kejar</h1>
                        <p class="mb-lg-4">Selalu mencuci tangan, kenakan masker, jaga jarak minimal 1 meter. Kurangi aktifitas di ruang publik, stay safe stay alive.</p>
                    </div>
                    <div class="col-md-6 text-center d-lg-flex align-items-lg-end justify-content-lg-end">
                        <g-image src="~/assets/images/covid.png" fit="contain" width="400px"></g-image>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 bg-dark text-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h6>Jawa Tengah</h6>
                        <h1 class="ndes-1 f-2 text-muted">
                            <div v-if="isLoaded">
                                <span class="text-danger">{{jateng.counter}}</span> /
                                <span class="text-success">{{jateng.recover}}</span>
                            </div>
                            <b-spinner v-else label="Loading..."></b-spinner>
                        </h1>
                    </div>
                    <div class="col-md-6 col-12">
                        <h6>Daerah Istimewa Yogyakarta</h6>
                        <h1 class="ndes-1 f-2 text-muted">
                            <div v-if="isLoaded">
                                <span class="text-danger">{{jogja.counter}}</span> /
                                <span class="text-success">{{jogja.recover}}</span>
                            </div>
                            <b-spinner v-else label="Loading..."></b-spinner>
                        </h1>
                    </div>
                </div>
                <p class="text-muted mt-2">Data dari <a href="//covid19.go.id">Gugus Tugas Covid-19</a>. Muat ulang setiap 5 menit jika tidak dilakukan refresh.</p>
            </div>
        </section>
    </Layout>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            isLoaded: false,
            jateng: {
                counter: 0,
                recover: 0,
            },
            jogja: {
                counter: 0,
                revover: 0,
            },
            dataMentah: []
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
                        this.jateng.recover = this.dataMentah[i]['kasusSemb']
                    } else if(this.dataMentah[i]['kodeProvi'] == 34) {
                        this.jogja.counter = this.dataMentah[i]['kasusPosi']
                        this.jogja.recover = this.dataMentah[i]['kasusSemb']
                    }
                }
                this.isLoaded = true
            }).catch(e => {
                alert('Terjadi kesalahan')
                console.log(e)
            });
        }
    },
    created() {
        this.loadData()
        setInterval(()=>{
            this.isLoaded = false
            this.loadData()
        },300000)
    }
}
</script>