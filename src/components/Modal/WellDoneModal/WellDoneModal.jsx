import { resultWords } from "../../../redux/Word/selectors";

import { useSelector } from "react-redux";
import {
  AllWrap,
  Img,
  ListModal,
  ListWrap,
  PictureModal,
  TextModal,
  TitleModal,
} from "../EditModal/EditModal.styled"

const WellDoneModal = ({ onClose }) => {
  const listLearning = useSelector(resultWords);

  const doneWords = listLearning.filter((word) => word.isDone);
  const notDoneWords = listLearning.filter((word) => !word.isDone);

  return (
    <div>
      <TitleModal>Well done</TitleModal>
      <AllWrap>
        <ListWrap>
          <TextModal>Сorrect answers:</TextModal>
          <ListModal>
            {doneWords.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </ListModal>
        </ListWrap>
        <ListWrap>
          <TextModal>Mistakes:</TextModal>
          <ListModal>
            {notDoneWords.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </ListModal>
        </ListWrap>
      </AllWrap>
    </div>
  );
};

export default WellDoneModal;