import React from "react";
import { render } from "@testing-library/react";
import About from "../components/About";
import user from "../data/user";

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About github={user.links.github} linkedin={user.links.linkedin} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" github={user.links.github} linkedin={user.links.linkedin} />);
  expect(container.querySelector("p")).toBeNull();
});
