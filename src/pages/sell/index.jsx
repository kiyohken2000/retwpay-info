import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Sell = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="売り方"
        description="Retwpay"
        path="/sell"
        keywords={['Retwpay', 'Twitter']}
      />
      <Header />
      <SidebarWrapper>
      <div className="marginTopTitle">
        <h1 className="titleSeparate">リツイートの売り方</h1>
      </div>
      <details>
          <summary><b>はじめに</b></summary>
          <br/>
        </details>
      <div className="marginTopTitle">
          <h3>リツイートの売り方には二通りの方法があります</h3>
          <ol>
            <li>
              <details>
                <summary><b>リツイートを買いたいユーザーのリストからRTの請負を伝える</b></summary>
                <br/>
              </details>
            </li>

            <li>
              <details>
                <summary><b>プロフィールを作ってRTを買いたいユーザーからの依頼を待つ</b></summary>
                <br/>
              </details>
            </li>
          </ol>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Sell;
