/**
 * Configure your Gatsby site with this file.
 *
 * ESM (.mjs) because remark-gfm v3 is ESM-only.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import path from 'path';
import { fileURLToPath } from 'url';
import remarkGfm from 'remark-gfm';
import config from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-hotjar',
    options: {
      includeInDevelopment: true, // optional parameter to include script in development
      id: 2178007,
      sv: 6,
    },
  },
  {
    resolve: 'gatsby-plugin-react-helmet-canonical-urls',
    options: {
      siteUrl: 'https://capsaicin.site',
    },
  },
  {
    resolve: 'gatsby-plugin-build-date',
    options: {
      formatAsDateString: true,
      formatting: {
        format: 'YYYY-MM-DD',
        utc: false,
      },
      locale: 'ja',
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-image',
  'gatsby-plugin-less',
  'gatsby-plugin-twitter',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 650,
            quality: 80,
            showCaptions: true,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: 'gatsby-remark-images-medium-zoom',
          options: {
            margin: 24,
            background: 'rgba(0, 0, 0, 0.85)',
            scrollOffset: 40,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static/assets',
            ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff'],
          },
        },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'nofollow',
          },
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
  'gatsby-plugin-sitemap',
  'gatsby-plugin-robots-txt',
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: ['G-9QM7XCLR26'],
      pluginConfig: {
        head: true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-feed',
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
          serialize: ({ query: { site, allMdx } }) => allMdx.edges.map((edge) => Object.assign({}, edge.node.frontmatter, {
            description: edge.node.frontmatter.excerpt,
            date: edge.node.frontmatter.date,
            url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.path}`,
            guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.path}`,
          })),
          query: `
          {
            allMdx(sort: { frontmatter: { date: DESC } }) {
              edges {
                node {
                  frontmatter {
                    title
                    date(formatString: "YYYY MM DD, h:mm:ss +0900")
                    path
                    excerpt
                  }
                }
              }
            }
          }
          `,
          output: '/rss.xml',
          title: 't.shirakura tech blog',
          site_url: 'https://capsaicin.site',
        },
      ],
    },
  },
];

export default {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    // Data used by some gatsby plugins
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins,
};
