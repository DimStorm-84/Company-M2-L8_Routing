import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../API";
import Qualities from "./qualitie";

// const Post = ({ match, posts }) => {
const UserCard = ({ match }) => {
    //   const postId = match.params.postId;
    const userId = match.params.userId;
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.default.getById(userId).then((data) => setUser(data));
    }, []);

    const history = useHistory();
    const handleSave = () => {
        history.replace("/users");
    };

    const conditionalRendering = () => {
        if (user) {
            return (
                <div>
                    <h1>{user.name}</h1>{" "}
                    <div>
                        <span>Профессия: </span>
                        {user.profession.name}
                    </div>
                    <div>
                        {user.qualities.map((quality) => (
                            <Qualities key={quality._id} {...quality} />
                        ))}
                    </div>
                    <div>
                        <span>completedMeetings: </span>
                        {user.completedMeetings}
                    </div>
                    <div>
                        <span>Rate: </span>
                        {user.rate}
                    </div>
                    <button
                        onClick={() => {
                            handleSave();
                        }}
                    >
                        Все пользователи
                    </button>
                </div>
            );
        } else {
            return <span id="Loader">Loading......</span>;
        }
    };

    return <>{conditionalRendering()}</>;
};

UserCard.propTypes = {
    match: PropTypes.object
};

export default UserCard;
