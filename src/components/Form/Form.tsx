import { useState } from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SubmitProps } from '@/types';
import styles from './Form.module.css';

type Props = {
  onSubmit: (props: SubmitProps) => void;
  maxDate: Date;
  minDate: Date;
};

export const Form = ({ onSubmit, minDate, maxDate }: Props) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleOnClick = () => {
    onSubmit({ dateFrom, dateTo });
  };

  return (
    <Stack spacing={2} direction='row' alignItems='center' justifyContent='center'>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
        <DatePicker
          label='dateFrom'
          value={dateFrom || null}
          onChange={(newValue) => setDateFrom(newValue)}
          minDate={dayjs(minDate)}
          maxDate={dayjs(maxDate)}
        />
        <DatePicker
          label='dateTo'
          value={dateTo || null}
          onChange={(newValue) => setDateTo(newValue)}
          minDate={dayjs(minDate)}
          maxDate={dayjs(maxDate)}
        />
      </LocalizationProvider>

      <Button className={styles.button} onClick={handleOnClick} variant='outlined'>Submit</Button>
    </Stack>
  );
};