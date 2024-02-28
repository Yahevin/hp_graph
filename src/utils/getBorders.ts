import moment from 'moment';
import { Student } from '@/types';


export const getBorders = (students: Student[]) => {
  let maxDate = 0;
  let minDate = Infinity;

  students.forEach((item) => {
    const date = moment(item.dateOfBirth, 'DD-MM-YYYY').toDate().getTime();

    if (!date) {
      return;
    }

    if (maxDate < date) {
      maxDate = date;
    }
    if (minDate > date) {
      minDate = date;
    }
  });

  return [new Date(maxDate), new Date(minDate)];
};