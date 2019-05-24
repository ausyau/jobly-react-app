import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import JobCard from "./JobCard";

it("renders without crashing", function () {
  shallow(<JobCard user={{}}/>);
});

