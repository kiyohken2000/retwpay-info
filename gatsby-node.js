/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

const postTemplate = path.resolve('src/templates/post/post.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            internal {
              contentFilePath
            }
          }
          next {
            frontmatter { title path }
          }
          prev: previous {
            frontmatter { title path }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    const { allMdx } = result.data;

    /* Post pages */
    allMdx.edges.forEach(({ node, next, prev }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: `/${node.frontmatter.path}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMdx.edges),
          next,
          prev,
        },
      });
    });

    const regexForIndex = /index\.mdx/;
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMdx.edges
      .filter(({ node: { internal: { contentFilePath } } }) => contentFilePath.match(regexForIndex));

    /* Tag pages */
    const allTags = [];
    defaultPosts.forEach(({ node }) => {
      node.frontmatter.tags.forEach((tag) => {
        if (allTags.indexOf(tag) === -1) allTags.push(tag);
      });
    });

    allTags
      .forEach((tag) => {
        createPage({
          path: utils.resolvePageUrl(config.pages.tag, tag),
          component: path.resolve('src/templates/tags/index.jsx'),
          context: {
            tag,
          },
        });
      });

    return 1;
  });
};
