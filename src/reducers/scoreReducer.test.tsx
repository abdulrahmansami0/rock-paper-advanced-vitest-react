import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useEffect, useReducer } from "react";
import { initialState } from "../context/initialContextValue";
import scoreReducer from "./scoreReducer";
import { OptionActionKinds } from "./scoreReducerTypes";

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

const TestingComponent = (props: any) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    dispatch(props.myaciton);
  }, []);

  return (
    <>
      <p>playerhand: {state.playerHand}</p>
      <p>computerhand: {state.computerHand}</p>
      <p>winner: {state.result.winner}</p>
    </>
  );
};

describe("scoreReducer", () => {
  it("should return the initial state", () => {
    render(
      <TestingComponent
        myaciton={{ type: OptionActionKinds.UPLOAD_PLAYER_CHOICE, payload: 1 }}
      />
    );
    expect(screen.queryByText("playerhand: 1")).toBeTruthy();
  });

  it("should update with computer hand", () => {
    render(
      <TestingComponent
        myaciton={{
          type: OptionActionKinds.UPLOAD_COMPUTER_CHOICE,
          payload: 1,
        }}
      />
    );

    expect(screen.queryByText("computerhand: 1")).toBeTruthy();
  });

  it("should update with scoreReducer with player wins", () => {
    render(
      <TestingComponent
        myaciton={{
          type: OptionActionKinds.PLAYER_WINS,
          payload: "Player wins",
        }}
      />
    );

    expect(screen.queryByText("winner: Player")).toBeTruthy();
  });
});
