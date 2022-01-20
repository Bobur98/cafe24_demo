import React from 'react';
import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span>CAFE24</span>
        <span>user</span>
      </div>
    </div>
  );
};

export default Header;
