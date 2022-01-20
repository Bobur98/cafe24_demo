import React from 'react';
import BarGraph from '../../component/barGraph';
import CurStatus from '../../component/curStatus';
import Headline from '../../component/headLine';
import SearchResult from '../../component/searchResult';
import SellerSearch from '../../component/sellerSearch';
import styles from './styles.module.css';
const ManagingSalesCompPage = () => {
  return (
    <div className={styles.container}>
      <Headline title="판매사관리" />
      <div className={styles.wrapper}>
        <div>
          <SellerSearch />
        </div>
        <div className={styles.vl} />
        <div className={styles.cursearchcon}>
          <CurStatus />
          <span className={styles.span}>공급사 목록</span>
          <SearchResult />
          {/* <BarGraph /> */}
        </div>
      </div>
    </div>
  );
};

export default ManagingSalesCompPage;
