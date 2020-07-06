import React, { useState, useEffect } from 'react';
import apiMaster from '../../apiMaster';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Answer = (props) => {
  const [answers, setAnswer] = useState([]);
  const [answerLen, setanswerLen] = useState(2);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    apiMaster
      .getSpecificAnswers(props.id)
      .then(({ data }) => {
        setAnswer(data.results);
        if (data.results.length > 2) setShowMore(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <>
        {answers.slice(0, answerLen).map((answer) => {
          return (
            <Card.Body key={answer.answer_id}>
              <Card.Title>A: {answer.body}</Card.Title>
              <Card.Text>
                By: {answer.answerer_name} | Helpful? <u> YES</u> (
                {answer.helpfulness}) |<u> Report</u>
              </Card.Text>
            </Card.Body>
          );
        })}
      </>

      {showMore ? (
        <Card.Body className="text-center">
          <Button variant="primary" size="sm">
            More Answers
          </Button>
        </Card.Body>
      ) : (
        ''
      )}
    </>
  );
};

export default Answer;
