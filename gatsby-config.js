module.exports = {
  siteMetadata: {
    siteUrl: "https://always-blue.tech",
    title: "always-blue",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
