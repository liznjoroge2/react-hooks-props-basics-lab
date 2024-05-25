import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import user from "../data/user";

test("passes 'github' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const githubLink = screen.queryByText("GitHub");
  expect(githubLink).toBeInTheDocument();
  expect(githubLink.tagName).toEqual("A");
  expect(githubLink).toHaveAttribute("href", user.links.github);
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const linkedinLink = screen.queryByText("LinkedIn");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink.tagName).toEqual("A");
  expect(linkedinLink).toHaveAttribute("href", user.links.linkedin);
});
