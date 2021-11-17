import React from "react";
import PropTypes from "prop-types";

const TableHeaderCaret = ({ selectedSort, item }) => {
    const getCaretIcon = (item) => {
        let className = "";
        if (selectedSort.path === item && selectedSort.order === "asc") {
            className = "bi bi-caret-up-fill";
        } else if (
            selectedSort.path === item &&
            selectedSort.order === "desc"
        ) {
            className = "bi bi-caret-down-fill";
        }
        return className;
    };
    return (
        <>
            <i className={getCaretIcon(item)}></i>
        </>
    );
};

TableHeaderCaret.propTypes = {
    selectedSort: PropTypes.object,
    column: PropTypes.object,
    item: PropTypes.string
};

export default TableHeaderCaret;
