import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import StarIcon from '../../utils/icon/star.png';
import styles from './systemAnn.module.css';
const fetcher = async () => {
  const res = await fetch('http://localhost:4000/systemAnn');
  const data = await res.json();
  return data;
};
const SystemAnn = () => {
  const { data, error } = useSWR('systemAnn', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';
  const slicedData = data.slice(0, 5);
  return (
    <div className={styles.mainContainer}>
      <h2>
        시스템 공지{' '}
        <Link href={'user/component/systemAnn/1'}>
          <a className={styles.seeMoreLink}>{'더보기>'}</a>
        </Link>
      </h2>
      <div className={styles.container}>
        {slicedData.map((value) => (
          <ul className={styles.wrapper} key={value.id}>
            <li className={styles.innerWrapepr}>
              <Link href="user/component/systemAnn/1" passHref>
                <a>
                  {'*'} <span>{'[중요]'}</span>
                  {value.notice}
                  <Image width={11} height={11} alt="star" src={StarIcon} />
                  {value.exchange}
                </a>
              </Link>
              <span>{value.date}</span>
            </li>
            <hr />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SystemAnn;
