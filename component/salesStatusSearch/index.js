import React from 'react';
import styles from './styles.module.css';
const SalesStatusSearch = () => {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.th}>분류 기준</th>
            <td
              className={styles.table}
              style={{ paddingLeft: '1rem', backgroundColor: '#fff' }}
            >
              <input type="radio" checked /> <label>일별</label>
              <input type="radio" />
              <label>월별</label>
              <input type="radio" />
              <label>주별</label>
              <input type="radio" />
              <label>연별</label>
            </td>
          </tr>
          <tr>
            <th className={styles.th}>검색 기간</th>
            <td
              style={{ backgroundColor: '#ffffff' }}
              className={styles.secondLine}
            >
              <input type="date" /> ~ <input type="date" />
              <div className={styles.dayContainer}>
                <div>오늘</div>
                <div>7일</div>
                <div>30일</div>
                <div>3개월</div>
                <div>6개월</div>
                <div>1년</div>
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

export default SalesStatusSearch;
