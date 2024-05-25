import React from "react";
import { render, screen } from "@testing-library/react";
import Links from "../components/Links";

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />);
  const githubLink = screen.getByText("GitHub");
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/liza");
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />);
  const linkedinLink = screen.getByText("LinkedIn");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/liza/");
});
