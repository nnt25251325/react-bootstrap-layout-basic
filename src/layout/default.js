import React, { Suspense } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import { RouterLoading, MainHeader, MainFooter } from '../components';

export default ({ children }) => {
  return (
    <Suspense fallback={<RouterLoading />}>
      <div className="l-default">
        <MainHeader />

        <div className="main-body py-4">
          <Container>
            <Row>
              <Col lg={4}>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

                <ListGroup className="mb-3">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col lg={8}>{children}</Col>
            </Row>
          </Container>
        </div>

        <MainFooter />
      </div>
    </Suspense>
  );
};
