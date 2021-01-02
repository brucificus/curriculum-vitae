import React from "react";
import { IProject, projectPropTypes } from "../models/project";

import jobItemStyles from "./project-item.module.scss";
import TimeRange from "./time-range";

const JobItem = (props: IProject) =>
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.roleFinal}>{props.role_final}</span>
            <span className={jobItemStyles.projectName}>{props.project_name}</span>
            <span className={jobItemStyles.projectLocation}>{props.project_location}</span>
            <span className={jobItemStyles.projectTimeRange}><TimeRange start={props.project_start} end={props.project_end}/></span>
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

JobItem.propTypes = projectPropTypes();