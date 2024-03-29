/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fileAbsolutePath
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
    allMdx.edges.forEach(({ node }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/post/post.jsx'),
        context: {
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMdx.edges),
        },
      });
    });
    const regexForIndex = /index\.mdx/;
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMdx.edges
      .filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex));

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

      allMdx.edges.forEach(({node, next, prev}) => {
        const {frontmatter} = node
      
        createPage({
          path: `/${frontmatter.path}`,
          component: path.resolve('src/templates/post/post.jsx'),
          context: {
            id: node.id,
            postPath: frontmatter.path,
            next,
            prev,
          },
        })
      });

    return 1;
  });
};
