import React from 'react';
import { Layout } from 'antd';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

import 'prismjs/themes/prism-solarizedlight.css';
import './highlight-syntax.less';
import * as style from './post.module.less';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PostNav from '../../components/prevnext'
import RecentPosts from '../../components/Recent'
import Share from '../../components/share'

const Post = ({ data, pageContext, children }) => {
  const { frontmatter } = data.mdx;
  const {
    title, cover, excerpt, path, date,
  } = frontmatter;

  const canonicalUrl = Utils.resolvePageUrl(
    Config.siteUrl,
    Config.pathPrefix,
    path,
  );
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title={title}
          description={excerpt}
          path={path}
          contentType="article"
          imageUrl={getSrc(cover)}
          keywords={['Retwpay']}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1>{title}</h1>
            <div className={style.bannerImgContainer}>
              <GatsbyImage className={style.bannerImg} image={getImage(cover)} title={excerpt} alt={title} />
            </div>
            <CalendarTodayIcon/><h3>{date}</h3>
            <p>{excerpt}</p>
            <div className={style.blogArticle}>
              {children}
            </div>
          </div>
          <PostNav prev={pageContext.prev} next={pageContext.next}/>
          <Share title={title} path={path} />
          <RecentPosts />
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($postPath: String!) {
    mdx(frontmatter: { path: { eq: $postPath } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        path
        excerpt
        cover {
          childImageSharp {
            gatsbyImageData(width: 1000, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default Post;
