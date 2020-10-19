import React from 'react';
import { Row, Col } from 'antd';

const SkillsProgress = () => (
  <div>
    <h2>アプリ利用イメージ</h2>
    <Row gutter={[1,1]}>
      <Col xs={24} sm={24} md={12} lg={6}>
        <img src="../ss1.png" width="auto" height="60%"/>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <img src="../ss2.png" width="auto" height="60%"/>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <img src="../ss3.png" width="auto" height="60%"/>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <img src="../ss4.png" width="auto" height="60%"/>
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
