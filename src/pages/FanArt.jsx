import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function FanArt() {
  const fanArtImages = [
    "https://via.placeholder.com/150?text=FanArt1",
    "https://via.placeholder.com/150?text=FanArt2",
    "https://via.placeholder.com/150?text=FanArt3"
  ];

  return (
    <div>
      <h2>둘리 팬 아트</h2>
      <p>팬들이 그린 멋진 둘리의 작품들을 감상하세요!</p>
      <Row>
        {fanArtImages.map((src, index) => (
          <Col sm={12} md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={src} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FanArt;
