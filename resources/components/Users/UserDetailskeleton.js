import React from 'react';
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const UserDetailskeleton = () => {
  return (
    <>
      <Col xs={12} md={4} lg={4} >
        <Skeleton style={{ borderRadius: 5 }} height={600}>
        </Skeleton>
      </Col>
      <Col xs={12} md={7} lg={7} >
        <Skeleton style={{ borderRadius: 5 }} height={600}>
        </Skeleton>
      </Col>
    </>
  );
};

export default UserDetailskeleton;