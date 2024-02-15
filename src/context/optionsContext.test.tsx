import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FaRegHandRock } from "react-icons/fa";
import userEvent from "@testing-library/user-event";
import { OptionsProviders, useOptions } from "./optionsContext";

vi.mock("./initialContextValue", () => {
  return {
    initialState: {
      playerHand: 1,
      computerHand: 2,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      result: {
        winner: "Player 1",
        message: null,
      },
    },
  };
});

const TestingComponent = () => {
  const optionContext = useOptions();

  return (
    <>
      <p>Player hand: {optionContext.state.playerHand}</p>
      <p>Computer hand: {optionContext.state.computerHand}</p>
      <p>Winner: {optionContext.state.result.winner}</p>
    </>
  );
};

describe("OptionContext", () => {
  it("should render with initial values", () => {
    render(
      <OptionsProviders>
        <TestingComponent />
      </OptionsProviders>
    );

    expect(screen.queryByText(/Player hand: 1/i)).toBeVisible();
    expect(screen.queryByText(/Computer hand: 2/i)).toBeVisible();
    expect(screen.queryByText(/Winner: Player 1/i)).toBeVisible();
  });
});
