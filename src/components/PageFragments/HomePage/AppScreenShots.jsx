import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import screennShots from './screenShots';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    flexWrap: 'nowrap',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
};

export default function AppScreenShots() {
  return (
    <div>
      <div>
        <h2>アプリ利用イメージ</h2>
      </div>
      <div style={styles.root}>
        <ImageList style={styles.imageList} cols={2.5} rowHeight={350}>
          {screennShots.map((shot) => (
            <ImageListItem key={shot.img} style={{ width: 'auto', height: 'auto' }}>
              <img src={shot.img} alt={shot.title} style={{ width: '60%', height: 'auto' }} />
              <ImageListItemBar title={shot.title} sx={{ '&': styles.titleBar }} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
