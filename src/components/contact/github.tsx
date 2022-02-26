import React from "react";
import PropTypes from "prop-types";
import { IoLogoGithub } from "react-icons/io";

import * as linkedinStyles from "./github.module.scss";

const LinkedIn = (props) => { 
    const href = "https://github.com/" + props.repoOwner;
    const text = "github.com/" + props.repoOwner;
    return <span className={linkedinStyles.container} ><a href={href}><IoLogoGithub /></a>&nbsp;<span>{text}</span></span>;
};

export default LinkedIn;

LinkedIn.propTypes = {
    repoOwner: PropTypes.string.isRequired,
};
