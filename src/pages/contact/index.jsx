import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Grid from '@material-ui/core/Grid';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="ウェブ制作"
        description="Retwpay"
        path="/contact"
        keywords={['Retwpay', 'Twitter']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">ウェブ制作</h1>
        </div>
        <div>
          <h3>最新フレームワークであなたのウェブサイト(HP/LP)を制作します</h3>
            <p><strong><em>GatsbyJS</em></strong>を使用したウェブサイト制作代行を各種クラウドソーシングサービスに出品中です。</p>
            <ul>
              <li><a href="https://coconala.com/services/1484342?" target="_blank">coconala</a></li>
              <li><a href="https://www.lancers.jp/menu/detail/160926" target="_blank">Lancers</a></li>
              <li><a href="https://crowdworks.jp/public/employees/4053198" target="_blank">CrowdWorks</a></li>
              <li><a href="https://www.craudia.com/user_detail/wKNWiU" target="_blank">Craudia</a></li>
            </ul>
            <br/>
            <div>
              <h3>最新フレームワークGatsbyJSで高いページパフォーマンスを実現</h3>
                <p>GatsbyJSは、<strong>高いページパフォーマンス</strong>、<strong>低コスト</strong>で運用できることで、海外で大注目のReactベースの静的サイトジェネレータです。最新フレームワークのため<strong>Lighthouseで高スコア</strong>を達成でき、WordPressよりも<strong>高いSEO効果</strong>を期待できます。</p>
              <div>
                <h4>GatsbyJSを使用している当サイトのLighthouseスコア</h4>
                <img height="auto" width="63%" src="../lighthouse.png"/>
              </div>
            </div>
            <br/>
            <div>
              <h3>静的サイトなので低コストで運用可能</h3>
              <p>サーバーで動的にページを生成するWordPressと違い、GatsbyJSでは<strong>月々のサーバー料金が非常に安く</strong>済みます。</p>
              <p>例えば、本サイトがホスティングに利用している<strong><a href="https://firebase.google.com/pricing?hl=ja" target="_blank">Firebase</a></strong>は<mark>ストレージ1GB</mark>まで<mark>転送量は月10GB</mark>まで<strong>無料</strong>です。このサイトは<strong>基本無料</strong>で運営しています。</p>
              <p>さらに、このサイトのドメイン<strong>retwpay.ml</strong>は<strong><a href="https://www.freenom.com/ja/index.html" target="_blank">Freenom</a></strong>で取得した無料ドメインです。Freenomでは<mark>.TK</mark>/<mark>.ML</mark>/<mark>.GA</mark>/<mark>.CF</mark>/<mark>.GQ</mark>の5種類のドメインが無料で取得できます。</p>
            </div>
            <div>
              <h3>豊富なテンプレートからあなた好みのウェブページを制作</h3>
              <p>GatsbyJSの<a href="https://www.gatsbyjs.com/starters/?v=2" target="_blank">豊富なテンプレート</a>から制作します。</p>
              <p>また、<a href="https://getform.io/" target="_blank">Getform</a>や<a href="https://disqus.com/" target="_blank">DISQUS</a>などのSaaSを使い、<strong>問い合わせフォーム</strong>や<strong>コメント</strong>といった動的機能の実装も可能です。</p>
            </div>
            <div>
              <h3>デザイン等は以下のサンプルサイトを参照ください</h3>
              <Grid container>
                <Grid item md={4} sm={12}>
                  <div>
                    <a href="https://hotmockup.ga/" target="_blank">
                      <img src="../samplesite1.png" width="100%" height="auto" alt="samplesite1"/>
                      https://hotmockup.ga/
                    </a>
                  </div>
                </Grid>
                <Grid item md={4} sm={12}>
                  <div>
                    <a href="https://votepurchase.cf/" target="_blank">
                      <img src="../samplesite2.png" width="100%" height="auto" alt="samplesite2"/>
                      https://votepurchase.cf/
                    </a>
                  </div>
                </Grid>
                <Grid item md={4} sm={12}>
                  <div>
                    <a href="https://mycollection.gq/" target="_blank">
                      <img src="../samplesite3.png" width="100%" height="auto" alt="samplesite3"/>
                      https://mycollection.gq/
                    </a>
                  </div>
                </Grid>
              </Grid>
            </div>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
