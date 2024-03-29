
import { useState } from "react";
import { useTable } from "react-table";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'

import {
  Button,
  ButtonModal,
  IconWrapper,
  SvgArrow,
  SvgDate,
  SvgMap,
  SvgModal,
  Table,
  Td,
  TextAdd,
  Th,
} from "./WordsTable.styled";
import sprite from "../../assets/sprite.svg";
import { deleteWords, wordsAdd } from "../../redux/Word/operations";
import { useDispatch } from "react-redux";
import ModalEdit from "../Modal/ModalEdit";
import  Modal  from "../Modal/Modal";
import EditWordForm from "../Modal/EditModal/EditModal";

function WordsTable  ({
  columns,
  data,
  id,
  onPageChange,
  totalPages,
  currentPage,
}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const dispatch = useDispatch();

  const [selectedRowIndexEdit, setSelectedRowIndexEdit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModal = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRowIndex(null);
    setIsOpen(false);
  };

  const openModalEdit = (rowIndex) => {
    setSelectedRowIndexEdit(rowIndex);
    setIsOpenEdit(true);
  };

  const closeModalEdit = () => {
    setSelectedRowIndexEdit(null);
    setIsOpenEdit(false);
  };

  const addWordToOwn = (id) => {
    dispatch(wordsAdd(id));
  };
  const hendleDelite = (id) => {
    dispatch(deleteWords(id.original._id))
    closeModal()
  }

  const hendleOpen =async (id) => {

 openModalEdit(id.id)

}
const hendleAddDictionary   =  (id) => {
  addWordToOwn(id.original._id);
  Notify.success("word add to dictionary");
}

  return (
    <>
      <Table {...getTableProps()} $id={id}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={nanoid()}>
              {headerGroup.headers.map((column, index) => (
                <Th key={nanoid()}  {...column.getHeaderProps()}>
                  <IconWrapper>
                    {index < 2 ? (
                      <>
                        {column.render("Header")}
                        {index === 0 && (
                          <SvgMap>
                            <use href={sprite + "#icon-united-kingdom"}></use>
                          </SvgMap>
                        )}
                        {index === 1 && (
                          <SvgMap>
                            <use href={sprite + "#icon-ukraine"}></use>
                          </SvgMap>
                        )}
                      </>
                    ) : (
                      column.render("Header")
                    )}
                  </IconWrapper>
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={nanoid()}>
                {row.cells.map((cell, index) => (
                  <Td key={nanoid()}  {...cell.getCellProps()}>
                    {index === row.cells.length - 1 ? (
                      id === "recommend" ? (
                        <Button onClick={()=>hendleAddDictionary(row) }>
                          <TextAdd>Add to dictionary</TextAdd>
                          <SvgArrow>
                            <use href={sprite + "#icon-switch-horizontal-01-1"}></use>
                          </SvgArrow>
                        </Button>
                      ) : (
                        <>
                          {isOpen ? (
                            <Button onClick={() => closeModal()}>
                           ...
                            </Button>
                          ) : (
                            <Button onClick={() => openModal(row.id)}>
                             ...
                            </Button>
                          )}
                          {selectedRowIndex === row.id && (
                            <ModalEdit closeModal={closeModal} isOpen={isOpen}>
                              {isOpenEdit & isOpen ?  (
                                <ButtonModal onClick={() => closeModalEdit()}>
                                  <SvgModal>
                                    <use href={sprite + "#icon-edit-01"}></use>
                                  </SvgModal>
                                  Edit
                                </ButtonModal>
                              ) : (
                                <ButtonModal
                                  onClick={ ()=> openModalEdit(row.id) }
                                >
                                  <SvgModal>
                                    <use href={sprite + "#icon-edit-01"}></use>
                                  </SvgModal>
                                  Edit
                                </ButtonModal>
                              )}
                              {selectedRowIndexEdit === row.id && (
                                <Modal
                                  onClose={closeModalEdit}
                                  isOpen={isOpenEdit}
                                >
                                  <EditWordForm
                                    id={row.original}
                                    onClose={closeModalEdit}
                                  />
                                </Modal>
                              )}
                              <ButtonModal
                                onClick={()=>hendleDelite(row)}
                              >
                                <SvgModal>
                                  <use href={sprite + "#icon-trash-03"}></use>
                                </SvgModal>
                                Delete
                              </ButtonModal>
                            </ModalEdit>
                          )}
                        </>
                      )
                    ) : (
                      cell.render("Cell")
                    )}
                  </Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};


export default WordsTable