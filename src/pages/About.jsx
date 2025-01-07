import React from 'react';
import { Card, ListGroup, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h2 className="text-center mb-5">둘리와 친구들</h2>
      
      <Alert variant="info">
        둘리와 그의 친구들은 서로 돕고, 함께 성장하는 귀여운 캐릭터들입니다!
      </Alert>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC" />
            <Card.Body>
              <Card.Title>둘리</Card.Title>
              <Card.Text>
                둘리는 1,000년을 떠돌아다닌 공룡으로, 많은 모험을 겪고 성장한 캐릭터입니다.
              </Card.Text>
              <Button variant="primary" href="/stories">둘리의 이야기 보기</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC" />
            <Card.Body>
              <Card.Title>또치</Card.Title>
              <Card.Text>
                용감한 또치는 둘리와 함께 여러 가지 모험을 떠납니다.
              </Card.Text>
              <Button variant="primary" href="/stories">또치와 모험하기</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mt-5">둘리의 친구들</h3>
      <ListGroup className="mt-4">
        <ListGroup.Item>또치 - 용감한 친구</ListGroup.Item>
        <ListGroup.Item>희동이 - 장난꾸러기 친구</ListGroup.Item>
        <ListGroup.Item>마이콜 - 든든한 친구</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default About;
