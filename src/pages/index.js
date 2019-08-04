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
        ]
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
        ]
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
        ]
    },
    {
        title: 'Lib',
        list: [
            {
                name: 'React',
                url: 'http://www.developer-cheatsheets.com/react',
            },
            {
                name: 'React Lifecycle',
                url: 'http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
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
        ]
    },
    {
        title: 'Tool',
        list: [
            {
                name: 'Vim',
                url: 'https://vim.rtorr.com/lang/zh_cn',
            },
            {
                name: 'Sublime',
                url: 'http://sublime.emptystack.net/',
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
        ]
    },
    {
        title: 'Other',
        list: [
            {
                name: 'Emoji',
                url: 'https://gitmoji.carloscuesta.me/',
            },
            {
                name: 'Big O',
                url: 'https://www.bigocheatsheet.com/',
            },
            {
                name: 'Python3',
                url: 'https://www.pythonsheets.com/index.html',
            },
        ]
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
                        {card.list.map((item) => (
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
