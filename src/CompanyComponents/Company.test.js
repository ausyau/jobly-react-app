import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Company from "./Company";

it("renders without crashing", function () {
  shallow(<Company />);
});

it("company matches snapshot while loading", function () {
  let wrapper = shallow(<Company />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("company matches snapshot after loading", function () {
  let wrapper = shallow(<Company />);
  wrapper.setState( { name: "Specialty's", description: "zomg cookies", jobs: [] });
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});