// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小白的网络之路',
  tagline: 'Datacom Developer Network',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ddn.org.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XinyuuM', // Usually your GitHub org/user name.
  projectName: 'all-alone-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 4,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: 'ca-pub-6550660867966230',
      },
      

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Datacom Developer Network',
        logo: {
          alt: 'DDN',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            to: '/hcia',
            label: 'HCIA',
          },
          {
            position: 'right',
            to: '/docs/category/tools',
            label: '工具箱',
          },
          {
            position: 'right',
            to: '/docs#关注公众号',
            label: '公众号',
          },
          {
            position: 'right',
            href: 'https://www.yuque.com/atxinyuu/internet-surfboard',
            label: '语雀智库',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: '文档许可',
            items: [
              
              {
                html: `
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">
                <img src="https://static.cocomoe.cn/static/licenses/by-nc-sa.png"  width="117" height="41" />
              </a>
                `
              },
            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20249960号',
                href: 'https://icp.gov.moe/?keyword=20249960',
              },
            {
              html: `
              <a href="https://www.cocomoe.cn/pay/donate" target="_blank">
                <img src="https://img.shields.io/badge/Support%20-CCC?label=CocoMoe&labelColor=00ccff" />
              </a>
            `,
            },
            ],
            
            
          },
          {
            
            
          },
        ],
        copyright: `Datacom Developer Network/Allalone`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },


    }),

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          showReadingTime: true,
          postsPerPage: 4,
          blogSidebarCount: 'ALL',
          id: 'hcia',
          routeBasePath: 'hcia',
          path: './hcia',
        },
      ],
      'docusaurus-plugin-google-adsense',
      
    ],
    
};

export default config;
