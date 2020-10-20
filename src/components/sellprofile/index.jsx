/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';

const SellProfile = () => (
  <div>
    <h4>プロフィールの作成方法 - RTしてもらいたい方が行うこと</h4>
    <img src="../retwpay_sell_profile.jpg" width="63%" height="auto" />
    <p>プロフィールを作成することでリストされます。これにより他のユーザーからの連絡を待つことできます。すべての項目は必須ではありません</p>
      <ol>
        <li>公開ユーザー名 - Retwpay内のユーザー名です。Twitterのユーザー名とは別です</li>
        <li>拡散希望 - "はい"を選択するとRetwpay(売る)画面に「RTを買いたいユーザー」としてリストされます</li>
        <li>SNS twitter - 自分のツイッターアカウントのURLを入力します</li>
        <li>Twitter DM - DMを受け取りたい場合Twitter IDを入力します。Twitter IDは数字です。ツイッターで"すべてのユーザーからメッセージを受信する"設定をしておく必要があります</li>
        <li>利用可能なペイメント - 報酬の支払いが可能な電子マネーを選択します</li>
        <li>フォロワー単価 - 「単価 x RTしてくれた人のフォロワー数」が支払う報酬額になります</li>
        <li>支払報酬の上限 - 自分が支払える報酬の上限額です</li>
        <li>拡散を希望するツイート - RTしてほしいツイートのURLを入力します</li>
      </ol>
  </div>
);

export default SellProfile;
