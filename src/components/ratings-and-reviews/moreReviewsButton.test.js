import React from "react";
import { shallow, configure, mount } from "enzyme";
import MoreReviewsButton from "./moreReviewsButton.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Should Render", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MoreReviewsButton />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("should be possible to activate button on click", () => {
    const wrapper = mount(<MoreReviewsButton />);
    wrapper.find("button#more-reviews-button").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
