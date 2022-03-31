import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import Grid from '@material-ui/core/Grid';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Software Developer tech blog by t.shirakura
  I am Independent Web and Mobile app developer.
  I hope I can help you in your exciting and prosperous life.
  My technical skills are React, React Native, GatsbyJS, WordPress and DIY PC.`,
  paraTwo: `
  私はインディペンデントのウェブとモバイルアプリ開発者です。みなさんの刺激的で豊かな生活を手助けできることを願っています。
  技術スキル: React, React Native, GatsbyJS, 自作パソコン
  
  `,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['toshiaki', 'shirakura', 'React Native', 'firebase', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </>
  );
};
export default AboutMe;