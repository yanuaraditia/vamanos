<template>
    <Layout>
        <section class="py-5">
            <div class="container-fluid py-lg-5">
                <div class="row">
                    <div class="col-md-7 pb-lg-5 my-md-auto">
                        <h1 class="ndes-1 f-2">Total <span class="badge badge-danger text-dark">{{caseTotal}}</span> kasus positif di sekitar kita, patuhi selalu protokol kesehatan.</h1>
                        <p class="mb-lg-4">Selalu mencuci tangan, kenakan masker, jaga jarak minimal 1 meter. Kurangi aktifitas di ruang publik, stay safe stay alive.</p>
                    </div>
                    <div class="col-md-5 text-center d-lg-flex align-items-lg-center">
                        <g-image src="~/assets/images/covid.png" fit="contain" class="covid"></g-image>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 bg-dark text-white">
            <div class="container-fluid">
                <div class="row" v-if="isLoaded">
                    <div class="col-md-3 col-12 mb-4" v-for="sebaran in dataMentah" :key="sebaran.fid" v-bind:class="sebaran.fid == 35 ? 'd-none' : null">
                        <h6>{{sebaran.provinsi}}</h6>
                        <h3 class="f-2 text-muted">
                            <span class="text-danger">{{sebaran.kasusPosi}}</span> /
                            <span class="text-success">{{sebaran.kasusSemb}}</span> /
                            <span class="text-muted">{{sebaran.kasusMeni}}</span>
                        </h3>
                    </div>
                </div>
                <p class="text-muted mt-2">Data diperoleh dari pihak ketiga, jika data kurang aktual harap maklum. Kunjungi langsung <a href="//covid19.go.id">www.covid19.go.id</a> untuk data lebih aktual.</p>
            </div>
        </section>
    </Layout>
</template>
<script>
import axios from 'axios'
export default {
    metaInfo: {
        title: 'Covid-19 Info'
    },
    data() {
        return {
            isLoaded: false,
            dataMentah: []
        }
    },
    methods: {
        async loadData() {
            axios
            .get('https://dev.imaka.or.id/api/deployer')
            .then(res => {
                this.dataMentah = res.data.data
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
    },
    computed: {
        caseTotal() {
            var total = 0;
            for(var i = 0; i < this.dataMentah.length; i++) {
                total += this.dataMentah[i]['kasusPosi']
            }
            return total;
        }
    }
}
</script>