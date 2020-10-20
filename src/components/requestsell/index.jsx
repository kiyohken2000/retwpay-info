/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

const SellRequest = () => (
  <div>
    <br/>
    <div>
    <p>"ようこそ"画面の"RTを売る"ボタン、もしくは左上ハンバーガーメニュー内の"sell"ボタンからRTを売る画面を開きます</p>
    </div>
    <Grid container justify="center">
      <Grid item sm={6} md={6}><img src="../retwpay_sell1.jpg" width="50%" height="auto" /></Grid>
      <Grid item sm={6} md={6}><img src="../retwpay_sell2.jpg" width="50%" height="auto" /></Grid>
    </Grid>
    <br/>
    <h3>Step.1 - RTしてあげたいユーザーを決めます</h3>
    <p><b>アプリユーザーはRTを売る側です。リストに表示されているのはRTを買いたいユーザーです</b></p>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_rtsell_list.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <ol>
          <li>アプリ内でのユーザー名です。Twitterのユーザー名とは別です</li>
          <li>フォロワー1人あたりの単価です。単価 x あなたのフォロワー数が受け取れる報酬額です</li>
          <li>受け取れる報酬の上限額です</li>
          <li>利用可能な電子マネーです。あなたが利用可能な電子マネーとマッチしているかがわかります</li>
          <li>利ユーザーのTLを開きます。捨てアカウントでないかの確認に使用します</li>
          <li>RTを希望しているツイートを開きます</li>
          <li>ユーザーのDM画面を開きます。メンション以外にもDMで連絡することができます</li>
          <li>次で説明するテンプレートフォームにメンションを追加します</li>
        </ol>
      </Grid>
    </Grid>
    <br/>
    <h3>Step.2 - テンプレートフォームを編集する</h3>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_rtsell_form.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <ol>
          <li>リストの"@"をタップするとフォームにメンションが追加されます</li>
          <li>Twitterを開きます</li>
          <li>フォームの内容がクリップボードにコピーされます</li>
          <li>フォームに"返信はDMでください"の文言が追加されます</li>
          <li>フォームの内容を元に戻します</li>
        </ol>
        <p>リストのDMボタンから交渉を始める場合はメンション不要ですが、"#Retwpay 売ります"と声をかけることでRTの請負連絡だと意思表示します</p>
      </Grid>
    </Grid>
    <br/>
    <h3>Step.3 - コピーしたフォームをTwitterでツイートします</h3>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={6} md={5}><img src="../retwpay_sell17.jpg" width="80%" height="auto" /></Grid>
      <Grid item sm={6} md={6}>
        <p>ツイッタークライアントに移動します。Step2でコピーしたテンプレートをツイートして交渉を開始します</p>
        <p>メンション付きでツイートすることで相手に通知を飛ばして交渉を始めます</p>
        <Link to="/nego"><b>交渉イメージ</b></Link>
      </Grid>
    </Grid>
  </div>
);

export default SellRequest;
