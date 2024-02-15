import styles from "./ChooseAndPlay.module.css";
import HandSelection from "../components/HandSelection";

import { useOptions } from "../context/optionsContext";
import { randomNumber } from "../utils/randomNumber";
import { OptionActionKinds } from "../reducers/scoreReducerTypes";

const ChooseAndPlay = () => {
  const optionContext = useOptions();

  const { dispatch } = optionContext;

  const HandOptionsArray = optionContext.options.map((option, index) => (
    <HandSelection
      key={option.name}
      name={option.name}
      icon={option.icons}
      handChoiceIndex={index}
    />
  ));

  const play = () => {
    const randNumber = randomNumber();

    dispatch({
      type: OptionActionKinds.UPLOAD_COMPUTER_CHOICE,
      payload: randNumber,
    });

    dispatch({
      type: OptionActionKinds.RUN_TIMER,
      payload: true,
    });
  };

  return (
    <>
      <div className={styles.chooseBtnCtn}>{HandOptionsArray}</div>
      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </>
  );
};

export default ChooseAndPlay;
