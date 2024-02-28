import React, { useMemo, useState } from 'react';
import styles from './Main.module.css';
import { Form } from '@/components/Form/Form';
import { Graph } from '@/components/Graph/Graph';
import { filter } from '@/utils/filter';
import { getBorders } from '@/utils/getBorders';
import { InitialProps, SubmitProps } from '@/types';

export const Main = (initialProps: InitialProps) => {
  const [students, setStudents] = useState(initialProps.students);

  const updateGraph = ({ dateTo, dateFrom }: SubmitProps) => {
    setStudents(filter({
      students: initialProps.students,
      dateTo, dateFrom,
    }));
  };

  const [maxDate, minDate] = useMemo(() => getBorders(initialProps.students), []);

  return (
    <div className={styles.wrap}>
      <Graph students={students} />
      <Form onSubmit={updateGraph} maxDate={maxDate} minDate={minDate} />
    </div>
  );
};
