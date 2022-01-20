import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import ArrowRight from '../../utils/icon/arrow-right.svg';
import ArrowLeft from '../../utils/icon/arrow-left.svg';

import Image from 'next/image';
const data = [
  { id: 1, title: '입점' },
  { id: 2, subtitle: '입점현황', link: 'curStatusOfEntryPage' },
  { id: 3, subtitle: '판매사 관리', link: 'managingSalesCompPage' },
  { id: 4, subtitle: '공급사 관리', link: 'supplierManagementPage' },
  { id: 5, title: '매출' },
  { id: 6, subtitle: '매출 현황', link: 'salesStatusPage' },
  { id: 7, subtitle: '판매사 매출', link: 'salesOfSellerPage' },
  { id: 8, subtitle: '공급사 매출', link: 'salesOfSupplierPage' },
  { id: 9, title: '공급사항' },
  { id: 10, subtitle: '시스템 공급사항', link: 'systemSuppliesPage' },
];

const SideBar = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={styles.bodyContainer}>
      <section
        className={
          (styles.sideBar, inactive ? styles.inactive : styles.sideBar)
        }
      >
        {/* <button className={styles.btn} onClick={() => setInactive(!inactive)}>
          {'<'}{' '}
        </button> */}
        <div className={styles.mainContainer}>
          <div className={styles.topSectionContainer}>
            <button
              className={styles.btn}
              onClick={() => setInactive(!inactive)}
            >
              {/* {!inactive ? '<' : '>'} */}
              {!inactive ? (
                <Image
                  alt="arrow-left"
                  width={30}
                  height={30}
                  src={ArrowLeft}
                  rrrrr
                />
              ) : (
                <Image
                  width={30}
                  height={30}
                  alt="arrow-right"
                  src={ArrowRight}
                />
              )}
            </button>
            <span>products</span>
          </div>

          {data.map((menu) => {
            return (
              <div key={menu.id}>
                <span>{menu.title}</span>

                <div className={styles.container}>
                  <li className={styles.subContainer}>
                    <Link href={`/${menu.link}`} passHref>
                      <a className={styles.link}>
                        {' '}
                        <span>{menu.subtitle}</span>{' '}
                        {menu.subtitle ? (
                          <span className={styles.arrow}>
                            <Image
                              className={styles.icon}
                              alt="arrow-right"
                              src={ArrowRight}
                            />
                          </span>
                        ) : (
                          //   <span className={styles.arrow}>{'>'}</span>
                          ''
                        )}
                      </a>
                    </Link>
                  </li>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
