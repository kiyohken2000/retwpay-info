import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Intro from '../../components/Intro';
import SellRequest from '../../components/requestsell';
import SellProfile from '../../components/sellprofile';

const Sell = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="売り方"
        description="Hello folks Rolwin here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Rolwin is always open to talk about web
                    technologies especially Javascript techstacks. Currently I'm a part of Gatsby organization on github.
                    Find me on github - rolwin100."
        path="/sell"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
      />
      <Header />
      <SidebarWrapper>
      <div className="marginTopTitle">
        <h1 className="titleSeparate">リツイートの売り方</h1>
      </div>
      <div className="marginTopTitle">
          <h3>リツイートの売り方には二通りの方法があります</h3>
          <ol>
            <li><h4>リツイートを買いたいユーザーのリストからRTの請負を伝える</h4></li>
            <li><h4>プロフィールを作ってRTを買いたいユーザーからの依頼を待つ</h4></li>
          </ol>
        <hr/>

        <details>
          <summary><b>はじめに</b></summary>
            <Intro />
        </details>

        <details>
          <summary><b>1.リツイートを買いたいユーザーのリストからRTの請負を伝える</b></summary>
            <SellRequest />
        </details>

        <details>
          <summary><b>2.プロフィールを作ってRTを買いたいユーザーからの依頼を待つ</b></summary>
            <SellProfile />
        </details>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Sell;
