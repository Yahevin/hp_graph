import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import styles from './Graph.module.css';
import { getData } from '@/utils/getData';
import { Student } from '@/types';


type Props = { students: Student[] };

export const Graph = ({ students }: Props) => {
  const data = getData(students);
  const maxValue = data.reduce((max, current) => {
    return current.count > max ? current.count : max;
  }, 0);

  return (
    <div className={styles.wrap}>
      <RadarChart outerRadius={200} width={630} height={460} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='house' />
        <PolarRadiusAxis angle={0} domain={[0, maxValue]} />
        <Radar dataKey='count' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};