import React from "react";
import { shallow, configure, mount } from "enzyme";
import AddReviewButton from "./addReviewButton.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const testState = {
  showModal: false,
};

describe("Render", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<AddReviewButton />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("should be possible to activate button on click", () => {
    const wrapper = mount(<AddReviewButton />);
    wrapper.find("button#add-review-button").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
