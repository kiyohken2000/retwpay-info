import React from 'react';
import { Layout } from 'antd';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

import 'prismjs/themes/prism-solarizedlight.css';
import './highlight-syntax.less';
import style from './post.module.less';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PostNav from '../../components/prevnext'
import RecentPosts from '../../components/Recent'

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const Post = ({ data, pageContext }) => {
  const { body, frontmatter } = data.mdx;
  const {
    title, cover: { childImageSharp: { fluid } }, excerpt, path, date,
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
          keywords={['Retwpay']}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1>{title}</h1>
            <div className={style.bannerImgContainer}>
              <Img className={style.bannerImg} fluid={fluid} title={excerpt} alt={title} />
            </div>
            <CalendarTodayIcon/><h3>{date}</h3>
            <p>{excerpt}</p>
            <MDXProvider components={style.blogArticle}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
          <PostNav prev={pageContext.prev} next={pageContext.next}/>
          <RecentPosts />
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($postPath: String!) {
    mdx(frontmatter: { path: { eq: $postPath } }) {
      timeToRead
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        path
        excerpt
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMdx(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.mdx/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Post;
