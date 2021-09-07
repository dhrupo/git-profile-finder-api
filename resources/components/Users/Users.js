import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import GithubContext from '../../context/GithubContext';
import UserCard from './UserCard';
import UsersSkeleton from './UsersSkeleton';

const Users = () => {
  const { loading, users } = useContext(GithubContext);
  return (
    <Container fluid>
      {loading ?
        <UsersSkeleton></UsersSkeleton>
        :
        <Row className="users__components" sm={1} md={2} lg={4}>
          {
            users.items && users.items.map(user => (
              <UserCard key={user.id} user={user}></UserCard>
            ))
          }
        </Row>
      }
    </Container>
  )
};

export default Users;