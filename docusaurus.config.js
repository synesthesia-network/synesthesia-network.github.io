module.exports = {
  title: 'Synesthesia',
  tagline: 'A different view of blockchains.',
  url: 'https://synesthesia-network.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'logo/icon-dark-color.svg',
  organizationName: 'synesthesia-network', // Usually your GitHub org/user name.
  projectName: 'synesthesia-network.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'synesthesia',
      logo: {
        alt: 'Synesthesia Network',
        src: 'logo/icon-dark-color.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'https://github.com/synesthesia-network/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/substrate',
        //     },
        //     {
        //       label: 'Discord',
        //       href: '#',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/synestheisa_net',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/synesthesia-network/',
        //     },
        //   ],
        // },
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
            'https://github.com/synesthesia-network/synesthesia-network.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
