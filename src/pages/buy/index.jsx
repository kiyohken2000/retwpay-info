import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Buy = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="買い方"
        description="Hello folks Rolwin here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Rolwin is always open to talk about web
                    technologies especially Javascript techstacks. Currently I'm a part of Gatsby organization on github.
                    Find me on github - rolwin100."
        path="/buy"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">リツイートの買い方</h1>
        </div>
        <div className="marginTopTitle">
        <ul>
          <li>RTを買いたい</li>
            <ul>
              <li>RTを売りたいユーザーリストからRTを依頼する</li>
              <li>プロフィールを作ってRTを売りたいユーザーからの請負連絡を待つ</li>
            </ul>
        </ul>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Buy;
