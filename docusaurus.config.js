// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HCIA Lab/HCIA实验室',
  tagline: 'The HCIA Lab',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hcia.cocomoe.cn',
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
          routeBasePath: '/',
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
      

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HCIA Lab',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            to: '/docs/',
            label: '文档库',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Cocomoe：收支一览',
                href: 'https://www.cocomoe.cn/blackboard/topic/tp233/',
              },
            ],
          },
          
          {
            title: '文档许可',
            items: [
              {
                label: 'Creativecommons',
                href: 'https://creativecommons.org/'

              },
              {
                label: '署名-非商业性-相同方式共享',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
              },
            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20242444号',
                href: 'https://icp.gov.moe/?keyword=20242444',
              },
            
            ],
            
            
          },
          {
            
            
          },
        ],
        copyright: `HCIALab/Allalone/Cocomoe`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },


    }),
};

export default config;
