require('dotenv').config()

export default {
  ssr: false,
  env: {
    baseUrl: process.env.API_URL || 'http://localhost',
    vuexStorageKey: process.env.VUEX_STORAGE_KEY || 'vuex',
    appName: process.env.APP_NAME || '',
    tokenContractAddress: process.env.TOKEN_CONTRACT_ADDRESS,
    tokenDecimals: process.env.TOKEN_DECIMALS
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    timing: false
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3adced" },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/app.scss'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/moment",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/pwa"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vuex-persist', ssr: false },
    '~plugins/axios',
    '~plugins/vue-gates',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  axios: {
    baseURL: 'http://localhost'
  },

  router: {
    base: process.env.BASE_FOLDER || '/'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    rtl: false,
    theme: {
      themes: {
        light: {
          primary: "#16396d",
          secondary: "#ff8c00",
          tertiary: "#4682bf",
          accent: "#9c27b0",
          background_color: "#434237",
          theme_color: "#16396d"
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: "QAO Contract Interface",
      short_name: "QAO",
      description: "QAO Contract Interface",
      background_color: "#04122e",
      theme_color: "#04122e"
    },
    icon: {
      fileName: 'appicon.png',
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      sourceType: 'unambiguous',
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 };
        return [[require.resolve('@nuxt/babel-preset-app'), { targets }]];
      },
    },
    transpile: ['bip39'],
  }
};
