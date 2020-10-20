import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Intro from '../../components/Intro';
import BuyRequest from '../../components/requestbuy';
import BuyProfile from '../../components/buyprofile';

const Buy = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="買い方"
        description="Retwpay"
        path="/buy"
        keywords={['Retwpay', 'Twitter']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">リツイートの買い方</h1>
        </div>
        <div className="marginTopTitle">
          <h3>リツイートの買い方には二通りの方法があります</h3>
          <ol>
            <li><h4>リツイートを売りたいユーザーのリストからRTを依頼する</h4></li>
            <li><h4>プロフィールを作ってRTを売りたいユーザーからの請負連絡を待つ</h4></li>
          </ol>
        <hr/>

        <details>
          <summary><b>はじめに</b></summary>
            <Intro />
        </details>

        <details>
          <summary><b>1.リツイートを売りたいユーザーのリストからRTを依頼する</b></summary>
            <BuyRequest />
        </details>

        <details>
          <summary><b>2.プロフィールを作ってRTを売りたいユーザーからの請負連絡を待つ</b></summary>
            <BuyProfile />
        </details>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Buy;
