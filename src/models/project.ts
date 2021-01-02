import PropTypes from "prop-types";
import { Accomplishment, accomplishmentPropType } from "./accomplishment";

export interface IProject {
    project_name: string;
    project_location: string;
    project_start: string;
    project_end: string | undefined | null;
    role_final: string;
    accomplishments: Accomplishment[];
};

export function projectPropTypes(): PropTypes.ValidationMap<IProject> {
    return {
        project_name: PropTypes.string.isRequired,
        project_location: PropTypes.string.isRequired,
        project_start: PropTypes.string.isRequired,
        project_end: PropTypes.string,
        role_final: PropTypes.string.isRequired,
        accomplishments: PropTypes.arrayOf(accomplishmentPropType()).isRequired,
    };
};