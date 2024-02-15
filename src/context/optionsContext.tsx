import React, { useReducer } from "react";
import {
  HandOptions,
  IOptions,
  IOptionsContext,
  IProps,
} from "./optionsContextTypes";
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";
import { initialState } from "./initialContextValue";
import scoreReducer from "../reducers/scoreReducer";

const options: IOptions[] = [
  {
    name: HandOptions.rock,
    icons: <FaRegHandRock size={60} data-testid="rock" />,
  },
  {
    name: HandOptions.paper,
    icons: <FaRegHandPaper size={60} data-testid="paper" />,
  },
  {
    name: HandOptions.scissors,
    icons: <FaRegHandScissors size={60} data-testid="scissors" />,
  },
];

const optionsContext = React.createContext<IOptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => {},
});

export function OptionsProviders(props: IProps) {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  const contextValue = {
    options: options,
    state,
    dispatch,
  };

  return (
    <optionsContext.Provider value={contextValue}>
      {props.children}
    </optionsContext.Provider>
  );
}

export function useOptions() {
  return React.useContext(optionsContext);
}
