import PropTypes from "prop-types";

export interface IAccomplishment {
    description: string,
    for_resume_variants: string
}

export function accomplishmentPropType(): PropTypes.Validator<PropTypes.InferType<IAccomplishment>> {
    return PropTypes.shape({
        description: PropTypes.string.isRequired,
        for_resume_variants: PropTypes.string.isRequired
    });
};