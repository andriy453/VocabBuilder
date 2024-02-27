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
import BookMobile1x from '../../../assets/Bookmobile1x.png'
import BookMobile2x from '../../../assets/Bookmobile2x.png'
import BookTablet1x from '../../../assets/Booktablet1x.png'
import BookTablet2x from '../../../assets/Booktablet2x.png'

const WellDoneModal = () => {
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
      <PictureModal>
        <source
          srcSet={BookTablet2x}
          media="(min-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={BookTablet1x} media="(min-width: 767px)" />
        <source
          srcSet={BookMobile2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={BookMobile1x} media="(max-width: 767px)" />
        <Img src={BookMobile1x} alt="User" />
      </PictureModal>
    </div>
  );
};

export default WellDoneModal;