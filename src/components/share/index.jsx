import React from 'react'
import Config from '../../../config'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    LineShareButton,
    LineIcon,
    HatenaShareButton,
    HatenaIcon,
} from 'react-share';

const Share = ({ title, path }) => {
  const postUrl = Config.siteUrl + path
  const iconSize = 40
  const round = true
  return (
    <div>
      <Grid container justifyContent="flex-end">
        <Typography variant="h6" color='text.primary'>この記事を共有</Typography>
      </Grid>
      <Grid container justifyContent="flex-end">
      <Grid item>
        <TwitterShareButton title={title} url={postUrl}>
          <TwitterIcon size={iconSize} round={round} />
        </TwitterShareButton>
        <FacebookShareButton quote={title} url={postUrl}>
         <FacebookIcon size={iconSize} round={round} />
        </FacebookShareButton>
        <LinkedinShareButton title={title} url={postUrl}>
          <LinkedinIcon size={iconSize} round={round} />
        </LinkedinShareButton>
        <LineShareButton title={title} url={postUrl}>
          <LineIcon size={iconSize} round={round} />
        </LineShareButton>
        <HatenaShareButton title={title} url={postUrl}>
          <HatenaIcon size={iconSize} round={round} />
        </HatenaShareButton>
      </Grid>
      </Grid>
    </div>
)};

export default Share;