import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    let element = screen.findAllByText("ROCK, PAPER, SCISSORS");
    expect(element).toBeTruthy();
  });

  it("should render again", () => {
    const todoList = render(<App />);
    expect(todoList).toBeTruthy();
  });
});
