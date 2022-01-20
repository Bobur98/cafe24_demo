import React from 'react';
import styles from './styles.module.css';
const SummaryArea = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <td>조회기간</td>
            <td>date-period</td>
            <td>입점신청</td>
            <td>total</td>
            <td>입점완료</td>
            <td>total</td>
            <td>입점보류</td>
            <td>total</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryArea;
