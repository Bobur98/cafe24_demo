import Image from 'next/image';
import React, { useState } from 'react';
import SearchIcon from '../../utils/icon/search.png';
import Pagination from '../pagination';
import styles from './styles.module.css';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/sellerSearch');
  const data = await res.json();
  return data;
};
const SellerSearch = () => {
  const { data, error } = useSWR('sellerSearch', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';

  const uiData = data.slice(0, 8);

  return (
    <div className={styles.container}>
      <span>판매사검색</span>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>
          <Image width={22} height={22} alt="search" src={SearchIcon} />
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="판매사검명 OR 상점아이디"
        />
      </div>
      <span>판매사 검색 결과 {data.length}건</span>

      {uiData.map((value) => (
        <div className={styles.resultContainer} key={value.id}>
          <div>{value.market}</div>
        </div>
      ))}

      <Pagination data={data} />
    </div>
  );
};

export default SellerSearch;
