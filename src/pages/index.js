import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/index.css'

const cards = [
    {
        title: 'Image',
        list: [
            {
                name: 'Carbon',
                url: 'https://carbon.now.sh',
            },
            {
                name: 'Squoosh',
                url: 'https://squoosh.app/',
            },
            {
                name: '智图',
                url: 'https://zhitu.isux.us/',
            },
            {
                name: 'Base64',
                url: 'https://www.base64-image.de/',
            },
            {
                name: 'Photopea',
                url: 'https://www.photopea.com/',
            },
            {
                name: '西田图像',
                url: 'https://www.sitapix.com/',
            },
            {
                name: '沙沙野',
                url: 'https://www.ssyer.com/',
            },
            {
                name: 'Pixabay',
                url: 'https://pixabay.com/',
            },
            {
                name: 'Vector Logo Zone',
                url: 'https://www.vectorlogo.zone',
            },
            {
                name: 'Flat Icon',
                url: 'https://www.flaticon.com/',
            },
            {
                name: 'Easy Icon',
                url: 'https://www.easyicon.net/',
            },
            {
                name: 'Icon Finder',
                url: 'https://www.iconfinder.com/',
            },
            {
                name: 'Emoji',
                url: 'https://gitmoji.carloscuesta.me/',
            },
            {
                name: 'Full Emoji List',
                url: 'http://www.unicode.org/emoji/charts/full-emoji-list.html',
            },
            {
                name: 'Favicon Generator',
                url: 'https://favicon.io/favicon-generator/',
            },
            {
                name: 'Android Asset Studio',
                url:
                    'http://romannurik.github.io/AndroidAssetStudio/index.html',
            },
            {
                name: 'IcoMoon',
                url: 'https://icomoon.io/app/#/select',
            },
            {
                name: 'Iconfont',
                url: 'https://www.iconfont.cn/',
            },
            {
                name: 'Google Fonts',
                url: 'https://fonts.google.com/',
            },
        ],
    },
    {
        title: 'CSS',
        list: [
            {
                name: 'Gradient',
                url: 'https://cssgradient.io/',
            },
            {
                name: 'RGB to',
                url: 'https://rgb.to/',
            },
            {
                name: 'Flexbox',
                url: 'https://darekkay.com/dev/flexbox-cheatsheet.html',
            },
            {
                name: 'Grid',
                url: 'http://grid.malven.co/',
            },
            {
                name: 'Grid Generator',
                url: 'https://cssgrid-generator.netlify.com/',
            },
            {
                name: 'CSS Triggers',
                url: 'https://csstriggers.com/',
            },
            {
                name: 'clip-path maker',
                url: 'https://bennettfeely.com/clippy/',
            },
            {
                name: 'tools/css',
                url: 'https://www.bestagencies.com/tools/',
            },
            {
                name: 'iPhone Resolutions',
                url:
                    'https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions',
            },
            {
                name: 'Screen Sizes',
                url: 'http://screensiz.es/',
            },
        ],
    },
    {
        title: 'JavaScript',
        list: [
            {
                name: 'Regexly',
                url: 'https://regexly.chipto.io/',
            },
            {
                name: 'JS Features',
                url: 'https://jsfeatures.in/',
            },
            {
                name: 'Async',
                url:
                    'https://raw.githubusercontent.com/frontarm/async-javascript-cheatsheet/master/async-cheatsheet.png',
            },
            {
                name: 'AST Explorer',
                url: 'https://astexplorer.net/',
            },
        ],
    },
    {
        title: 'Libs',
        list: [
            {
                name: 'React',
                url: 'http://www.developer-cheatsheets.com/react',
            },
            {
                name: 'React Lifecycle',
                url:
                    'http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
            },
            {
                name: 'React Router',
                url: 'http://www.developer-cheatsheets.com/react-router',
            },
            {
                name: 'Redux',
                url: 'http://www.developer-cheatsheets.com/redux',
            },
            {
                name: 'Vue',
                url: 'https://marozed.ma/vue-cheatsheet/',
            },
            {
                name: 'Vuex',
                url: 'https://vuejs-tips.github.io/vuex-cheatsheet/',
            },
            {
                name: 'Jest',
                url: 'https://devhints.io/jest',
            },
        ],
    },
    {
        title: 'Tools',
        list: [
            {
                name: 'Vim',
                url: 'https://vim.rtorr.com/lang/zh_cn',
            },
            {
                name: 'Httpie',
                url: 'https://httpie.org/doc#usage',
            },
            {
                name: 'Sublime',
                url: 'http://sublime.emptystack.net/',
            },
            {
                name: 'VS Code',
                url: 'https://www.vscodecandothat.com/',
            },
            {
                name: 'Create App',
                url: 'https://createapp.dev/',
            },
            {
                name: 'Nginx Config',
                url: 'https://nginxconfig.io/',
            },
            {
                name: 'Manifest Generator',
                url: 'https://tomitm.github.io/appmanifest/',
            },
            {
                name: 'Screen Dump',
                url: 'https://screendump.techulus.com/',
            },
            {
                name: 'PageSpeed Insights',
                url: 'https://developers.google.com/speed/pagespeed/insights/',
            },
            {
                name: 'CODELF',
                url: 'https://unbug.github.io/codelf/',
            },
            {
                name: 'Small PDF',
                url: 'https://smallpdf.com/cn',
            },
        ],
    },
    {
        title: 'Other',
        list: [
            {
                name: '现代JS教程',
                url: 'https://zh.javascript.info/',
            },
            {
                name: 'Web',
                url: 'https://developers.google.com/web/',
            },
            {
                name: 'V8',
                url: 'https://v8.js.cn',
            },
            {
                name: 'Big O',
                url: 'https://www.bigocheatsheet.com/',
            },
            {
                name: 'Python3',
                url: 'https://www.pythonsheets.com/index.html',
            },
            {
                name: '75CDN',
                url: 'https://cdn.baomitu.com/',
            },
            {
                name: 'Packal',
                url: 'http://www.packal.org/',
            },
            {
                name: 'Firefox Send',
                url: 'https://send.firefox.com/',
            },
            {
                name: '数学乐',
                url: 'https://www.shuxuele.com/index.html',
            },
            {
                name: 'collabedit',
                url: 'http://collabedit.com/',
            },
        ],
    },
]

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <div>
            {cards.map(card => (
                <div key={card.title} className="card">
                    <h3>{card.title}</h3>
                    <div className="list">
                        {card.list.map(item => (
                            <a href={item.url} className="item">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Layout>
)

export default IndexPage
