import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: 'den' },
  //     { id: 2, name: 'kirill' },
  //     { id: 3, name: 'john' },
  //   ]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //       const data = await response.json();
  //       setUsers(data);
  //     }
  //     fetchData();
  //   }, []);
  return (
    <>
      <MainContainer keywords={'users page'}>
        <h1>Users page</h1>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </MainContainer>
    </>
  );
};
export default Users;
export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
