module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '무신사 스토어',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '무신사 스토어 UI/UX 리뉴얼' },
      { name:'keywords', content:'무신사, 스토어, 쇼핑, 스트릿, 패션'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.musinsa.com/favicon.ico?ver=1' },
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  purgeCSS: {
    whitelist: ['css-selector-to-whitelist'],
  },
  css:[
    { src: '~assets/scss/style.scss', lang: 'scss' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

