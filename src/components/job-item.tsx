import React from "react";
import PropTypes from "prop-types";

import { IJob, jobPropTypes } from "../models/job";
import jobItemStyles from "./job-item.module.scss";
import TimeRange from "./time-range";

interface IJobItemProps {
    job: IJob,
    children: PropTypes.ReactNodeLike
};

const JobItem = (props: IJobItemProps) => (
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.jobTitleFinal}>{props.job.job_title_final}</span>
            <span className={jobItemStyles.employerName}>{props.job.employer_name}</span>
            <span className={jobItemStyles.employerLocation}>{props.job.employer_location}</span>
            <span className={jobItemStyles.employmentTimeRange}><TimeRange start={props.job.employment_start} end={props.job.employment_end}/></span>
        </header>
        <main>
            {props.children}
        </main>
    </article>
);

export default JobItem;

JobItem.propTypes = {
    job: jobPropTypes(),
    children: PropTypes.node.isRequired
};