
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import throttle from "lodash.throttle";
import Dropdown from '../Dropdown/Dropdown';
import {
    SvgSearch,
    InputWord,
    ContainerInp,
    StyledRadio,
    StyledLabel,
    WrapRadioBtn,
} from  './Filters.stuled'
import { StateCategories } from '../../redux/Word/selectors';
import {
    fetchWords,
    wordsOwn,
  } from "../../redux/Word/operations";

import sprite from '../../assets/sprite.svg'

function Filters({currentPage,id,modal}) {
    const dispatch = useDispatch();
    const Categories = useSelector(StateCategories);
    const [filterWord, setFilterWord] = useState('');
    const [selectCategories, setCategories] = useState('');
    const [selectedVerbType, setSelectedVerbType] = useState("");


  useEffect(() => {
    if (id === "recommend") {
      dispatch(
        fetchWords({
          page: currentPage,
          category: selectCategories,
          verb: selectedVerbType,
          search: filterWord,
        })
      );
    }
    if (id === "dictionary") {
      dispatch(
        wordsOwn({
          page: currentPage,
          category: selectCategories,
          verb: selectedVerbType,
          search: filterWord,
        })
      );
    }
  }, [dispatch, id, currentPage, selectedVerbType, filterWord, selectCategories]);
  return (
<>
{ modal && 
  <ContainerInp>
    <InputWord
      type="text"
      placeholder="Find the word"
      onChange={(e) => setTimeout(setFilterWord(e.target.value), 300)}
      value={filterWord}
    />
    <SvgSearch>
      <use href={sprite + '#icon-search'}></use>
    </SvgSearch>
  </ContainerInp>
  }
  <Dropdown
    value="Categories"
    set={setCategories}
    selectedOption={selectCategories}
    arr={Categories}
  />
 {selectCategories === "verb" &&    <>
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
        </>}
 </>
  )
}

export default Filters