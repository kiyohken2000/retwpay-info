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
  return (
    <div>
    <p/>
    <Grid container justify="flex-end">
      <Typography variant="caption" color='textPrimary'>Last update on {date}</Typography>
    </Grid>
    </div>
  )
};

export default Footer