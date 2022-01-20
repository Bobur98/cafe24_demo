import React from 'react';
import SearchArea from '../../component/searchArea';
import SearchResult from '../../component/searchResult';
import SummaryArea from '../../component/summaryArea';
import styles from './styles.module.css';
const SalesCompanyPage = () => {
  return (
    <div className={styles.container}>
      <SearchArea />
      <SearchResult />
      <SummaryArea />
    </div>
  );
};

export default SalesCompanyPage;
