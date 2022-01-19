export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61e87b248b5fae1c69468905',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u5xy3gbh',
                  apiId: '88a68c8f-d18d-4627-92cb-75a427a7f881'
                },
                {
                  buildHookId: '61e87b24c7a3241d76a292b5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ivn5wb8y',
                  apiId: '65a93694-8c43-4663-9477-053ce9f34c57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anthony-baron/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ivn5wb8y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
