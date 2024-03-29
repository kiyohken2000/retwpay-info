import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';

import RssFeedIcon from '@material-ui/icons/RssFeed';
import Search from '../../components/Search';

const Blog = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="ブログ"
        description="Retwpay"
        path="blog"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
        <Row>
          <Col span={12}>
            <h1 className="titleSeparate">開発ブログ</h1>
          </Col>
          <Col span={12}>
            <Search/>
          </Col>
        </Row>
            <a href="/rss.xml" target="_blank"><h3>RSS Feed <RssFeedIcon /></h3></a>
        </div>
        <Row gutter={[20, 20]}>
          {
            data.allMdx && data.allMdx.edges.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={val} />
              </Col>
            ))
          }
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.mdx/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
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

export default Blog;
