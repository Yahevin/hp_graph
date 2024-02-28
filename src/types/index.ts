export type Student = {
  dateOfBirth: string;
  house: string;
  id: string;
};

export type InitialProps = {
  students: Student[];
};

export type SubmitProps = { dateFrom: string, dateTo: string }
