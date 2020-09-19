<template>
    <Layout>
        <section class="py-5">
            <div class="container-fluid my-lg-4" v-if="isLoaded">
                <b-img :src="anggota.image_link" class="full-radius"></b-img>
                <h1 class="ndes-1 f-2 mt-2">{{anggota.name}}</h1>
                <hr>
                <div class="row mt-md-5">
                    <div class="col-12 col-md-4">
                        <h6>Jurusan</h6>
                        <p>{{anggota.major.name}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tahun Angkatan</h6>
                        <p>{{anggota.year}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Sekolah</h6>
                        <p>{{anggota.school.name}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Tempat Tinggal</h6>
                        <p>{{anggota.address_now}}</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tempat Tinggal</h6>
                        <p>{{anggota.address_from}}</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid my-lg-4" v-else>
                <b-spinner label="Loading..."></b-spinner>
                <h1 class="ndes-1 f-2 mt-2"><b-spinner label="Loading..."></b-spinner><b-spinner label="Loading..."></b-spinner><b-spinner label="Loading..."></b-spinner></h1>
                <hr>
                <div class="row mt-md-5">
                    <div class="col-12 col-md-4">
                        <h6>Jurusan</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tahun Angkatan</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Sekolah</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Asal Tempat Tinggal</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                    <div class="col-12 col-md-4">
                        <h6>Tempat Tinggal</h6>
                        <p><b-spinner label="Loading..."></b-spinner></p>
                    </div>
                </div>
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
            anggota: []
        }
    },
    metaInfo: {
        title: 'Detail Anggota'
    },
    mounted() {
        const { id } = this.$route.params
        if(localStorage.load_anggota) {
            var te = JSON.parse(localStorage.load_anggota)
            if(te.id == id) {
                this.anggota = te
            }
        }
        axios.get(`https://dev.imaka.or.id/api/anggota/${id}`)
        .then(res => {
            this.anggota = res.data.data
                this.isLoaded =true
        })
        .catch(err => console.log(err))
    },
}
</script>