import React, { useState } from 'react';
import styles from './styles.module.css';
import Head from 'next/head';
import Header from '../header';
import SideBar from '../sideBar';

const Layout = ({ children }) => {
  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Cafe 24</title>
      </Head>

      {/* HEADER */}
      <Header />

      <div className={styles.wrapper}>
        {/* SIDE BAR */}
        <SideBar />

        {/* BODY SECTION */}
        <section className={styles.bodySection}>{children}</section>
      </div>
    </div>
  );
};

export default Layout;
