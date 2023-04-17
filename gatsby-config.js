require('dotenv').config();

module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    siteName: 'monali',
=======
    siteName: 'video game shop',
>>>>>>> 34163a4cf815aa4c861b2b18db26e65fdf1d3933
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
