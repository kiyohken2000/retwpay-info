import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

import { Helmet } from 'react-helmet';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
    <>
    <Helmet>
    <meta property="og:image" content="https://retwpay.ml/Icon-256.png" />
    </Helmet>
      <div className={style.circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ? style.openMenu : null}`}>
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            <li className={style.navItem}>
              <Link to="/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                トップ
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/buy" onClick={toggleMenu} activeClassName={style.anchorActive}>
                買い方
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/sell" onClick={toggleMenu} activeClassName={style.anchorActive}>
                売り方
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/blog" onClick={toggleMenu} activeClassName={style.anchorActive}>
                ブログ
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/contact" onClick={toggleMenu} activeClassName={style.anchorActive}>
                ご依頼
              </Link>
            </li>
            {/*
            <li className={style.navItem}>
              <Link to="/tags" onClick={toggleMenu} activeClassName={style.anchorActive}>
                タグ
              </Link>
            </li>
            */}
          </ul>
        </div>
      </Layout>
    </>
  );
};
