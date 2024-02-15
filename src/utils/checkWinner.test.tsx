import { useEffect, useReducer } from "react";
import { describe, expect, it, vi } from "vitest";
import { initialState } from "../context/initialContextValue";
import scoreReducer from "../reducers/scoreReducer";
import { checkWinner } from "./checkWinner";
import { render, screen } from "@testing-library/react";

vi.mock("../context/initialContextValue", () => {
  return {
    initialState: {
      playerHand: 0,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      result: {
        winner: "",
        message: "",
      },
    },
  };
});

interface IProps {
  playerHand: string;
  computerHand: string;
}

const TestComponent = (props: IProps) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    checkWinner(dispatch, props.playerHand, props.computerHand);
  }, []);

  return (
    <div>
      <h1>player score: {state.score.player}</h1>
      <h1>computer score: {state.score.computer}</h1>
      <p>{state.result.winner}</p>
      <p>{state.result.message}</p>
    </div>
  );
};

describe("checkWinner", () => {
  it("should return player wins", () => {
    const playerHand = "rock";
    const computerHand = "scissors";
    render(
      <TestComponent playerHand={playerHand} computerHand={computerHand} />
    );

    expect(screen.getByText(/player wins/i)).toBeInTheDocument();
    expect(screen.getByText(/player score: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/computer score: 0/i)).toBeInTheDocument();
  });

  it("should return computer wins", () => {
    const playerHand = "rock";
    const computerHand = "paper";
    render(
      <TestComponent playerHand={playerHand} computerHand={computerHand} />
    );

    expect(screen.getByText(/computer wins/i)).toBeInTheDocument();
  });

  it("should return draw wins", () => {
    const playerHand = "rock";
    const computerHand = "rock";
    render(
      <TestComponent playerHand={playerHand} computerHand={computerHand} />
    );

    expect(screen.getByText(/we have a draw/i)).toBeInTheDocument();
  });
});
