<template>
    <Layout contact="true">
        <section class="py-5">
            <div class="container my-lg-5">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="ndes-1 f-2">Open Recruitment anggota baru IMAKA</h1>
                        <p>Isi form berikut jika ingin mengenal kami secara lebih dalam.</p>
                    </div>
                </div>
                <hr>
                <div class="text-center py-5 my-md-5">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJ_Y8P52evBTDPV_jiVO31AcUd4V5lTcaysza6LNTI-A2UgA/viewform?embedded=true" width="100%" height="700px" frameborder="0" marginheight="0" marginwidth="0">Memproses…</iframe>
                </div>
            </div>
        </section>
    </Layout>
</template>
<script>
export default {
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