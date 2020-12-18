import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default () => {
    return (
        <div>
        	<Grid container justify="flex-end">
        		<Typography variant="caption" color='textPrimary'>Last update {new Date().getFullYear()}-{new Date().getMonth() + 1}-{new Date().getDate()}</Typography>
        	</Grid>
        </div>
    )
};