import React from "react";
import PropTypes from "prop-types";

const EmailAddress = (props) => { 
    const href = "mailto:" + props.value;
    return <a href={href}>{props.value}</a>;
};

export default EmailAddress;

EmailAddress.propTypes = {
    value: PropTypes.string.isRequired,
};
