import React, { useState } from 'react';
import styles from './styles.module.css';
import arrowLeft from '../../utils/icon/arrow-left.svg';
import fastArrowLeft from '../../utils/icon/fast-arrow-left.svg';
import arrowRight from '../../utils/icon/arrow-right.svg';
import fastArrowRight from '../../utils/icon/fast-arrow-right.svg';
import Image from 'next/image';
const Pagination = ({ data, pageSize, currentPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(9);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClickNumber = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
    pages.push(i);
  }

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleLastBtn = () => {
    setCurrentPage(pages.length);
    if (currentPage == currentPage) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handleStartBtn = () => {
    setCurrentPage(pages[0]);

    if (currentPage % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  console.log(currentPage);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClickNumber}
          className={currentPage === number ? styles.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      {' '}
      <div className={styles.pageNumbers}>
        <button
          onClick={handleStartBtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          <Image
            alt="fast-arrow-left"
            width={20}
            height={20}
            src={fastArrowLeft}
          />
        </button>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          <Image alt="arrow-left" width={20} height={20} src={arrowLeft} />
        </button>
        {renderPageNumbers}

        <button
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          <Image alt="arrow-right" width={20} height={20} src={arrowRight} />
        </button>
        <button
          onClick={handleLastBtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          <Image
            alt="fast-arrow-right"
            width={20}
            height={20}
            src={fastArrowRight}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
