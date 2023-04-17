require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'video game shop',
 
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken:`f36a5a696a4d4aaef525ed221324b9`,
          autopop: true
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        publicApiKey:
          process.env.SNIPCART_PUBLIC_API_KEY ||
          'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1',
        autopop: false,
      },
    },
  ],
};
