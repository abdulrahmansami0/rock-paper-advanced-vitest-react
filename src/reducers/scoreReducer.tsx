import { IInitialState } from "../context/optionsContextTypes";
import { ActionTypes, OptionActionKinds } from "./scoreReducerTypes";

export default function scoreReducer(
  state: IInitialState,
  action: ActionTypes
) {
  const { type, payload } = action;

  switch (type) {
    case OptionActionKinds.UPLOAD_PLAYER_CHOICE:
      return {
        ...state,
        playerHand: payload,
        result: {
          winner: "",
          message: "",
        },
      };
    case OptionActionKinds.UPLOAD_COMPUTER_CHOICE:
      return {
        ...state,
        computerHand: payload,
      };
    case OptionActionKinds.RUN_TIMER:
      return {
        ...state,
        runTimer: payload,
      };
    case OptionActionKinds.DRAW:
      return {
        ...state,
        result: {
          winner: "No one",
          message: payload,
        },
      };
    case OptionActionKinds.PLAYER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          player: state.score.player + 1,
        },
        result: {
          winner: "Player",
          message: payload,
        },
      };
    case OptionActionKinds.COMPUTER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          computer: state.score.computer + 1,
        },
        result: {
          winner: "Computer",
          message: payload,
        },
      };
    default:
      return {
        ...state,
        results: {
          winner: "Error",
          message: "we have an error",
        },
      };
  }
}
