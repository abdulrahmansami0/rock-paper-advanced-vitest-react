import React from "react";
import { ActionTypes, OptionActionKinds } from "../reducers/scoreReducerTypes";

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerHandName: string,
  computerHandName: string
) => {
  if (playerHandName === computerHandName) {
    dispatch({
      type: OptionActionKinds.DRAW,
      payload: "We have a draw",
    });
  } else if (
    (playerHandName === "rock" && computerHandName === "scissors") ||
    (playerHandName === "paper" && computerHandName === "rock") ||
    (playerHandName === "scissors" && computerHandName === "paper")
  ) {
    dispatch({
      type: OptionActionKinds.PLAYER_WINS,
      payload: "Player wins",
    });
  } else {
    dispatch({
      type: OptionActionKinds.COMPUTER_WINS,
      payload: "Computer wins",
    });
  }
};
