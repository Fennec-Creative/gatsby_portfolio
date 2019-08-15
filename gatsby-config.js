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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
