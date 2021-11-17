import React from "react";
import PropTypes from "prop-types";
const BookMark = (props) => {
    const getBookMarkIcon = () => {
        let className = "";
        const isBookMark = props.bookmark;
        if (!isBookMark) className = "bi bi-bookmark";
        else className = "bi bi-bookmark-fill";
        return className;
    };
    return (
        <button type="button" onClick={() => props.onBookMarkToggle(props._id)}>
            <i className={getBookMarkIcon()}></i>
        </button>
    );
};

BookMark.propTypes = {
    _id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onBookMarkToggle: PropTypes.func.isRequired
};

export default BookMark;
