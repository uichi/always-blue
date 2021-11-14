module.exports = {
  siteMetadata: {
    url: "https://alwaysblue.gatsbyjs.io/",
    title: "いつだって広い海",
    titleTemplate: "%s · いつだって広い海",
    description: "いつだって広い海は、プログラマのuichiが運営しています",
    image: "/always-blue.jpg",
    twitterUsername: "@uichiyy",

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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
