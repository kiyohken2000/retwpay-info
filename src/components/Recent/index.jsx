import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import DescriptionIcon from '@mui/icons-material/Description'

const RecentPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx
          ( 
          sort: { frontmatter: { date: DESC } }
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
        <Typography variant="h6" color='text.primary'>- 最近の投稿 -</Typography>
      </Grid>
          {posts.map((post) => (
            <div>
              <Link to={`/${post.node.frontmatter.path}`}>
                <Card style={{backgroundColor: "#F2F2F2"}}>
                  <DescriptionIcon color='primary'/>
                  <Typography variant="subtitle1" color='text.primary'>{post.node.frontmatter.title}</Typography>
                  <Typography variant="caption" color='text.primary'>{post.node.frontmatter.excerpt}</Typography>
                  <Typography variant="overline" color='text.primary'>({post.node.frontmatter.date})</Typography>
                </Card>
              </Link>
              <p />
            </div>
          ))}
    </div>
  )
}

export default RecentPosts