import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onBookMarkToggle,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark {...user} onBookMarkToggle={onBookMarkToggle} />
            )
        },
        delete: {
            component: (user) => (
                <button
                    type="button"
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func,
    onBookMarkToggle: PropTypes.func,
    onDelete: PropTypes.func,
    selectedSort: PropTypes.object
};

export default UserTable;
