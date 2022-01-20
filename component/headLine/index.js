import React from 'react';
import styles from './styles.module.css';
const Headline = ({ title }) => {
  return (
    <div className={styles.headline}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

export default Headline;
