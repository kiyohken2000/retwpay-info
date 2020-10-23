/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

const BuyRequest = () => (
  <div>
    <br/>
    <div>
    <p>"ようこそ"画面の"RTを買う"ボタン、もしくは左上ハンバーガーメニュー内の"buy"ボタンからRTを買う画面を開きます</p>
    </div>
    <Grid container justify="center">
      <Grid item sm={6} md={6}><img src="../retwpay_buy1.png" width="50%" height="auto" /></Grid>
      <Grid item sm={6} md={6}><img src="../retwpay_buy2.png" width="50%" height="auto" /></Grid>
    </Grid>
    <br/>
    <h3>Step.1 - RTを依頼したいユーザーを決めます</h3>
    <p><b>アプリユーザーはRTを買う側です。リストに表示されるのはRTを売りたいユーザーです</b></p>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_rtbuy_list.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <ol>
          <li>アプリ内でのユーザー名です。Twitterのユーザー名とは別です</li>
          <li>ユーザーが希望するフォロワー1人当たりの単価です</li>
          <li>ユーザーが申告した自分のフォロワー数です。単価 x フォロワー数が支払う報酬額です</li>
          <li>RT依頼のみを受け付けているユーザーには"RT only"と表示されます</li>
          <li>利用可能な電子マネーです。あなたが利用可能な電子マネーとマッチしているかがわかります</li>
          <li>ユーザーのTLを開きます。申告しているフォロワー数や捨てアカウントでないかの確認に使用します</li>
          <li>ユーザーのDM画面を開きます。メンション以外にもDMで連絡することができます</li>
          <li>次で説明するテンプレートフォームにメンションを追加します</li>
        </ol>
      </Grid>
    </Grid>
    <br/>
    <h3>Step.2 - テンプレートフォームを編集する</h3>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_rtbuy_form.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <ol>
          <li>リストの"@"をタップするとフォームにメンションが追加されます</li>
          <li>Twitterを開きます</li>
          <li>フォームの内容がクリップボードにコピーされます</li>
          <li>フォームに"返信はDMでください"の文言が追加されます</li>
          <li>フォームの内容を元に戻します</li>
        </ol>
        <br/>
        <p>リストのDMボタンから交渉を始める場合はメンション不要ですが、"#Retwpay 買います"と声をかけることでRTの請負連絡だと意思表示します</p>
      </Grid>
    </Grid>
    <br/>
    <h3>Step.3 - コピーしたフォームをTwitterでツイートします</h3>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_buy18.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <p>ツイッタークライアントに移動します。Step2でコピーしたテンプレートをツイートして交渉を開始します</p>
        <p>メンション付きでツイートすることで相手に通知を飛ばして交渉を始めます</p>
        <Link to="/nego"><b>交渉イメージ</b></Link>
      </Grid>
    </Grid>
  </div>
);

export default BuyRequest;
