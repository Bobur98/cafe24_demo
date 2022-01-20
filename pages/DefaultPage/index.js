import React from 'react';
import CurStatus from '../../component/curStatus';
import OrderStatus from '../../component/orderStatus';
import SystemAnn from '../../component/systemAnn';
import styles from './styles.module.css';
import useSWR from 'swr';
const fetcher = async () => {
  const res = await fetch('http://localhost:4000/curStatus');
  const data = await res.json();
  return data;
};

const CourrentStatusPage = () => {
  const { data, error } = useSWR('curStatus', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';
  return (
    <div className={styles.mainContainer}>
      <CurStatus />
      <div className={styles.barContainer}>
        <OrderStatus />
        <OrderStatus />
      </div>

      <SystemAnn />
    </div>
  );
};

export default CourrentStatusPage;
