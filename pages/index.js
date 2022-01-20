import Layout from '../component/layout';
import Auth from './AuthForm';
import CurStatus from '../component/curStatus';
import OrderBar from '../component/orderStatus';
import Search from '../component/searchArea';
import SystemAnn from '../component/systemAnn';
import SearchResult from '../component/searchResult';
import SummaryArea from '../component/summaryArea';
import SalesCompanyPage from './curStatusOfEntryPage';
import SellerSearch from '../component/sellerSearch';
import Pagination from '../component/pagination';
import ManagingSalesCompPage from './managingSalesCompPage';
import SalesStatusSearch from '../component/salesStatusSearch';
import SalesStatusPage from './salesStatusPage';
import SearchAreaSales from '../component/searchAreaSales';
import CurrentStatusPage from './DefaultPage';
import BarGraph from '../component/barGraph';
import DraftEditor from '../component/editor';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <Layout> */}
      {/* <SalesCompanyPage /> */}
      {/* <SellerSearch /> */}
      {/* <ManagingSalesCompPage /> */}
      {/* <SalesStatusPage /> */}
      {/* <SearchAreaSales /> */}
      {/* <DraftEditor /> */}
      {/* </Layout> */}
      {/* <BarGraph /> */}

      <CurrentStatusPage />
    </>
  );
}
