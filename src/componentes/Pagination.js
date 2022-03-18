import React from "react";

const Pagination = (props) => {
   // console.log(props)
    const {clickLeft, clickRight, page, totalPages} = props;

    return (
        <div className="pagination">
            <div className="paggination-btn">
                <button onClick={clickLeft}>
                    <div>Anterior</div>
                </button>
            </div>
            <div className="pagination-text"> {page} a {totalPages}</div>
            <div className="paggination-btn"> 
                <button onClick={clickRight}>
                    <div>Siguiente</div>
                </button>
            </div>
        </div>

    )
}


export default Pagination;