import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, instagram, twitter,
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
      </div>
      <div className="centerAlign box">
        <span>Mobile Apps</span>
        <img src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/10c8fe44a9234a659dbecf8ebb21c7fe/8061f084-f710-4bc5-ba63-218df92b338b.png" width="80%" height="80%"></img>
        <li className={`${style.contactBlockItem}`}>
          <a href="https://apps.apple.com/jp/app/retwpay/id1505869896?l=ja" download target="_blank"><img src="../appstore.png"/></a>
        </li>
        <li className={`${style.contactBlockItem}`}>
          <a href="https://play.google.com/store/apps/details?id=net.votepurchase.retwpayapp" download target="_blank"><img src="../googleplay.png"/></a>
        </li>
      </div>
      <div className="centerAlign box">
        <span>and</span>
      </div>
      <div className={style.resumeDownload}>
        <a href="https://votepurchase.net/" download target="_blank">Visit Web App</a>
      </div>
      <div className="centerAlign box">
        <mark>感想はツイッターまで</mark>
      </div>
      <div className="centerAlign box">
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FA name="twitter" />@votepurchase</a>
      </div>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
