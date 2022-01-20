import React from 'react';
import Headline from '../../component/headLine';
import SalesStatusSearch from '../../component/salesStatusSearch';
import SearchResult from '../../component/searchResult';
import styles from './styles.module.css';
const SalesStatusPage = () => {
  return (
    <div className={styles.container}>
      <Headline title="매출 현황" />
      <SalesStatusSearch />
      <SearchResult />
    </div>
  );
};

export default SalesStatusPage;
