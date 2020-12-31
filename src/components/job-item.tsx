import React from "react";
import PropTypes from "prop-types";

import jobItemStyles from "./job-item.module.scss";
import TimeRange from "./time-range";

const JobItem = (props) =>
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.jobTitleFinal}>{props.jobTitleFinal}</span>
            <span className={jobItemStyles.employerName}>{props.employerName}</span>
            <span className={jobItemStyles.employerLocation}>{props.employerLocation}</span>
            <span className={jobItemStyles.employmentTimeRange}><TimeRange start={props.employmentStart} end={props.employmentEnd}/></span>
        </header>
        <main>
            <ul>
                {props.accomplishments.map(i =>
                    <li dangerouslySetInnerHTML={{ __html: i }} />
                )}
            </ul>
        </main>
    </article>;

export default JobItem;

JobItem.propTypes = {
    employerName: PropTypes.string.isRequired,
    employerLocation: PropTypes.string.isRequired,
    employmentStart: PropTypes.string.isRequired,
    employmentEnd: PropTypes.string,
    jobTitleFinal: PropTypes.string.isRequired,
    accomplishments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
