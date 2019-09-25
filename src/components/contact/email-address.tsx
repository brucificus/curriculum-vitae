import React from "react";
import PropTypes from "prop-types";
import { IoIosMail } from "react-icons/io";

import emailAddressStyles from "./email-address.module.scss";

const EmailAddress = (props) => { 
    const href = "mailto:" + props.value;
    return <span className={emailAddressStyles.container} ><a href={href}><IoIosMail /></a>&nbsp;<span>{props.value}</span></span>;
};

export default EmailAddress;

EmailAddress.propTypes = {
    value: PropTypes.string.isRequired,
};
