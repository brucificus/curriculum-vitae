import React from "react";
import PropTypes from "prop-types";
import { IoIosPhonePortrait } from "react-icons/io";

import * as phoneNumberStyles from "./phone-number.module.scss";

const PhoneNumber = (props) => { 
    const href = "callto:" + (props.value.replace("(","").replace(")","").replace(" ","").replace("-",""));
    return <span className={phoneNumberStyles.container}><a href={href}><IoIosPhonePortrait /></a>&nbsp;<span>{props.value}</span></span>;
};

export default PhoneNumber;

PhoneNumber.propTypes = {
    value: PropTypes.string
};
