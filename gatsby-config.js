module.exports = {
  pathPrefix: '/docs',
  siteMetadata: {
    title: 'Doctocat Template',
    shortName: 'Template',
    description: 'My site description',
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'master',
        repoRootPath: './content',
      },
    },
  ],
}
