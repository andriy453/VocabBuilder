import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  SvgSearch,
  InputWord,
  ContainerInp,
  StyledRadio,
  StyledLabel,
  WrapRadioBtn,

  KeyText,
  ValueText,
  StudyDiv,
  RightWrap,
  WrapRightBtn,
  TextTrain,
  Button,
  SvgArrow
} from './Dashboard.styled';
import sprite from '../../assets/sprite.svg';
import Dropdown from '../Dropdown/Dropdown';
import { useDispatch,useSelector } from 'react-redux';
import { wordsCategories, wordsStatistics} from '../../redux/Word/operations';
import { statisticsWords,StateCategories } from '../../redux/Word/selectors';


function Dashboard() {
  const { id } = useParams();
  const Categories = useSelector(StateCategories);
  const navigate = useNavigate();
  const statistics = useSelector(statisticsWords);
  const dispatch = useDispatch();
  const [filterWord, setFilterWord] = useState('');
  const [selectCategories, setCategories] = useState('');
  const [selectedVerbType, setSelectedVerbType] = useState("");
  useEffect(() => {
    dispatch(wordsStatistics());

    if (Categories.length < 1) {
      dispatch(wordsCategories());
    }
    
  }, [dispatch]);

  const renderAdditionalOptions = () => {
    if (selectCategories === "verb") {
      return (
        <>
          <WrapRadioBtn>
            <StyledLabel>
              <StyledRadio
                type="radio"
                value="false"
                checked={selectedVerbType === "false"}
                onChange={(e)=> setSelectedVerbType(e.target.value)}
              />
              Regular
            </StyledLabel>
            <StyledLabel>
              <StyledRadio
                type="radio"
                value="true"
                checked={selectedVerbType === "true"}
                onChange={(e)=> setSelectedVerbType(e.target.value)}
              />
              Irregular
            </StyledLabel>
          </WrapRadioBtn>
        </>
      );
    }
  };
console.log(id)
  return (
    <Container>
      <ContainerInp>
        <InputWord
          type="text"
          placeholder="Find the word"
          onChange={(e) => setFilterWord(e.target.value)}
          value={filterWord}
        />
        <SvgSearch>
          <use href={sprite + '#icon-search'}></use>
        </SvgSearch>
      </ContainerInp>
      <Dropdown
        value="Categories"
        set={setCategories}
        selectedOption={selectCategories}
        arr={Categories}
      />
     {renderAdditionalOptions()}

     <RightWrap>
          <StudyDiv>
            <KeyText>To study:</KeyText>
            <ValueText>{statistics}</ValueText>
          </StudyDiv>
          <WrapRightBtn>
            {id === "dictionary" && (
              <Button onClick={() => openModal()}>
                <TextTrain>Add word</TextTrain>
                <SvgArrow>
                  <use href={sprite + "#icon-plus"}></use>
                </SvgArrow>
              </Button>
            )}
            {/* {(isOpen || addOpen) && (
              <Modal onClose={closeModal} isOpen={isOpen}>
                <AddForm onClose={closeModal} />
              </Modal>
            )} */}
            <Button onClick={() => navigate("/training")}>
              <TextTrain>Train oneself</TextTrain>
              <SvgArrow>
                <use href={sprite + "#icon-switch-horizontal-01-1"}></use>
              </SvgArrow>
            </Button>
          </WrapRightBtn>
        </RightWrap>
    </Container>
  );
}

export default Dashboard;
