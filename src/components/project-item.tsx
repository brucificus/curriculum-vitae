import React from "react";
import PropTypes from "prop-types";

import { IProject, projectPropTypes } from "../models/project";
import jobItemStyles from "./project-item.module.scss";
import TimeRange from "./time-range";

interface IProjectItemProps {
    project: IProject,
    children: PropTypes.ReactNodeLike
};

const ProjectItem = (props: IProjectItemProps) =>
    <article className={jobItemStyles.container}>
        <header>
            <span className={jobItemStyles.roleFinal}>{props.project.role_final}</span>
            <span className={jobItemStyles.projectName}>{props.project.project_name}</span>
            <span className={jobItemStyles.projectLocation}>{props.project.project_location}</span>
            <span className={jobItemStyles.projectTimeRange}><TimeRange start={props.project.project_start} end={props.project.project_end}/></span>
        </header>
        <main>
            {props.children}
        </main>
    </article>;

export default ProjectItem;

ProjectItem.propTypes = {
    project: projectPropTypes(),
    children: PropTypes.node.isRequired
};