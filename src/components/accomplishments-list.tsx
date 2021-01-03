import React from "react";
import PropTypes from "prop-types";

import { IAccomplishment, accomplishmentPropType } from "../models/accomplishment";
import AccomplishmentsListItem from "./accomplishments-list-item";

interface IAccomplishmentsListProps {
    accomplishments: IAccomplishment[]
};

const AccomplishmentsList = (props: IAccomplishmentsListProps) => (
    <ul>
        {props.accomplishments.map(i => <AccomplishmentsListItem accomplishment={i} />)}
    </ul>
);

export default AccomplishmentsList;

AccomplishmentsList.propTypes = {
    accomplishments: PropTypes.arrayOf(accomplishmentPropType()).isRequired
};