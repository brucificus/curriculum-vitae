import PropTypes from "prop-types";

export type Accomplishment = string;

export function accomplishmentPropType(): PropTypes.Validator<Accomplishment>  {
    return PropTypes.string.isRequired;
};