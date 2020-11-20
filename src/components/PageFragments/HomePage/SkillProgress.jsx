import React from 'react';
import Grid from '@material-ui/core/Grid';

const SkillsProgress = () => (
  <div>
    <h2>アプリ利用イメージ</h2>
    <Grid container>
      <Grid item sm={5} md={3}><img src="../ss1.png" width="60%" height="auto" alt="screenshot1"/></Grid>
      <Grid item sm={5} md={3}><img src="../ss2.png" width="60%" height="auto" alt="screenshot2"/></Grid>
      <Grid item sm={5} md={3}><img src="../ss3.png" width="60%" height="auto" alt="screenshot3"/></Grid>
      <Grid item sm={5} md={3}><img src="../ss4.png" width="60%" height="auto" alt="screenshot3"/></Grid>
    </Grid>
  </div>
);

export default SkillsProgress;
