import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const list = [
    {
        name: 'Carbon',
        url: 'https://carbon.now.sh',
    },
    {
        name: 'Vim',
        url: 'https://vim.rtorr.com/lang/zh_cn',
    },
    {
        name: 'Sublime',
        url: 'http://sublime.emptystack.net/',
    },
    {
        name: 'Emoji',
        url: 'https://gitmoji.carloscuesta.me/',
    },
    {
        name: 'Flexbox',
        url: 'https://darekkay.com/dev/flexbox-cheatsheet.html',
    },
    {
        name: 'CSS Triggers',
        url: 'https://csstriggers.com/',
    },
    {
        name: 'Async',
        url:
            'https://raw.githubusercontent.com/frontarm/async-javascript-cheatsheet/master/async-cheatsheet.png',
    },
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
    {
        name: 'Create App',
        url: 'https://createapp.dev/',
    },
    {
        name: 'Nginx Config',
        url: 'https://nginxconfig.io/',
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

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <div>
            {list.map(item => (
                <ul key={item.name} style={{ marginBottom: 0 }}>
                    <li style={{ marginBottom: '.5rem' }}>
                        <a href={item.url} style={{ textDecoration: 'none' }}>
                            {item.name}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
    </Layout>
)

export default IndexPage
