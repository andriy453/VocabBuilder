import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  KeyText,
  ValueText,
  StudyDiv,
  RightWrap,
  WrapRightBtn,
  TextTrain,
  Button,
  SvgArrow,
  Wrap,
} from './Dashboard.styled';
import sprite from '../../assets/sprite.svg';
import { useDispatch,useSelector } from 'react-redux';
import { wordsCategories, wordsStatistics} from '../../redux/Word/operations';
import { statisticsWords,StateCategories } from '../../redux/Word/selectors';
import Filters from '../Filters/Filters';
import Modal from '../Modal/Modal';
import AddForm from '../Modal/AddWord/AddWord';


function Dashboard({currentPage,id}) {

  const Categories = useSelector(StateCategories);
  const navigate = useNavigate();
  const statistics = useSelector(statisticsWords);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  useEffect(() => {
    dispatch(wordsStatistics());

    if (Categories.length < 1) {
      dispatch(wordsCategories());
    }
    
  }, [Categories.length, dispatch]);

  const closeModal = () => {
    setIsOpen(false);
    setAddOpen(false);
  };



  return (
<Wrap>
<Container>
    <Filters currentPage={currentPage} id={id} modal={id}/>
    </Container>
         <RightWrap>
         <StudyDiv>
           <KeyText>To study:</KeyText>
           <ValueText>{statistics}</ValueText>
         </StudyDiv>
         <WrapRightBtn>
           {id === "dictionary" && (
             <Button onClick={() => setIsOpen(true)}>
               <TextTrain>Add word</TextTrain>
               <SvgArrow>
                 <use href={sprite + "#icon-plus"}></use>
               </SvgArrow>
             </Button>
           )}
           {(isOpen || addOpen) && (
             <Modal onClose={closeModal} isOpen={isOpen}>
               <AddForm onClose={closeModal} />
             </Modal>
           )}
           <Button onClick={() => navigate("/training")}>
             <TextTrain>Train oneself</TextTrain>
             <SvgArrow>
               <use href={sprite + "#icon-switch-horizontal-01-1"}></use>
             </SvgArrow>
           </Button>
         </WrapRightBtn>
       </RightWrap>
       </Wrap>
  );
}

export default Dashboard;
