module.exports = {
  chainWebpack: config => {
    const jsRule = config.module.rule('js')
    jsRule.uses.delete('buble-loader')
    jsRule.use('babel-loader').loader('babel-loader')
  },
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  title: 'My Pages',
  description: 'これは私のページ',
  head: [
    ['meta', {name: 'turbolinks-visit-control', content: 'reload'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c'}]
  ],
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'About', link: '/about.html'},
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about', 'About'],
    ]
  }
}