import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>アプリ利用イメージ</h2>
    <Row gutter={[16]}>
      <Col className="gutter-row" span={6}>
        <img src="../ss1.png" width="auto" height="60%"/>
      </Col>
      <Col className="gutter-row" span={6}>
        <img src="../ss2.png" width="auto" height="60%"/>
      </Col>
      <Col className="gutter-row" span={6}>
        <img src="../ss3.png" width="auto" height="60%"/>
      </Col>
      <Col className="gutter-row" span={6}>
        <img src="../ss4.png" width="auto" height="60%"/>
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
