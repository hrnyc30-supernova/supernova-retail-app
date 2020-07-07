import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import apiMaster from '../../apiMaster';
import { useRecoilState } from 'recoil';
import { quesitonIdState } from './qa-atoms';

const AddAnswerModal = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [show, setShow] = useState(props.show);
  const [questionID, setquestionID] = useRecoilState(quesitonIdState);

  const onSubmit = (data) => {
    apiMaster
      .answerQuestion(questionID, data.body, data.name, data.email)
      .then(() => {
        setShow(false);
        props.closeModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      onHide={() => {
        setShow(false);
        props.closeModal();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>Submit your Answer</h1>
          <p>Product Name: Question Body</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Label>* What is your nickname</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Example: jack543!"
              maxLength={60}
              ref={register({
                required: true,
              })}
            />
            <Form.Text className="text-muted">
              For privacy reasons, do not use your full name or email address
              {errors.name && <p style={{ color: 'red' }}>Name is required</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>* Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Example: jack@email.com"
              name="email"
              ref={register({
                required: true,
              })}
              maxLength={60}
            />
            <Form.Text className="text-muted">
              For authentication reasons, you will not be emailed
              {errors.email && (
                <p style={{ color: 'red' }}>Email is required</p>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="answer">
            <Form.Label>* Your Answer</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Add Answer Here"
              name="body"
              ref={register({ required: true })}
              maxLength={1000}
            />
            <Form.Text className="text-muted">
              {errors.body && (
                <p style={{ color: 'red' }}>Answer is required</p>
              )}
            </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>{' '}
          <Button variant="primary">Upload Photos</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default AddAnswerModal;
