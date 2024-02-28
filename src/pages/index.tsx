import { GetStaticProps } from 'next';
import { Main } from '@/components/Main/Main';
import { request } from '@/utils/request';
import { InitialProps, Student } from '@/types';

export default function Home(props: InitialProps) {
  return <Main students={props.students} />;
}

export const getStaticProps: GetStaticProps<InitialProps> = async () => {
  const studentsRaw: Student[] = (await request()) ?? [];
  const students = studentsRaw.map(({ id, dateOfBirth, house }) => ({
    id,
    house,
    dateOfBirth,
  }));
  return { props: { students } };
};
