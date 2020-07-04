import React from 'react';
import SearchQuestion from './searchQuestion';
import QuestionDisplay from './questionDisplay';
import MoreQuestionsBtn from './moreQuestionsBtn';
import AddQuestionBtn from './addQuestionBtn';
import QuestionForm from './questionForm.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionFormVisible: false,
    };
    this.renderForm = this.renderForm.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
  }
  renderForm() {
    // render form action
  }
  loadMoreQuestions() {}
  render() {
    if (this.state.questionFormVisible) {
      return <QuestionForm />;
    } else {
      return (
        <div>
          <h1>Questions and Answers Main Component</h1>
          <SearchQuestion />
          <QuestionDisplay />
          <MoreQuestionsBtn loadMoreQuestions={this.loadMoreQuestions} />
          <AddQuestionBtn renderForm={this.renderForm} />
        </div>
      );
    }
  }
}

export default QuestionsAndAnswers;
