import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Howto = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="How to use"
        description="Hello folks Rolwin here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Rolwin is always open to talk about web
                    technologies especially Javascript techstacks. Currently I'm a part of Gatsby organization on github.
                    Find me on github - rolwin100."
        path="/howto"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Retwpayの使い方</h1>
        </div>
        <div className="marginTopTitle">
        <ul>
          <li>RTを買いたい</li>
            <ul>
              <li>RTを売りたいユーザーリストからRTを依頼する</li>
              <li>プロフィールを作ってRTを売りたいユーザーからの請負連絡を待つ</li>
            </ul>
          <li>RTを売りたい</li>
            <ul>
              <li>RTを買いたいユーザーリストからRTの請負連絡をする</li>
              <li>プロフィールを作ってRTを買いたいユーザーからの依頼を待つ</li>
            </ul>
        </ul>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Howto;
