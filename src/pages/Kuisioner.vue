<template>
    <Layout contact="true">
        <section class="py-5">
            <div class="container-fluid" v-if="monthEr">
            </div>
            <div class="container-fluid my-lg-5">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="ndes-1 f-2">Penelusuran Minat Siswa sedang ditutup untuk sementara</h1>
                        <p>Kuisioner akan dibuka kembali pada periode bulan November - Januari tahun berikutnya. Otomatis aktif setiap jadwal Sosialisasi Kampus Universitas Amikom Yogyakarta.</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>
<script>
export default {
    metaInfo: {
        title: 'Penelusuran Minat Siswa'
    },
    computed: {
        monthEr() {
            var date = new Date()
            var month = date.getMonth()
            if(month >= 11 && month <= 3) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>