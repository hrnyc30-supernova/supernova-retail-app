import React, { useState, useEffect } from 'react';
import apiMaster from '../../apiMaster';
import Answer from './answer';
import Card from 'react-bootstrap/Card';
import { displayAmountState, allQuestionsState } from './qa-atoms';
import { useRecoilState } from 'recoil';

const QuestionDisplay = (props) => {
  const [questions, setQestions] = useRecoilState(allQuestionsState);
  const [questionsLen, setquestionsLen] = useRecoilState(displayAmountState);

  useEffect(() => {
    apiMaster
      .getQA(props.productID)
      .then(({ data }) => {
        data.results.sort((a, b) =>
          a.question_helpfulness > b.question_helpfulness ? -1 : 1
        );
        setQestions(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {questions.slice(0, questionsLen).map((question) => {
        return (
          <Card key={question.question_id} className="question">
            <Card.Header>
              Q: {question.question_body}{' '}
              <div style={{ float: 'right' }}>
                Helpful? <u> YES</u> ({question.question_helpfulness}) |
                <u> Add Answer</u>
              </div>
            </Card.Header>
            <Answer id={question.question_id} />
          </Card>
        );
      })}
    </div>
  );
};

export default QuestionDisplay;
