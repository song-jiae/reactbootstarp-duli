import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Shop() {
  return (
    <div>
      <h2>둘리 쇼핑몰</h2>
      <p>둘리와 관련된 다양한 상품들을 만나보세요!</p>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC%20Product1" />
            <Card.Body>
              <Card.Title>둘리 인형</Card.Title>
              <Card.Text>
                귀여운 둘리 인형입니다. 집에 하나 장만해보세요!
              </Card.Text>
              <Button variant="primary">구매하기</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC%20Product2" />
            <Card.Body>
              <Card.Title>둘리 티셔츠</Card.Title>
              <Card.Text>
                둘리의 귀여운 얼굴이 그려진 티셔츠입니다. 모두의 관심을 끌게 될 거예요!
              </Card.Text>
              <Button variant="primary">구매하기</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
