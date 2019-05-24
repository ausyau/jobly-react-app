import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Jobs from "./Jobs";

it("renders without crashing", function () {
  shallow(<Jobs />);
});

it("matches snapshot with no jobs", function () {
  let wrapper = shallow(<Jobs />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});