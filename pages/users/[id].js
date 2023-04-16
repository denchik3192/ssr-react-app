import { useRouter } from 'next/router';
import s from '../../styles/user.module.scss';

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <>
      <h1>User with id: {query.id}</h1>
      <div className={s.userName}>{user.name}</div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
