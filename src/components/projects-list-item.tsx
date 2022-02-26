import React from "react";
import PropTypes from "prop-types";

import { IProject, projectPropTypes } from "../models/project";
import * as projectsListItemStyles from "./projects-list-item.module.scss";
import TimeRange from "./time-range";

interface IProjectsListItemProps {
    project: IProject,
    children: PropTypes.ReactNodeLike
};

const ProjectsListItem = (props: IProjectsListItemProps) =>
    <article className={projectsListItemStyles.container}>
        <header>
            <span className={projectsListItemStyles.roleFinal}>{props.project.role_final}</span>
            <span className={projectsListItemStyles.projectName}>{props.project.project_name}</span>
            <span className={projectsListItemStyles.projectLocation}>{props.project.project_location}</span>
            <span className={projectsListItemStyles.projectTimeRange}><TimeRange start={props.project.project_start} end={props.project.project_end}/></span>
        </header>
        <main>
            {props.children}
        </main>
    </article>;

export default ProjectsListItem;

ProjectsListItem.propTypes = {
    project: projectPropTypes(),
    children: PropTypes.node.isRequired
};