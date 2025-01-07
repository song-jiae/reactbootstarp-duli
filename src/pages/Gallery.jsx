import React from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';

function Gallery() {
  const characters = {
    duli: {
      name: "둘리",
      description: "시간 여행을 떠난 공룡. 마법 같은 능력과 순수한 마음을 가진 둘리.",
      img: "https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC"
    },
    tochi: {
      name: "또치",
      description: "둘리의 용감한 친구이자, 좋은 마음을 가진 개성 강한 캐릭터.",
      img: "https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC%20%EB%91%98%EB%A6%AC"
    },
    hidoongi: {
      name: "희동이",
      description: "둘리의 장난꾸러기 친구로, 늘 새로운 장난을 시도하는 캐릭터.",
      img: "https://via.placeholder.com/150?text=%ED%9D%AC%EB%8F%99%EC%9D%B4"
    },
    maikol: {
      name: "마이콜",
      description: "둘리의 든든한 친구, 멋진 외모와 친절한 성격을 가진 인물.",
      img: "https://via.placeholder.com/150?text=%EB%A7%88%EC%9D%B4%EC%BD%9C"
    }
  };

  return (
    <Container>
      <h2 className="text-center mb-5">둘리의 등장인물</h2>
      <Tabs defaultActiveKey="duli" id="character-tabs">
        {/* 둘리 탭 */}
        <Tab eventKey="duli" title="둘리">
          <Row className="mt-4">
            <Col sm={12} md={6}>
              <Card>
                <Card.Img variant="top" src={characters.duli.img} />
                <Card.Body>
                  <Card.Title>{characters.duli.name}</Card.Title>
                  <Card.Text>{characters.duli.description}</Card.Text>
                  <Button variant="primary">자세히 보기</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        {/* 또치 탭 */}
        <Tab eventKey="tochi" title="또치">
          <Row className="mt-4">
            <Col sm={12} md={6}>
              <Card>
                <Card.Img variant="top" src={characters.tochi.img} />
                <Card.Body>
                  <Card.Title>{characters.tochi.name}</Card.Title>
                  <Card.Text>{characters.tochi.description}</Card.Text>
                  <Button variant="primary">자세히 보기</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        {/* 희동이 탭 */}
        <Tab eventKey="hidoongi" title="희동이">
          <Row className="mt-4">
            <Col sm={12} md={6}>
              <Card>
                <Card.Img variant="top" src={characters.hidoongi.img} />
                <Card.Body>
                  <Card.Title>{characters.hidoongi.name}</Card.Title>
                  <Card.Text>{characters.hidoongi.description}</Card.Text>
                  <Button variant="primary">자세히 보기</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        {/* 마이콜 탭 */}
        <Tab eventKey="maikol" title="마이콜">
          <Row className="mt-4">
            <Col sm={12} md={6}>
              <Card>
                <Card.Img variant="top" src={characters.maikol.img} />
                <Card.Body>
                  <Card.Title>{characters.maikol.name}</Card.Title>
                  <Card.Text>{characters.maikol.description}</Card.Text>
                  <Button variant="primary">자세히 보기</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Gallery;
