import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const UsersSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill('')
        ?.map((users, index) => (
          <Col xs={12} md={6} lg={3} className="my-2" key={index} >
            <Skeleton style={{ borderRadius: 10 }} height={300}>
            </Skeleton>
          </Col>
        ))}
    </Row >
  );
};

export default UsersSkeleton;