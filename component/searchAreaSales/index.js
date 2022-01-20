import React from 'react';
import styles from './styles.module.css';
const SearchAreaSales = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.th}>판매사</th>
            <td style={{ paddingLeft: '1rem' }}>
              <select className={styles.select} name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </td>
          </tr>
          <tr>
            <th className={styles.th}>검색 기간</th>
            <td className={styles.secondLine}>
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
          <tr>
            <th className={styles.th}>분류 기준</th>
            <td className={styles.secondLine}>
              <input type="radio" checked /> <label>일별</label>
              <input type="radio" />
              <label>월별</label>
              <input type="radio" />
              <label>주별</label>
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

export default SearchAreaSales;
