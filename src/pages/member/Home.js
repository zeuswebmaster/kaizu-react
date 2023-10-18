import React from 'react';
import Header from '../../components/member/Header';
import Footer from '../../components/member/Footer';
import SidebarMenu from '../../components/member/SidebarMenu';
import styles from '../../styles/member.module.scss';

const AppHome = () => {
  return (
    <div className={styles.member}>
      <Header />
      <div className={styles.contentWrapper}>
        <SidebarMenu />
        <div className={styles.mainColumn}>
          <div className={styles.innerMainColumn}>
            <h1>Home</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppHome;
