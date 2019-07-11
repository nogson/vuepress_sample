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
        ['meta ', {name: 'turbolinks-visit-control', content: 'reload'}]
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about.html'},
            {text: 'Yahoo', link: 'https://yahoo.co.jp/'}
        ],
        sidebar: [
            ['/', 'Home'],
            ['/about', 'About'],
            ['https://yahoo.co.jp/', 'Yahoo']
        ]
    }
}