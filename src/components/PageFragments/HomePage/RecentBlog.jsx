import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import * as style from '../../PostCard/postCard.module.less'
import moment from 'moment'
import { Row, Col } from 'antd'
import Typography from '@mui/material/Typography'

const RecentBlog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx
          (
          sort: { frontmatter: { date: DESC } }
          limit: 3
          )
        {
        edges {
          node {
            frontmatter {
              title
              excerpt
              date(formatString: "YYYY-MM-DD")
							path
							cover {
								childImageSharp {
									gatsbyImageData(width: 288, placeholder: BLURRED)
								}
							}
              }
            }
          }
        }
  }
  `)

  const posts = data.allMdx.edges
  return (
    <div>
			<p/>
      <Grid container>
        <h2>開発ブログ</h2>
      </Grid>
			<Row gutter={[20, 20]}>
          {posts.map((post) => (
						<Col xs={24} sm={24} md={12} lg={8} key={post.node.frontmatter.path}>
            	<div>
              	<Link to={`/${post.node.frontmatter.path}`}>
									<div className={style.postCard}>
										<div
          						className={style.postCardImg}
          						style={{
            					backgroundImage: `url(${post.node.frontmatter ? getSrc(post.node.frontmatter.cover) : ''})`,
          						}}
        						/>
               		<div className={style.mrTp20}>
							 			<p>
            					<span className={style.dateHolder}>{post.node.frontmatter ? moment(post.node.frontmatter.date).format('YYYY-MM-DD') : ''}</span>
          					</p>
                	</div>
										<h3>{post.node.frontmatter ? post.node.frontmatter.title : ''}</h3>
          					<Typography variant="caption" color='text.primary'>{post.node.frontmatter ? post.node.frontmatter.excerpt : ''}</Typography>
									</div>
              	</Link>
            	</div>
						</Col>
          ))}
			</Row>
			<Grid container justifyContent="center">
				<Link to="/blog">
        	<Button variant="contained" color="primary">もっと読む</Button>
				</Link>
      </Grid>
    </div>
  )
}

export default RecentBlog
