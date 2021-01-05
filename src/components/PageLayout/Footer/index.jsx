import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`)

  const date = data.currentBuildDate.currentDate
  const gatsby = <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" aria-label="Gatsby">Gatsby</a>
  const firebase = <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Firebase">Firebase</a>
  const reactnative = <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Native">React Native</a>
  const wordpress = <a href="https://ja.wordpress.org/" target="_blank"rel="noopener noreferrer" aria-label="Wordpress">WordPress</a>

  return (
    <div>
    <p/>
      <Grid container justify="center">
        <Typography variant="caption" color='textPrimary'>Retweet Flea Market App - Powered by {gatsby}, {reactnative}, {wordpress} and {firebase} ❤️ {date}</Typography>
      </Grid>
    </div>
  )
};

export default Footer