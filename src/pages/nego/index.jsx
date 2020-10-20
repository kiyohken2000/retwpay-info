import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Nego = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="交渉イメージ"
        description="Retwpay"
        path="/nego"
        keywords={['Retwpay', 'Twitter']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">交渉イメージ</h1>
        </div>
        <div className="marginTopTitle">
          <h2>Retwpay(売る)を利用した場合の例です</h2>
          <p>ここでは</p>
          <ul>
            <li>オファー者(RTを依頼する人) = @votepurchase</li>
            <li>拡散者(RTをしてあげる人) = @hashikan1000</li>
          </ul>
          <p>として説明します。</p>
          <h3>Step1.拡散者がオファー者にツイッターを通じて依頼の受託を伝えます。</h3>
          <p>拡散者は依頼の受託を伝えるためフォームにメンションを追加してコピーします。</p>
          <img src="../negotiation_image1.jpg" width="63%" height="auto" />
          <p>拡散者はコピーした内容をツイートします。</p>
          <img src="../negotiation_image2.png" width="63%" height="auto" />
          <h3>Step2.オファー者に通知が届きます。交渉スタートです。</h3>
          <p>拡散者がメンションをつけてツイートしたのでオファー者に通知が届きます。"返信はDMでください"とついているのでDMで返信します。</p>
          <img src="../negotiation_image3.png" width="63%" height="auto" />
          <p>オファー者と拡散者の交渉が始まりました。オファー者は、最初に拡散内容の確認と報酬額の確認をしました。支払い直後のRT取り消しを防ぐために支払いまで30分の期限を付けました。</p>
          <img src="../negotiation_image4.png" width="63%" height="auto" />
          <p>LINE payでの報酬の支払いで合意しました。送金には友達登録が必要なためLINE IDを伝え友達登録しました。その後、オファー者は拡散希望のツイートを拡散者がRTしたことを確認しています。30分後の支払いになりましたので待ちます。</p>
          <img src="../negotiation_image5.png" width="63%" height="auto" />
          <p><b>30分後</b></p>
          <h3>Step3.約束の時間がきたのでオファー者は報酬を支払います。</h3>
          <p>約束の時間が経ったことを伝え、RT取り消しがないことを確認しています。</p>
          <img src="../negotiation_image6.png" width="63%" height="auto" />
          <h3>Step4.報酬を支払います。</h3>
          <p>事前の交渉通りLINE payで5円の報酬を支払いました。</p>
          <img src="../negotiation_image7.png" width="63%" height="auto" />
          <h3>Step5.拡散者に入金を確認してもらい取引終了です。</h3>
          <p>拡散者に約束の金額が送金されたことを確認してもらい取引が終了しました。</p>
          <img src="../negotiation_image8.png" width="63%" height="auto" />
          <p><b>以上が実際の取引イメージです。</b></p>
          <h2>RT/宣伝内容と報酬の相談はTwitterでおこなってください</h2>
          <p>Retwpayにはユーザー間でメッセージを送受信する機能はありません。そのため、RTしてほしい事の伝達や、RTした人に渡す報酬額や報酬の受け渡し方法の相談はTwitter上で行ってください。</p>
          <h2>RT/送金について</h2>
          <p>お互いのツイッターアカウントを確認して信頼の上でRT/送金することを想定しています。ですが電子マネーの送金キャンセルはできない場合があるため、RT→送金の順番を推奨します。これはツイ消しやRT取り消しのほうが簡単にできるためです。また、送金直後のツイ消しRT取り消しを防ぐため、RT後〇〇分経ってからの送金という約束をすると良いでしょう。</p>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Nego;
