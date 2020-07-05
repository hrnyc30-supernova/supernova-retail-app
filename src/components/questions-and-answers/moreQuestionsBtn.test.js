import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoreQuestionsBtn from './moreQuestionsBtn';

configure({ adapter: new Adapter() });

describe('Add Button Should Render', () => {
  it('should be defined', () => {
    expect(MoreQuestionsBtn).toBeDefined();
  });
});
