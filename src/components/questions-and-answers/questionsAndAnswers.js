import React, { useState } from 'react';
import SearchQuestion from './searchQuestion';
import QuestionDisplay from './questionDisplay';
import AskQuestionModal from './questionForm.js';
import Button from 'react-bootstrap/Button';

const QuestionsAndAnswers = (props) => {
  const [AddQuestionModal, setAddQuestionModal] = useState(false);

  const closeModal = () => {
    setAddQuestionModal(false);
  };
  if (AddQuestionModal) {
    return (
      <AskQuestionModal
        closeModal={closeModal}
        show={AddQuestionModal}
        name={props.currentProductName}
        productID={props.currentProductID}
      />
    );
  } else {
    return (
      <div>
        <h1>Questions and Answers Main Component</h1>
        <SearchQuestion />
        <QuestionDisplay />
        <Button variant="primary">More Questions</Button>{' '}
        <Button
          variant="success"
          onClick={() => {
            setAddQuestionModal(true);
          }}
        >
          Add A Question
        </Button>
      </div>
    );
  }
};

export default QuestionsAndAnswers;
