import React from "react";
import PropTypes from "prop-types";

import { IAccomplishment, accomplishmentPropType } from "../models/accomplishment";
import AccomplishmentItem from "./accomplishment-item";

interface IAccomplishmentsProps {
    accomplishments: IAccomplishment[]
};

const Accomplishments = (props: IAccomplishmentsProps) => (
    <ul>
        {props.accomplishments.map(i => <AccomplishmentItem accomplishment={i} />)}
    </ul>
);

export default Accomplishments;

Accomplishments.propTypes = {
    accomplishments: PropTypes.arrayOf(accomplishmentPropType()).isRequired
};