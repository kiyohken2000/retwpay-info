import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import Grid from '@material-ui/core/Grid';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Retwpayは拡散リツイートを「<mark><b>買いたい</b></mark>」と「<mark><b>売りたい</b></mark>」のマッチングを支援します。<br/>
  <br/>
  <li><b>リツイートを売って電子マネーを手に入れたい！</b></li>
  <li><b>リツイートを買ってブログやYouTubeを宣伝したい！</b></li>
  <br/>
  そんな方はぜひご利用ください`,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="トップ"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1>Retwpay</h1>
        <h3 className="titleSeparate">リツイートフリマアプリ</h3>
        <p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        </p>
        <h3><mark>Amazonギフト券</mark>、<mark>LINE pay</mark>、<mark>PayPay</mark>、<mark>Kyash</mark>、<mark>Pring</mark>のいずれかと<mark>Twitter</mark>だけですぐに使えます。</h3>
        <Grid container justify="space-between">
          <Grid item sm={6} md={6}><img src="../cashless.png" width="63%" height="auto"/></Grid>
          <Grid item sm={6} md={6}><img src="../twitter_logo.png" width="63%" height="auto"/></Grid>
          </Grid>
        <h2>6つの特長</h2>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="電子マネーの個人間送金を利用"
            textH3="中抜きが発生しません"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="素人参加型だから"
            textH3="高インプレッション"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="アカウント登録不要"
            textH3="すぐに始められます"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="アカウント登録してもっと便利"
            textH3="依頼、請負の連絡を待てる"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="アカウント登録してもっと便利"
            textH3="報酬額を自分で設定"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="もちろん無料"
            textH3="登録料も利用料もありません"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
