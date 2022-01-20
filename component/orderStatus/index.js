import Link from 'next/link';
import styles from './orderStatus.module.css';

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';
import useSWR from 'swr';
const data = [
  {
    name: 'bar1',
    value: 2000,
  },
  {
    name: 'bar2',
    value: 1000,
  },
  {
    name: 'bar3',
    value: 3000,
  },
  {
    name: 'bar4',
    value: 4000,
  },
  {
    name: 'bar5',
    value: 1520,
  },
  {
    name: 'bar6',
    value: 1900,
  },
  {
    name: 'bar7',
    value: 2610,
  },
  {
    name: 'bar8',
    value: 3333,
  },
  {
    name: 'bar9',
    value: 1111,
  },
];
// const fetcher = async () => {
//   const res = await fetch('http://localhost:4000/barData');
//   const data = await res.json();
//   return data;
// };
export default function OrderBar() {
  // const { data, error } = useSWR('curStatus', fetcher);
  // if (error) return 'An error has occured';
  // if (!data) return 'Loading';
  // console.log(data);
  const uiData = data.slice(0, 7);

  const current = new Date();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h5>
          주문현황 (최근 1개월)
          <Link href={'/component/orderStatus/1'}>
            <a className={styles.link}>{'더보기>'}</a>
          </Link>{' '}
        </h5>
        <div className={styles.subContainer}>
          <div className={styles.dateContainer}>
            <span>단위:건수</span>
            <span>
              업데이트 일시: {current.getFullYear()}-{current.getMonth() + 1}-
              {current.getDay()} {current.getHours()}:{current.getMinutes()}
            </span>
          </div>
          {/* <div width={'30vw'} height={'15vw'}> */}
          <ResponsiveContainer width={450} height={250}>
            <BarChart data={uiData} fontSize={14} barSize={20}>
              <Tooltip />

              <CartesianGrid vertical={false} stroke="#d6d9da" />
              <XAxis dataKey="name" tickLine={false} padding={{ left: 25 }} />
              <YAxis tickLine={false} axisLine={false} width={35} />
              <Bar dataKey="value" fill="#3666be" />
            </BarChart>
          </ResponsiveContainer>{' '}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

// http://www.coding-dude.com/wp/html5/bar-chart-html/
// https://www.w3schools.com/js/tryit.asp?filename=tryai_chartjs_bars_colors_more
