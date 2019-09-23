import React from "react";
import PropTypes from "prop-types";

const PhoneNumber = (props) => { 
    const href = "callto:" + (props.value.replace("(","").replace(")","").replace(" ","").replace("-",""));
    return <a href={href}>{props.value}</a>;
};

export default PhoneNumber;

PhoneNumber.propTypes = {
    value: PropTypes.string
};
