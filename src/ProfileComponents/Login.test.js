import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Login from "./Login";

it("renders without crashing", function () {
  shallow(<Login />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Login />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
