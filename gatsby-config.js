module.exports = {
  siteMetadata: {
    title: 'Doctocat Template Sample',
    shortName: 'kzu',
    description: 'My kzu blog description',
  },
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
