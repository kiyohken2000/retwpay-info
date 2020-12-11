import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Card from '@material-ui/core/Card';

const RecentPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx
          ( 
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
          ) 
        {
        edges {
          node {
            frontmatter {
              title
              excerpt
              date
              path
              }
            }
          }
        }
  }
  `)

  const posts = data.allMdx.edges
  return (
    <div>
          {posts.map((post) => (
            <div>
            <Link to={`/${post.node.frontmatter.path}`}>
            <p>{post.node.frontmatter.title}</p>
            <p>{post.node.frontmatter.excerpt}</p>
            </Link>
            </div>
          ))}
    </div>
  )
}

export default RecentPosts
