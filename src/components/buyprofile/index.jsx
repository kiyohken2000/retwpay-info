/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';

const BuyProfile = () => (
  <div>
    <h4>プロフィールの作成方法 - RTをして報酬を受け取りたい方が行うこと</h4>
    <img src="../retwpay_buy_profile.jpg" width="63%" height="auto" />
    <p>プロフィールを作成することでリストされます。これによりRT/宣伝をしてほしいユーザーからの連絡を待つことができます。すべての項目は必須ではありません</p>
      <ol>
        <li>公開ユーザー名 - Retwpay内のユーザー名です。Twitterのユーザー名とは別です</li>
        <li>拡散依頼 - "はい"を選択するとRetwpay(買う)画面に「RTを売りたいユーザー」としてリストされます</li>
        <li>SNS twitter - 自分のツイッターアカウントのURLを入力します</li>
        <li>Twitter DM - DMを受け取りたい場合Twitter IDを入力します。Twitter IDは数字です。ツイッターで"すべてのユーザーからメッセージを受信する"設定をしておく必要があります</li>
        <li>利用可能なペイメント - 報酬の受け取りが可能な電子マネーを選択します</li>
        <li>フォロワー単価 - 自分のフォロワー1人当たりの単価です</li>
        <li>フォロワー数 - 自分のフォロワー数を申告します。「単価 x フォロワー数」が希望報酬額の目安となります</li>
        <li>RT依頼のみを受け付ける - RT依頼のみを請け負うか、それ以外の拡散方法(コメント付きRTなど)も請け負うかを選択します</li>
      </ol>
  </div>
);

export default BuyProfile;
