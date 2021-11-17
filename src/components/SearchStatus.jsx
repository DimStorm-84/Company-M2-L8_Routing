import React from "react";
import PropTypes from "prop-types";
const SearchStatus = (props) => {
    const isPhraseChanged = (number) => {
        const phraseChangeNumberArray = [2, 3, 4];
        const phraseNotChangeNumberArra = [12, 13, 14];
        const numberStr = number.toString();
        const Length = numberStr.length;
        const last = Number(numberStr[Length - 1]);

        if (Length === 1) {
            return phraseChangeNumberArray.some((s) => s === last);
        } else {
            const lastTwoNumber = Number(
                numberStr[Length - 2] + numberStr[Length - 1]
            );
            return (
                phraseChangeNumberArray.some((s) => s === last) &&
                !phraseNotChangeNumberArra.some((s) => s === lastTwoNumber)
            );
        }
    };
    const renderPhrase = (number) => {
        if (number) {
            // const isChange = phraseChangeNumberArray.some(s=> s === getLastNumber(number));
            if (isPhraseChanged(number)) {
                return `${number} человека тусанут с тобой сегодня`;
            }
            return `${number} человек тусанет с тобой сегодня`;
        } else {
            return ` с тобой никто не тусанет`;
        }
    };

    const getBageClasses = (number) => {
        let classes = "badge m-2 bg-";
        classes += number === 0 ? "danger" : "primary";
        return classes;
    };

    return (
        <span className={getBageClasses(props.totalItems)}>
            {renderPhrase(props.totalItems)}{" "}
        </span>
    );
};

SearchStatus.propTypes = {
    totalItems: PropTypes.number.isRequired
};

export default SearchStatus;
