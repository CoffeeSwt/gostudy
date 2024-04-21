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
                        collapsed: true,
                        items: [
                            { text: '方法', link: 'Go语言/高级/方法' },
                            { text: '接口', link: 'Go语言/高级/接口' },
                        ],
                    },
                    {
                        text: '补充',
                        collapsed: true,
                        items: [
                            { text: '并发', link: 'Go语言/补充/并发' }
                        ],
                    },
                ]
            },
            {
                text: '框架学习',
                collapsed: false,
                items: [
                    {
                        text: 'gin',
                        collapsed: true,
                        items: [
                            { text: 'gin介绍', link: '框架学习/gin/gin介绍' },
                        ],
                    },
                    {
                        text: 'gorm',
                        collapsed: true,
                        items: [
                            { text: 'gorm介绍', link: '框架学习/gorm/gorm介绍' },
                        ],
                    },
                    {
                        text: 'swagger',
                        collapsed: true,
                        items: [
                            { text: 'Swagger介绍', link: '框架学习/swagger/Swagger介绍' },
                        ],
                    },
                ]
            },
            {
                text: '问题记录',
                collapsed: false,
                items: [
                    {
                        text: 'gosdk平台差异',
                        link: '问题记录/gosdk平台差异'
                    },
                ]
            },
            {
                text: '工具教程',
                collapsed: false,
                items: [
                    {
                        text: 'Github Action工作流',
                        link: '工具教程/Github Action工作流'
                    },
                ]
            },
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