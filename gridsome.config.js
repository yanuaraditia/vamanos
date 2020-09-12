// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'IMAKA',
  siteDescription: 'Ikatan Mahasiswa Kebumen Amikom Yogyakarta, ora ngapak ora kepenak.',
  siteUrl: 'https://imaka.or.id',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/404'],
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/ack': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/anggota': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/a/:id': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/kcf': {
            changefreq: 'monthly',
            priority: 0.7
          },
        }
      }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "nf-v1",
          routes: ["/", /\.(js|css|png|json)/],
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#000000",
          icon_path: "./src/favicon.png",
          name: "Ikatan Mahasiswa Kebumen Amikom",
          short_name: "IMAKA",
          theme_color: "#FFcc00",
          display: "standalone",
          lang: "en",
      },
    },
    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
          "text/html",
          "application/javascript",
          "application/json",
          "text/css",
          "image/png",
        ],
        pingable: true,
        fileExpirations: {
          fileTypes: {
            "text/html": "access plus 1 day",
            "image/png": "access plus 1 week",
          },
          default: "access plus 1 month",
        },
        featurePolicy: {
          geolocation: ["none"],
          battery: ["self"],
          "ambient-light-sensor": ["self", "amazon.com"],
        },
        customHeaders: {
          "X-Powered-By": "Ikatan Mahasiswa Kebumen Amikom",
        },
        forceHttps: true,
        preventDdosAttacks: {
          downloadedFilesSizeLimit: 102400, // in bytes
        }
      },
    }
  ]

  transformers: {
  }
}
