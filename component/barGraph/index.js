import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import useSWR from 'swr';
import styles from './styles.module.css';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/barData');
  const data = await res.json();
  return data;
};
// const data = [
//   {
//     name: 'Page A',
//     value: 4000,
//   },
//   {
//     name: 'Page B',
//     value: 3000,
//   },
//   {
//     name: 'Page C',
//     value: 2000,
//   },
//   {
//     name: 'Page D',
//     value: 2780,
//   },
//   {
//     name: 'Page E',
//     value: 1890,
//   },
//   {
//     name: 'Page F',
//     value: 2390,
//   },
//   {
//     name: 'Page G',
//     value: 3490,
//   },
// ];
const BarGraph = () => {
  const { data, error } = useSWR('curStatus', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';
  console.log(data);
  const uiData = data.slice(0, 7);

  return (
    <div>
      <ResponsiveContainer width={400} height={250}>
        <BarChart data={uiData} fontSize={14} barSize={20}>
          <Tooltip />
          <CartesianGrid vertical={false} stroke="#d6d9da" />
          <XAxis dataKey="name" tickLine={false} padding={{ left: 25 }} />
          <YAxis tickLine={false} axisLine={false} width={35} />
          <Bar dataKey="value" fill="#3666be" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
