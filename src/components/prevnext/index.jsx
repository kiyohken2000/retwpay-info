import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'antd';

const PostNav = ({prev, next}) => (
  <div>
    <Row>
      <Col span={12}>
        {prev && (
          <div>
            <span>次の記事</span>
            <br/>
            <Link to={`/${prev.frontmatter.path}`}>
              {prev.frontmatter.title}
            </Link>
          </div>
        )}
      </Col>
      <Col span={12}>
        {next && (
          <div>
            <span>前の記事</span>
            <br/>
            <Link to={`/${next.frontmatter.path}`}>
              {next.frontmatter.title}
            </Link>
          </div>
        )}
      </Col>
    </Row>
    <br/>
    <Row alignItems="center" justify="center">
      <Col>
        <Link to="/blog">
          ブログトップ
        </Link>
      </Col>
    </Row>
  </div>
);

export default PostNav;
