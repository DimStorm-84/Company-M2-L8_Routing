import { React, useEffect, useState } from "react";
import Users from "../components/users";
import api from "../API";

const UsersTab = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.default.fetchAll().then((data) => setUsers(data));
    }, []);
    const hasBookMarkProperty =
        users && users.length
            ? Object.prototype.hasOwnProperty.call(users[0], "bookmark")
            : true;
    if (!hasBookMarkProperty) users.map((m) => (m.bookmark = false));

    const handleDelete = (userId) => {
        const newUsers = users.filter((f) => f._id !== userId);
        setUsers(newUsers);
    };

    const handleBookMarkToggle = (userId) => {
        const newUsers = [...users];
        const elementIndex = users.findIndex((f) => f._id === userId);
        newUsers[elementIndex].bookmark = !newUsers[elementIndex].bookmark;
        setUsers(newUsers);
    };

    const conditionalRendering = () => {
        if (users) {
            return (
                <div className="col-lg-8 mx-auto p-3 py-md-5">
                    <main>
                        <Users
                            users={users}
                            onBookMarkToggle={handleBookMarkToggle}
                            onDelete={handleDelete}
                        />
                    </main>
                </div>
            );
        } else {
            return <span id="Loader">Loading......</span>;
        }
    };

    return <>{conditionalRendering()}</>;
};

export default UsersTab;
