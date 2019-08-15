module.exports = {
  pathPrefix: '/portfolio_website',
  siteMetadata: {
    title: 'Fennec Creative',
    author: 'Chelsea Williams',
    description: 'UI/UX Designer and Developer based in Denver, CO',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'fennec-creative',
        short_name: 'FC',
        start_url: '/',
        background_color: '#b8d8d8',
        theme_color: '#b8d8d8',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
