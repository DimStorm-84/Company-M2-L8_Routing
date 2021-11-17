import React from "react";
import PropTypes from "prop-types";
import Qualities from "./qualitie";
import BookMark from "./bookmark";

const User = ({ user, onDelete, onBookMarkToggle }) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((quality) => (
                    <Qualities key={quality._id} {...quality} />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark onBookMarkToggle={onBookMarkToggle} {...user} />
            </td>
            <td>
                <button
                    type="button"
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    "user._id": PropTypes.string,
    user: PropTypes.object.isRequired,
    "user.name": PropTypes.string,
    "user.qualities": PropTypes.array,
    "user.qualities.map": PropTypes.array,
    "user.profession": PropTypes.object,
    "user.profession.name": PropTypes.string,
    "user.completedMeetings": PropTypes.number,
    "user.rate": PropTypes.number,
    onBookMarkToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
