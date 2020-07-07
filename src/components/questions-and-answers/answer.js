import React, { useState, useEffect } from 'react';
import apiMaster from '../../apiMaster';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Answer = (props) => {
  const [answers, setAnswer] = useState([]);
  const [answerLen, setanswerLen] = useState(2);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    apiMaster
      .getSpecificAnswers(props.id)
      .then(({ data }) => {
        data.results.sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1));
        const sellerAnswers = [];
        data.results.forEach((answer, i, arr) => {
          if (answer.answerer_name === 'Seller') {
            sellerAnswers.push(answer);
            data.results.pop(i);
          }
        });
        const finalResults = sellerAnswers.concat(data.results);
        setAnswer(finalResults);
        if (data.results.length > 2) setShowMore(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <>
        {answers.slice(0, answerLen).map((answer) => {
          let date = moment(answer.date).format('MMMM D, YYYY');
          let by;
          answer.answerer_name === 'Seller'
            ? (by = <b>{answer.answerer_name}</b>)
            : (by = answer.answerer_name);

          return (
            <Card.Body key={answer.answer_id}>
              <Card.Title>A: {answer.body}</Card.Title>
              <Card.Text>
                By: {by}, {date} | Helpful?{' '}
                <u style={{ cursor: 'pointer' }}> YES</u> ({answer.helpfulness})
                |<u style={{ cursor: 'pointer' }}> Report</u>
              </Card.Text>
            </Card.Body>
          );
        })}
      </>

      {showMore ? (
        <Card.Body className="text-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setShowMore(false);
              setanswerLen(answers.length);
            }}
          >
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
