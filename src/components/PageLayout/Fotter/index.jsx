import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default () => {
    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
      <div>
				<p/>
        <Grid container justify="flex-end">
        	<Typography variant="caption" color='textPrimary'>Last update {date}</Typography>
        </Grid>
      </div>
    )
};