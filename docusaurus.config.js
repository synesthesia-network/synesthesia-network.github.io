module.exports = {
  title: 'Synesthesia',
  tagline: 'A different view of blockchains.',
  url: 'https://synesthesia-network.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'synesthesia-network', // Usually your GitHub org/user name.
  projectName: 'synesthesia-network.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Synesthesia',
      logo: {
        alt: 'Synesthesia Network',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/synesthesia-network/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/substrate',
            },
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/synestheisa_net',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/synesthesia-network/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Synesthesia Network`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/synesthesia-network/synesthesia-network.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/synesthesia-network/synesthesia-network.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
