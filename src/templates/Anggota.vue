<template>
    <Layout>
        <section class="py-5">
            <div class="container my-lg-4">
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
        </section>
    </Layout>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            anggota: []
        }
    },
    metaInfo: {
        title: () => {
            if(localStorage.load_anggota) {
                var anggota = JSON.parse(localStorage.load_anggota)
                return anggota.name
            } else {
                return 'Detail Anggota'
            }
        }
    },
    mounted() {
        const { id } = this.$route.params
        if(localStorage.load_anggota) {
            var anggota = JSON.parse(localStorage.load_anggota)
            if(anggota.id == id) {
                this.anggota = anggota
            }
        }
        axios.get(`https://dev.imaka.or.id/api/anggota/${id}`)
        .then(res => {
            this.anggota = res.data.data
        })
        .catch(err => console.log(err))
    },
}
</script>