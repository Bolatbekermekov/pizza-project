import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "../scss/pagination.module.scss"

type PaginationProps = {
  currentPage:number;
  onChangePage:any;
}

export const Pagination:FC<PaginationProps> = ({currentPage,onChangePage}) => {
  return(
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(e)=>onChangePage(e.selected+1)}
    pageRangeDisplayed={3}
    pageCount={3}
    forcePage={currentPage -1}
    renderOnZeroPageCount={null}/>
  )
};
export default Pagination;
