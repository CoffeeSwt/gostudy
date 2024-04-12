module.exports = {
    title: 'Go语言学习之旅',
    description: '这里是Coffee的Go语言学习之旅',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        sidebar: [
            {
                text: 'Go语言',
                collapsed: false,
                items: [
                    {
                        text: '基本',
                        collapsed: false,
                        items: [
                            { text: 'Go语言介绍', link: 'Go语言/基本/Go语言介绍' },
                            { text: '环境安装', link: 'Go语言/基本/环境安装' },
                            { text: '基本概念', link: 'Go语言/基本/基本概念' },
                            { text: '流程控制', link: 'Go语言/基本/流程控制' }
                        ],
                    },
                    {
                        text: '高级',
                        collapsed: false,
                        items: [
                            { text: '方法', link: 'Go语言/高级/方法' },
                            { text: '接口', link: 'Go语言/高级/接口' },
                        ],
                    },
                    {
                        text: '补充',
                        collapsed: false,
                        items: [
                            { text: '并发', link: 'Go语言/补充/并发' }
                        ],
                    },
                ]
            }
        ],
        logo: '/golang.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/CoffeeSwt/gostudy' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present CoffeeSwt'
        }
    },
    lastUpdated: true,
    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    }
}