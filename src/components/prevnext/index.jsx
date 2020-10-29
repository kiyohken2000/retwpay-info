import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'antd';

const PostNav = ({prev, next}) => (
  <div>
    <Row>
      {prev && (
        <Col span={12}>
          <div>
            <span>次の記事</span>
            <br/>
            <Link to={`/${prev.frontmatter.path}`}>
              {prev.frontmatter.title}
            </Link>
          </div>
        </Col>
        )}
      {next && (
        <Col span={12}>
          <div>
            <span>前の記事</span>
            <br/>
            <Link to={`/${next.frontmatter.path}`}>
              {next.frontmatter.title}
            </Link>
          </div>
        </Col>
      )}
    </Row>
  </div>
);

export default PostNav;
