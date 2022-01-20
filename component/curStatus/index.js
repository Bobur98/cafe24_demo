import React from 'react';
import Link from 'next/link';
import styles from './curStatus.module.css';
import useSWR from 'swr';
const fetcher = async () => {
  const res = await fetch('http://localhost:4000/curStatus');
  const data = await res.json();
  return data;
};
const CurStatus = () => {
  const { data, error } = useSWR('curStatus', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';
  console.log(data);
  const uiData = data.slice(0, 3);
  return (
    <div className={styles.mainContainer}>
      <h5>
        입점현황 (최근 1개월){' '}
        <Link href={'/component/curStatus/1'}>
          <a className={styles.link}>{'더보기>'}</a>
        </Link>
      </h5>

      <div className={styles.subContainer}>
        {uiData.map((data) => (
          <div className={styles.container} key={data.no}>
            <div>{data.no}</div>
            <div>{data.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurStatus;
