<template>
    <footer class="footer py-5 bg-gray text-white">
      <div class="container-fluid py-md-4">
        <div class="row">
          <div class="col-12-mobile col-md-4">
            <h6>Organisasi</h6>
            <ul class="mt-3">
              <li><g-link to="/struktur-organisasi">Struktur Organisasi</g-link></li>
              <li><g-link to="/anggota">Keanggotaan</g-link></li>
              <li><g-link to="/about">Tentang Kami</g-link></li>
            </ul>
          </div>
          <div class="col-12-mobile col-md-4">
            <h6>Relasi</h6>
            <ul class="mt-3">
              <li><a href="//home.amikom.ac.id">Universitas Amikom Yogyakarta</a></li>
              <li><a href="//amikompurwokerto.ac.id">Universitas Amikom Purwokerto</a></li>
              <li><a href="//instagram.com/kebumencampusfestival">Kebumen Campus Festival</a></li>
              <li><a href="//www.kebumenkab.go.id">Pemerintah Kabupaten Kebumen</a></li>
              <li><a href="//instagram.com/imakta">Ikatan Mahasiswa Kebumen di Yogyakarta</a></li>
            </ul>
          </div>
          <div class="col-12-mobile col-md-4">
            <h6>Tautan</h6>
            <ul class="mt-3">
              <li><a href="//pmb.amikom.ac.id">Pendaftaran Mahasiswa Baru</a></li>
              <li><g-link to="/kuisioner">Penelusuran Minat Siswa</g-link></li>
              <li><g-link to="/join">Pendaftaran Anggota</g-link></li>
            </ul>
          </div>
        </div>
        <div class="row text-muted mt-md-5">
          <div class="col-md-6">Hak cipta © {{new Date().getFullYear()}} IMAKA. Seluruh hak cipta dilindungi undang-undang.</div>
          <div class="col-md-6 text-lg-right">Digawe karo ❤ <a href="//yanuaraditia.com">Yanuar Aditia</a></div>
        </div>
      </div>
    </footer>
</template>