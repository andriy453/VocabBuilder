import { Container} from './RecommendPage.styled';
import { useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { wordsAll, wordsOwn } from "../../redux/Word/operations";
import { selectWords, totalPagesWords, } from "../../redux/Word/selectors";

import Dashboard from '../../components/Dashboard/Dashboard';
import WordsTable from '../../components/WordsTable/WordsTable';
import {
  ButtonPagination,
  SvgStep,
  WrapPagination,
  SvgStepNext,
} from '../../components/WordsTable/WordsTable.styled';
import sprite from '../../assets/sprite.svg'
const RecommendPage = () => {
  const dispatch = useDispatch();
  const recommend = useSelector(selectWords);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(totalPagesWords);

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
  }, []);
  const columnsRecommend = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    { Header: "", accessor: "..." },
  ];
  return (
    <Container>
    <Dashboard currentPage={currentPage} id='recommend'/>
    <WordsTable columns={columnsRecommend} data={recommend} id='recommend'/>
    {totalPages > 0 && (
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
          </WrapPagination>)}
    </Container>
  );
};

export default RecommendPage;
