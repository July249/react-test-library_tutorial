import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미가 잘 나온다.", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});
