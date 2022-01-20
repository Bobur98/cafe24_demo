import React from 'react';
import styles from './styles.module.css';
import SearchIcon from '../../utils/icon/search.png';
import Image from 'next/image';
import Headline from '../headLine';
const Search = () => {
  return (
    <div className={styles.container}>
      <Headline title={'입점현황'} />

      <table
        className={styles.table}
        // style={{ border: '1px solid gray', borderCollapse: 'collapse' }}
      >
        <tbody>
          <tr>
            <th className={styles.th}>판매사명</th>
            <td
              className={styles.table}
              style={{ paddingLeft: '1rem', backgroundColor: '#fff' }}
            >
              <div className={styles.searchIcon}>
                <Image width={18} height={18} alt="search" src={SearchIcon} />
              </div>
              <input type="text" placeholder="판매사명" />
            </td>
          </tr>
          <tr>
            <th className={styles.th}>입점 신청 일사</th>
            <td
              style={{ backgroundColor: '#ffffff' }}
              className={styles.secondLine}
            >
              <input type="date" /> ~ <input type="date" />
              <div className={styles.dayContainer}>
                <div>오늘</div>
                <div>7일</div>
                <div>30일</div>
                <div>3월</div>
                <div>6월</div>
                <div>전체</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.btnContainer}>
        <button>검색</button>
        <button>초기화</button>
      </div>
    </div>
  );
};

export default Search;
