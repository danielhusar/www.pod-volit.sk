const filesystemPlugin = require('./plugins/filesystem');
const faviconPlugin = require('./plugins/favicon');
const googleAnalyticsPlugin = require('./plugins/google-analytics');

module.exports = {
  siteMetadata: {
    title: 'Poď voliť',
    description: 'Volby prezidenta Slovenskej Republiky',
    keywords: 'volby',
    siteUrl: 'https://www.pod-volit.sk',
    pathPrefix: '/',
  },
  plugins: [
    filesystemPlugin,
    faviconPlugin,
    googleAnalyticsPlugin,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    // 'gatsby-plugin-offline',
  ],
};
