import { ActionTypes } from "../reducers/scoreReducerTypes";

export enum HandOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export interface IOptions {
  name: HandOptions;
  icons: JSX.Element;
}

export interface IOptionsContext {
  options: IOptions[];
  state: IInitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IScore {
  player: number;
  computer: number;
}

export interface IResult {
  winner: string | null;
  message: string | null;
}

export interface IInitialState {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: IScore;
  result: IResult;
}
