
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

function Filters({currentPage,id}) {
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
          // perPage: perPage,
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
          // perPage: perPage,
        })
      );
    }
  }, [dispatch, id, currentPage, selectedVerbType, filterWord, selectCategories]);
  return (
<>
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