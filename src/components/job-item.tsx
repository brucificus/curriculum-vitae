import React from "react";
import { IJob, jobPropTypes } from "../models/job";

import jobItemStyles from "./job-item.module.scss";
import TimeRange from "./time-range";

const JobItem = (props: IJob) =>
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.jobTitleFinal}>{props.job_title_final}</span>
            <span className={jobItemStyles.employerName}>{props.employer_name}</span>
            <span className={jobItemStyles.employerLocation}>{props.employer_location}</span>
            <span className={jobItemStyles.employmentTimeRange}><TimeRange start={props.employment_start} end={props.employment_end}/></span>
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

JobItem.propTypes = jobPropTypes();