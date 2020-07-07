import React, { useState, useEffect } from 'react';
import apiMaster from '../../apiMaster';
import Answer from './answer';
import Card from 'react-bootstrap/Card';
import {
  displayAmountState,
  allQuestionsState,
  quesitonIdState,
  searchState,
  showSearchState,
} from './qa-atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

const QuestionDisplay = (props) => {
  const [questions, setQuestions] = useRecoilState(allQuestionsState);
  const [questionsLen, setquestionsLen] = useRecoilState(displayAmountState);
  const [questionID, setquestionID] = useRecoilState(quesitonIdState);
  const [search, setSearch] = useRecoilState(searchState);
  const showSearch = useRecoilValue(showSearchState);

  useEffect(() => {
    apiMaster
      .getQA(props.productID)
      .then(({ data }) => {
        data.results.sort((a, b) =>
          a.question_helpfulness > b.question_helpfulness ? -1 : 1
        );
        setQuestions(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  if (showSearch) {
    return (
      <div>
        {questions.map((question) => {
          if (question.question_body.indexOf(search) > 0) {
            return (
              <Card key={question.question_id} className="question">
                <Card.Header>
                  Q: {question.question_body}{' '}
                  <div style={{ float: 'right' }}>
                    Helpful? <u style={{ cursor: 'pointer' }}> YES</u> (
                    {question.question_helpfulness}) |
                    <u
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setquestionID(question.question_id);
                        props.showModal();
                      }}
                    >
                      {' '}
                      Add Answer
                    </u>
                  </div>
                </Card.Header>
                <Answer id={question.question_id} />
              </Card>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        {questions.slice(0, questionsLen).map((question) => {
          return (
            <Card key={question.question_id} className="question">
              <Card.Header>
                Q: {question.question_body}{' '}
                <div style={{ float: 'right' }}>
                  Helpful? <u style={{ cursor: 'pointer' }}> YES</u> (
                  {question.question_helpfulness}) |
                  <u
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setquestionID(question.question_id);
                      props.showModal();
                    }}
                  >
                    {' '}
                    Add Answer
                  </u>
                </div>
              </Card.Header>
              <Answer id={question.question_id} />
            </Card>
          );
        })}
      </div>
    );
  }
};

export default QuestionDisplay;
