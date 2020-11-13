/* eslint-disable func-names */
/* Vendor imports */
import React from 'react';

import Grid from '@material-ui/core/Grid';

const Intro = () => (
  <div>
    <h4>アプリユーザーはリストされたユーザーの属性を見てそのユーザーとコンタクトをとります</h4>
    <p>Retwpayにはユーザー同士で直接メッセージをやりとりする機能はありません</p>
    <p>交渉にはツイッターの<mark>スレッド機能</mark>や<mark>DM機能</mark>を使います</p>
    <p>Retwpayアプリの機能は、</p>
          <ol>
            <li>RT/宣伝ツイートの販売/購入を希望するユーザーを一覧すること</li>
            <li>アプリユーザーがリストされているユーザーに声をかけるときのテンプレートを作成することです</li>
          </ol>
    <Grid container justify="center">
      <Grid item sm={6} md={6}><img src="../retwpay_buy_ss.jpg" width="63%" height="auto" /></Grid>
      <Grid item sm={6} md={6}><img src="../retwpay_sell_ss.jpg" width="63%" height="auto" /></Grid>
    </Grid>
  </div>
);

export default Intro;
