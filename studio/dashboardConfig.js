export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4ada51b262e2eb3f03d3e9',
                  title: 'Sanity Studio',
                  name: 'sanity-personality-match-studio',
                  apiId: '1818d807-9843-46f5-b1e4-9c1b077c93a2'
                },
                {
                  buildHookId: '5e4ada51f6124215b88e748c',
                  title: 'Landing pages Website',
                  name: 'sanity-personality-match',
                  apiId: '98e3b818-8aa4-4d2e-9184-b66f791821e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottrollan/sanity-personality-match',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-personality-match.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
