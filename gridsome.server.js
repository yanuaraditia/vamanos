// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
  })
  api.createManagedPages(async ({ createRoute }) => {

    const custPage = createRoute({
      path: '/a/:id(\\d+)/',
      component: './src/templates/Anggota.vue'
    });

    const axios = require('axios')
    await axios.get('https://dev.imaka.or.id/api/anggota')
    .then(item => {
      this.anggota = item.data.data
      this.anggota.forEach(function(item) {
        custPage.addPage({
          path: `/a/${item.id}/`,
          context: {
            data : item,
          }
        })
      });
    });
  });

}
