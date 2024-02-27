import { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { wordsCreate } from "../../../redux/Word/operations";
import { SvgMap } from "../../TrainingRoom/TrainingRoom.styled";
import sprite from "../../../assets/sprite.svg";
import { useSelector } from "react-redux";
import {
  FieldModal,
  ModalBtn,
  ModalBtnCancel,
  StyledErrorAuth,
  StyledLabel,
  StyledRadio,
  TextLangModal,
  TextModal,
  TitleModal,
  WrapBtnModal,
  WrapFormalModal,
  WrapInputModal,
  WrapLangModal,
  WrapRadioBtn,
} from "../EditModal/EditModal.styled";

import Dropdown from "../../Dropdown/Dropdown";

const schema = yup.object({
  en: yup
    .string()
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Invalid English format"),

  ua: yup
    .string()
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Invalid Ukrainian format"),
});

const initialValues = {
  en: "",
  ua: "",
  category: "",
  isIrregular: "",
};

const AddForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Word.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedVerbType, setSelectedVerbType] = useState("");

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      wordsCreate({
        en: values.en,
        ua: values.ua,
        category: selectedCategory,
        ...(selectedCategory === "verb" && { isIrregular: selectedVerbType }),
      })
    );

    resetForm();
    onClose();
  };


  return (
    <>
      <TitleModal>Add word</TitleModal>
      <TextModal>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </TextModal>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
          <Dropdown
          modal={true}
    value="Categories"
    set={setSelectedCategory}
    selectedOption={selectedCategory}
    arr={categories.slice(1,categories.length)}
  />
 {selectedCategory === "verb" &&    <>
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
            <WrapFormalModal>
              <WrapInputModal>
                <label htmlFor="en">
                  <FieldModal
                    type="text"
                    id="en"
                    name="en"
                    placeholder="English"
                  />
                </label>
                <WrapLangModal>
                  <SvgMap>
                    <use href={sprite + "#icon-united-kingdom"}></use>
                  </SvgMap>
                  <TextLangModal>English</TextLangModal>
                </WrapLangModal>

                <ErrorMessage name="en">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </WrapInputModal>
              <WrapInputModal>
                <label htmlFor="ua">
                  <FieldModal
                    type="text"
                    id="ua"
                    name="ua"
                    placeholder="Ukrainian"
                  />
                  <ErrorMessage name="ua">
                    {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                  </ErrorMessage>
                </label>
                <WrapLangModal>
                  <SvgMap>
                    <use href={sprite + "#icon-ukraine"}></use>
                  </SvgMap>
                  <TextLangModal>Ukrainian</TextLangModal>
                </WrapLangModal>
              </WrapInputModal>
            </WrapFormalModal>
            <WrapBtnModal>
              <ModalBtn type="submit">Save</ModalBtn>
              <ModalBtnCancel type="button" onClick={()=> onClose()}>
                Cancel
              </ModalBtnCancel>
            </WrapBtnModal>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddForm;