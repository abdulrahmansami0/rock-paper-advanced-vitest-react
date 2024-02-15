import React, { useState } from "react";
import styles from "./HandSelection.module.css";
import { OptionActionKinds } from "../reducers/scoreReducerTypes";
import { useOptions } from "../context/optionsContext";

type HandSelectionProps = {
  name: string;
  icon: JSX.Element;
  handChoiceIndex: number;
};

const HandSelection: React.FC<HandSelectionProps> = (props) => {
  const { name, icon, handChoiceIndex } = props;

  const [handPressed, setHandPressed] = useState<boolean>(false);
  const optionsContext = useOptions();

  const { dispatch, state } = optionsContext;

  const selectedHandIndex = state.playerHand;
  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKinds.UPLOAD_PLAYER_CHOICE, payload: index });
    setHandPressed(true);
  };

  return (
    <>
      <button
        className={`${styles.choiceBtn} ${
          handPressed && handChoiceIndex === selectedHandIndex
            ? styles.activeChoice
            : ""
        }`}
        onClick={() => selectOption(handChoiceIndex)}
      >
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelection;
