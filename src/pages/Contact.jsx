import React from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <h2 className="text-center mb-5">둘리에게 연락하기</h2>
      
      <Alert variant="info">
        둘리와의 팬미팅이나 이벤트에 대한 문의를 남겨주세요!
      </Alert>

      <Form>
        <Form.Group controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력하세요" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>메시지</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="메시지를 입력하세요" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          보내기
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
