import React from "react";
import PropTypes from "prop-types";
import { IoLogoLinkedin } from "react-icons/io";

import linkedinStyles from "./linkedin.module.scss";

const LinkedIn = (props) => { 
    const href = "https://linkedin.com/in/" + props.shortUrlLeaf;
    const text = "linkedin.com/in/" + props.shortUrlLeaf;
    return <span className={linkedinStyles.container} ><a href={href}><IoLogoLinkedin /></a>&nbsp;<span>{text}</span></span>;
};

export default LinkedIn;

LinkedIn.propTypes = {
    shortUrlLeaf: PropTypes.string.isRequired,
};
