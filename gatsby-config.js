module.exports = {
  siteMetadata: {
    title: 'Doctocat Template',
    shortName: 'Template',
    description: 'My site description',
  },
  pathPrefix: `/docs`,
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main',
        repoRootPath: './content',
      },
    },
  ],
}
