import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { displayAmountState, allQuestionsState } from './qa-atoms';

const MoreQuestions = (props) => {
  let qLength = useRecoilValue(allQuestionsState).length;
  const [questionsLen, setquestionsLen] = useRecoilState(displayAmountState);
  if (qLength <= 4) {
    return <></>;
  } else {
    return (
      <>
        <Button variant="primary" onClick={() => setquestionsLen(qLength)}>
          More Questions
        </Button>{' '}
      </>
    );
  }
};

export default MoreQuestions;
