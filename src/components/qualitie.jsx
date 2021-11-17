import React from "react";
const Qualities = (props) => {
    const quality = props;
    const getBageClassQuality = (qualityColor) => {
        let classes = "badge m-2 bg-";
        classes += qualityColor;
        return classes;
    };

    return (
        <span key={quality._id} className={getBageClassQuality(quality.color)}>
            {quality.name}{" "}
        </span>
    );
};

export default Qualities;
