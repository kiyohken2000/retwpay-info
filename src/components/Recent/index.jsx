import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import DescriptionIcon from '@material-ui/icons/Description'

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
              date(formatString: "YYYY-MM-DD")
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
      <Grid container>
        <Typography variant="h6" color='textPrimary'>- 最近の投稿 -</Typography>
      </Grid>
          {posts.map((post) => (
            <div>
              <Card style={{backgroundColor: "#F2F2F2"}}>
                <Link to={`/${post.node.frontmatter.path}`}>
                  <DescriptionIcon />
                  <Typography variant="subtitle1" color='textPrimary'>{post.node.frontmatter.title}</Typography>
                  <Typography variant="caption" color='textPrimary'>{post.node.frontmatter.excerpt}</Typography>
                  <Typography variant="overline" color='textPrimary'>({post.node.frontmatter.date})</Typography>
                </Link>
              </Card>
              <p />
            </div>
          ))}
    </div>
  )
}

export default RecentPosts