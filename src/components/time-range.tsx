import React from "react";
import PropTypes from "prop-types";

const TimeRange = (props) => {
    const year = (d) => (new Date(d)).getFullYear();

    const end = props.end ? year(props.end) : "Present";
    
    return <>{year(props.start)} &ndash; {end}</>;
};

export default TimeRange;

TimeRange.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
};
