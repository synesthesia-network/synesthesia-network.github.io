module.exports = {
  title: 'Synesthesia',
  tagline: 'a different kind of blockchain.',
  url: 'https://synesthesia-network.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'logo/icon-dark-color.svg',
  organizationName: 'synesthesia-network', // Usually your GitHub org/user name.
  projectName: 'synesthesia-network.github.io', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
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
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
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
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'Welcome',
            //   to: 'docs/',
            // },
            {
              label: 'Vision',
              to: 'docs/vision',
            },
            {
              label: 'Specification',
              to: 'docs/specs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/substrate',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/AUcE9yPJAT',
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
              label: 'Assets',
              href: '/logo/logos.html',
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
            'https://github.com/synesthesia-network/synesthesia-network.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
