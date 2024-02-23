import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wordsTasks } from "../../redux/Word/operations";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TrainingRoom from "../../components/TrainingRoom/TrainingRoom";
import {
  BtnAdd,
  BtnCancel,
  WrapBtn,
} from "../../components/TrainingRoom/TrainingRoom.styled";
import {
  TextTraining,
  Title,
  WrapTraining,
  WrapTrainingAppsent,
  WrapTrainingAppsentAll,
  WrapTrainingAppsentText,
  Picture,
} from "./TrainingPage.style";

import {selectTacks} from '../../redux/Word/selectors'


import { useNavigate } from "react-router-dom";
import imgTrainingPageMobile1x from "../../assets/img-trainingPage-Mobile-1x.png";
import imgTrainingPageMobile2x from "../../assets/img-trainingPage-Mobile-2x.png";
import imgTrainingPagetablet1x from "../../assets/img-trainingPage-tablet-1x.png";
import imgTrainingPagetablet2x from "../../assets/img-trainingPage-tablet-2x.png";

const TrainingPage = () => {
  const tasks = useSelector(selectTacks);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(wordsTasks())
  }, [dispatch]);

  const handleNextClick = (translation) => {
    const currentTask = tasks[currentTaskIndex];
    if (currentTask && currentTaskIndex < tasks.length - 1) {
      const userAnswer = {
        task: currentTask.task,
        userTranslation: translation,
      };
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, userAnswer]);
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setDisable(true);
    }
  };
console.log(tasks)
  return (
    <>
      <WrapTraining>
        <ProgressBar
          totalTasks={tasks.length}
          userAnswers={userAnswers.length}
        />
        {tasks.length > 0 ? (
          <TrainingRoom
            currentTask={tasks[currentTaskIndex]}
            onNextClick={handleNextClick}
            disable={disable}
            tasks={tasks}
            currentTaskIndex={currentTaskIndex}
          />
        ) : (
          <>
            <WrapTrainingAppsentAll>
              <WrapTrainingAppsent>
                <WrapTrainingAppsentText>
                  <Title>
                    You don't have a single word to learn right now.{" "}
                  </Title>
                  <TextTraining>
                    Please create or add a word to start the workout. We want to
                    improve your vocabulary and develop your knowledge, so
                    please share the words you are interested in adding to your
                    study.
                  </TextTraining>
                </WrapTrainingAppsentText>
                <WrapBtn>
                  <BtnAdd
                    type="submit"
                    onClick={() => navigate(`/dictionary`)}
                  >
                    Add word
                  </BtnAdd>
                  <BtnCancel type="submit" onClick={() => navigate(-1)}>
                    Cancel
                  </BtnCancel>
                </WrapBtn>
              </WrapTrainingAppsent>
              <Picture>
                <source
                  srcSet={imgTrainingPagetablet2x}
                  media="(min-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={imgTrainingPagetablet1x}
                  media="(min-width: 767px)"
                />
                <source
                  srcSet={imgTrainingPageMobile2x}
                  media="(max-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={imgTrainingPageMobile1x}
                  media="(max-width: 767px)"
                />
                <img src={imgTrainingPageMobile1x} alt="User" />
              </Picture>
            </WrapTrainingAppsentAll>
          </>
        )}
      </WrapTraining>
    </>
  );
};

export default TrainingPage;