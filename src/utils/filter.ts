import moment from 'moment';
import { Student, SubmitProps } from '@/types';

export const filter = ({ students, dateTo, dateFrom }: SubmitProps & { students: Student[] }) => {

  return students.filter((item) => {
    const date = moment(item.dateOfBirth, 'DD-MM-YYYY').toDate().getTime();
    const leftBorder = new Date(dateFrom).getTime();
    const rightBorder = new Date(dateTo).getTime();

    if (!date) {
      return false;
    }
    if (!isNaN(leftBorder) && leftBorder > date) {
      return false;
    }
    if (!isNaN(rightBorder) && rightBorder < date) {
      return false;
    }
    return true;
  });
};