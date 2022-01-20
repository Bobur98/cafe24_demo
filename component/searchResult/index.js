import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import styles from './styles.module.css';
import _, { every } from 'lodash';
import Pagination from '../pagination';

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(9);

  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const columns = useMemo(() => COLUMNS, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useMemo(() => MOCK_DATA, []);
  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;
  ///////////////////////////////////////////////////////////////////////////
  // const { pageIndex, pageSize } = state;
  // console.log(pageSize);

  // const pageNumbers = 9;
  // let pages = _.range(1, pageNumbers + 1);

  // const handleClick = (event) => {
  //   const page = event.target.value ? Number(e.target.value) - 1 : 0;
  //   gotoPage(page);
  // };
  // const renderPageNumbers = pages.map((number) => {
  //   return (
  //     <li
  //       key={number}
  //       id={number}
  //       onClick={handleClick}
  //       className={currentPage === number ? styles.active : null}
  //     >
  //       {number}
  //     </li>
  //   );
  // });
  ////////////////////////////////////////////////////////////////////////////

  // const handleClickNumber = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };
  // const handleClick = (event) => {
  //   const page = event.target.value ? Number(e.target.value) - 1 : 0;
  //   gotoPage(page);
  //   console.log(event);
  // };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
    pages.push(i);
  }

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // const renderPageNumbers = pages.map((number) => {
  //   if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
  //     return (
  //       <li
  //         key={number}
  //         id={number}
  //         onClick={handleClickNumber}
  //         className={currentPage === number ? styles.active : null}
  //       >
  //         {number}
  //       </li>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const handleNextbtn = () => {
  //   setCurrentPage(currentPage + 1);

  //   if (currentPage + 1 > maxPageNumberLimit) {
  //     setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
  //     setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  //   }
  //   console.log(currentPage);
  // };

  // const handlePrevbtn = () => {
  //   setCurrentPage(currentPage - 1);

  //   if ((currentPage - 1) % pageNumberLimit == 0) {
  //     setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
  //     setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  //   }
  //   console.log(currentPage);
  // };

  // const handleLastBtn = () => {
  //   setCurrentPage(pages.length);

  //   if (currentPage == pages.length) {
  //     gotoPage(currentPage);
  //   }
  //   console.log(currentPage);
  // };
  // console.log(`pages: ${pages.length}`);
  // console.log(`pageSize: ${pageSize}`);

  return (
    <>
      <table key={data.id} {...getTableProps()} className={styles.table}>
        <thead className={styles.thead} key={data.id}>
          <tr>
            <th colSpan="6">
              <div className={styles.select}>
                <select
                  style={{ float: 'right' }}
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value)), setCurrentPage(1);
                  }}
                >
                  {[10, 20].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
                <button>download</button>
              </div>
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr key={data.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={data.id} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className={styles.tbody} {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr key={data.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={data.id} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className={styles.pageNumbers}>
        <button onClick={() => gotoPage(pages[0])} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          {'<'}
        </button>
        {renderPageNumbers}

        <button
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          {'>'}
        </button>
        <button onClick={() => gotoPage(pages.length)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div> */}
      <Pagination
        data={data}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default SearchResult;
