import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Companies from "./Companies";

it("renders without crashing", function () {
  shallow(<Companies />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<Companies />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
