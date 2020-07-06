import React, { useState } from 'react';
import SearchQuestion from './searchQuestion';
import QuestionDisplay from './questionDisplay';
import AskQuestionModal from './questionForm.js';
import Button from 'react-bootstrap/Button';
import { RecoilRoot } from 'recoil';
import MoreQuestions from './moreQuestions';

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
      <RecoilRoot>
        <div>
          <h1>Questions and Answers</h1>
          <SearchQuestion />
          <QuestionDisplay productID={props.currentProductID} />
          <br></br>
          <MoreQuestions />
          <Button
            variant="success"
            onClick={() => {
              setAddQuestionModal(true);
            }}
          >
            Add A Question
          </Button>
        </div>
      </RecoilRoot>
    );
  }
};

export default QuestionsAndAnswers;
