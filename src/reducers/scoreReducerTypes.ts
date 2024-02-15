export enum OptionActionKinds {
  UPLOAD_PLAYER_CHOICE = "UPLOAD_PLAYER_CHOICE",
  UPLOAD_COMPUTER_CHOICE = "UPLOAD_COMPUTER_CHOICE",
  RUN_TIMER = "RUN_TIMER",
  DRAW = "DRAW",
  COMPUTER_WINS = "COMPUTER_WINS",
  PLAYER_WINS = "PLAYER_WINS",
}

export interface IUploadPlayerChoice {
  type: OptionActionKinds.UPLOAD_PLAYER_CHOICE;
  payload: number;
}

export interface IUploadComputerChoice {
  type: OptionActionKinds.UPLOAD_COMPUTER_CHOICE;
  payload: number;
}

export interface RunTimer {
  type: OptionActionKinds.RUN_TIMER;
  payload: boolean;
}

export interface Draw {
  type: OptionActionKinds.DRAW;
  payload: string;
}

export interface PlayerWins {
  type: OptionActionKinds.PLAYER_WINS;
  payload: string;
}

export interface ComputerWins {
  type: OptionActionKinds.COMPUTER_WINS;
  payload: string;
}

export type ActionTypes =
  | IUploadPlayerChoice
  | IUploadComputerChoice
  | RunTimer
  | Draw
  | PlayerWins
  | ComputerWins;
