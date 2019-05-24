import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Profile from "./Profile";

it("renders without crashing", function () {
  shallow(<Profile user={{}} />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Profile user={{}} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
