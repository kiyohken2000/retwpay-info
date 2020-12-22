import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import screennShots from './screenShots';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

export default function AppScreenShots() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h2>アプリ利用イメージ</h2>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5} cellHeight={350}>
          {screennShots.map((shot) => (
            <GridListTile key={shot.img} style={{width:"auto", height:"auto"}}>
              <img src={shot.img} alt={shot.title} style={{width:"60%", height:"auto"}}/>
              <GridListTileBar
                title={shot.title}
                classes={{
                root: classes.titleBar,
                title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}