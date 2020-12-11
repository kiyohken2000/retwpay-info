const config = require('./config');

module.exports = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    options: {
      siteUrl: `https://retwpay.ml`,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-less',
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      plugins: [
        `gatsby-remark-images-medium-zoom`
      ],
        gatsbyRemarkPlugins: [
            {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 650,
                  quality: 80,
                  showCaptions: true,
                  linkImagesToOriginal: false,
                },
            },
            {
              resolve: `gatsby-remark-images-medium-zoom`,
              options: {
                margin: 24,
                background: '#BADA55',
                scrollOffset: 40
              }
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {
                destinationDir: `static/assets`,
                ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
              },
            },
            {
                resolve: "gatsby-remark-external-links",
                options: {
                  target: "_blank",
                  rel: "nofollow"
                },
            },
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: 650,
                ratio: 1.77,
                related: true,
                noIframeBorder: false,
                urlOverrides: [
                  {
                    id: 'youtube',
                    embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                  }
                ]
              }
            },
            'gatsby-remark-prismjs',
        ],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Retwpay',
      short_name: 'Retwpay',
      start_url: '/',
      background_color: '#304CFD',
      theme_color: '#304CFD',
      display: 'standalone',
      icon: 'src/images/Icon-196.png', // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for
      // versions prior to iOS 11.3.
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: config.defaultLanguage,
      useLangKeyLayout: false,
    },
  },
  'gatsby-plugin-sitemap',
  'gatsby-plugin-robots-txt',
  {
    resolve: 'gatsby-plugin-antd',
    options: {
      javascriptEnabled: true,
    },
  },
  {
    resolve: 'gatsby-plugin-eslint-v2',
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ['develop'],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: config.googleAnalyticTrackingId,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                data: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + "/" + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + "/" + edge.node.frontmatter.path,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              });
            });
          },
          query: `
          {
            allMdx(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    date(formatString: "YYYY MM DD, h:mm:ss +0900")
                    path
                  }
                  html
                }
              }
            }
          }
          `,
          output: '/rss.xml',
          title: `Retwpay - Retweet Flea Market App Develop BLOG`,
          site_url: `https://retwpay.ml/`,
        },
      ],
    },
  },
];
