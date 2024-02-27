import { Container,  } from './DictionaryPage.styled';
import { useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { wordsAll, wordsOwn } from "../../redux/Word/operations";
import {  selectOwnWords, totalPagesWords2,  totalPagesWords} from "../../redux/Word/selectors";
import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";

import Dashboard from '../../components/Dashboard/Dashboard';
import WordsTable from '../../components/WordsTable/WordsTable';
import {
  ButtonPagination,
  SvgStep,
  WrapPagination,
  SvgStepNext,
} from '../../components/WordsTable/WordsTable.styled';

import {
  Picture,
  TextTraining,
  Title,
  WrapTrainingAppsent,
  WrapTrainingAppsentAll,
  WrapTrainingAppsentText,
} from "../TrainingPage/TrainingPage.style";
import sprite from '../../assets/sprite.svg'
import imgTrainingPageMobile1x from "../../assets/img-trainingPage-Mobile-1x.png";
import imgTrainingPageMobile2x from "../../assets/img-trainingPage-Mobile-2x.png";
import imgTrainingPagetablet1x from "../../assets/img-trainingPage-tablet-1x.png";
import imgTrainingPagetablet2x from "../../assets/img-trainingPage-tablet-2x.png";

const DictionaryPage = () => {





  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(totalPagesWords);
  const totalPages2 = useSelector(totalPagesWords2);
  const dictionary = useSelector(selectOwnWords);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleIncrement = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDecrement = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const renderPageButtons = () => {
    const visiblePages = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    if (startPage > 1) {
      visiblePages.push({ value: 1, key: 1 });
    }

    if (startPage > 2) {
      visiblePages.push({ value: "...", key: "start-ellipsis" });
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push({ value: i, key: i });
    }

    if (endPage < totalPages - 1) {
      visiblePages.push({ value: "...", key: "end-ellipsis" });
    }

    if (endPage < totalPages) {
      visiblePages.push({ value: totalPages, key: totalPages });
    }

    return visiblePages.map(({ value, key }) => (
      <ButtonPagination
        key={key}
        onClick={() => (value !== "..." ? handlePageChange(value) : null)}
        disabled={value === "..." || value === currentPage}
      >
        {value}
      </ButtonPagination>
    ));
  };
  useEffect(() => {
    dispatch(wordsAll());
    dispatch(wordsOwn());
  }, [dispatch]);

  const columnsDictionary = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    {
      Header: "Progress",
      accessor: "progress",
      Cell: ({ row }) => {
        const progress = row.values.progress || 0;
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        return (
          <>
            <div
              onClick={handleClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "space-evenly",
              }}
            >
              <p>{progress}%</p>
              <CircularProgress
                variant="determinate"
                value={progress}
                thickness={5}
                sx={{
                  width: "26px",
                  color: "rgba(43, 214, 39, 1)",
                  borderRadius: "50%",
                  border: "5px solid rgba(212, 248, 211, 1)",
                  display: "flex",
                }}
              />
            </div>
          </>
        );
      },
    },
    { Header: "", accessor: "..." },
  ];


  return (
    <Container>
    <Dashboard currentPage={currentPage} id='dictionary'/>
    <WordsTable columns={columnsDictionary} data={dictionary} id='dictionary'/>
    {totalPages2 > [] ? (
          <WrapPagination>
            <ButtonPagination onClick={() => handlePageChange(1)}>
              <SvgStep>
                <use href={sprite + "#icon-First"}></use>
              </SvgStep>
            </ButtonPagination>
            <ButtonPagination onClick={handleDecrement}>
              <SvgStep>
                <use href={sprite + "#icon-Prev"}></use>
              </SvgStep>
            </ButtonPagination>
            {renderPageButtons()}
            <ButtonPagination onClick={handleIncrement}>
              <SvgStepNext>
                <use href={sprite + "#icon-Prev"}></use>
              </SvgStepNext>
            </ButtonPagination>
            <ButtonPagination onClick={() => handlePageChange(totalPages)}>
              <SvgStepNext>
                <use href={sprite + "#icon-First"}></use>
              </SvgStepNext>
            </ButtonPagination>
          </WrapPagination>) : (
          <WrapTrainingAppsentAll>
            <WrapTrainingAppsent>
              <WrapTrainingAppsentText>
                <Title>We don't have a single word to learn right now. </Title>
                <TextTraining>
                  Please create a word to start the workout. We want to improve
                  your vocabulary and develop your knowledge, so please share
                  the words you are interested in adding to your study.
                </TextTraining>
              </WrapTrainingAppsentText>
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
        )}
    </Container>
  );
};

export default DictionaryPage;
