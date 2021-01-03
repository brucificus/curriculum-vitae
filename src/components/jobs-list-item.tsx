import React from "react";
import PropTypes from "prop-types";

import { IJob, jobPropTypes } from "../models/job";
import jobsListItemStyles from "./jobs-list-item.module.scss";
import TimeRange from "./time-range";

interface IJobsListItemProps {
    job: IJob,
    children: PropTypes.ReactNodeLike
};

const JobsListItem = (props: IJobsListItemProps) => (
    <article className={jobsListItemStyles.container}>
        <header>
            <span className={jobsListItemStyles.jobTitleFinal}>{props.job.job_title_final}</span>
            <span className={jobsListItemStyles.employerName}>{props.job.employer_name}</span>
            <span className={jobsListItemStyles.employerLocation}>{props.job.employer_location}</span>
            <span className={jobsListItemStyles.employmentTimeRange}><TimeRange start={props.job.employment_start} end={props.job.employment_end}/></span>
        </header>
        <main>
            {props.children}
        </main>
    </article>
);

export default JobsListItem;

JobsListItem.propTypes = {
    job: jobPropTypes(),
    children: PropTypes.node.isRequired
};