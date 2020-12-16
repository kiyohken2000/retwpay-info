import React from 'react'
import Config from '../../../config'

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    LineShareButton,
    LineIcon,
} from 'react-share';

const Share = ({ title, path }) => (
    <div>
      <TwitterShareButton title={title} url={Config.siteUrl + path}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton quote={title} url={Config.siteUrl + path}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton title={title} url={Config.siteUrl + path}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <LineShareButton title={title} url={Config.siteUrl + path}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
);

export default Share;