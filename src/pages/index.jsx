import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import Footer from '../components/PageLayout/Footer';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import RecentBlog from '../components/PageFragments/HomePage/RecentBlog';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
          <RecentBlog />
        </>
      <Footer />
      </SidebarWrapper>
    </Layout>
  </Layout>
);
