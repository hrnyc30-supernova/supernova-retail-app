import React from "react";
import { shallow, configure, mount } from "enzyme";
import KeywordSearch from "./keywordSearch.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Keyword Search Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<KeywordSearch />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("echoes user input", () => {
    const wrapper = mount(<KeywordSearch searchReviews={() => {}} />);
    wrapper.find("#search").simulate("change", { target: { value: "hello" } });
    expect(wrapper.find("#search").props().value).toEqual("hello");
    wrapper.unmount();
  });
});
