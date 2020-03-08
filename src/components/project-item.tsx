import React from "react";
import PropTypes from "prop-types";

import jobItemStyles from "./project-item.module.scss";
import TimeRange from "./time-range";

const JobItem = (props) =>
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.roleFinal}>{props.roleFinal}</span>
            <span className={jobItemStyles.projectName}>{props.projectName}</span>
            <span className={jobItemStyles.projectLocation}>{props.projectLocation}</span>
            <span className={jobItemStyles.projectTimeRange}><TimeRange start={props.projectStart} end={props.projectEnd}/></span>
        </header>
        <main dangerouslySetInnerHTML={{ __html: props.overviewHtml }} />
    </article>;

export default JobItem;

JobItem.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectLocation: PropTypes.string.isRequired,
    projectStart: PropTypes.string.isRequired,
    projectEnd: PropTypes.string,
    roleFinal: PropTypes.string.isRequired,
    overviewHtml: PropTypes.string.isRequired,
};
