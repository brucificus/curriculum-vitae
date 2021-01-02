import PropTypes from "prop-types";
import { Accomplishment, accomplishmentPropType } from "./accomplishment";

export interface IJob {
    employer_name: string;
    employer_location: string;
    employment_start: string;
    employment_end: string | undefined | null;
    job_title_final: string;
    accomplishments: Accomplishment[];
};

export function jobPropTypes(): PropTypes.ValidationMap<IJob> {
    return {
        employer_name: PropTypes.string.isRequired,
        employer_location: PropTypes.string.isRequired,
        employment_start: PropTypes.string.isRequired,
        employment_end: PropTypes.string,
        job_title_final: PropTypes.string.isRequired,
        accomplishments: PropTypes.arrayOf(accomplishmentPropType()).isRequired,
    };
};