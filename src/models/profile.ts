import PropTypes from "prop-types";

export interface IProfile {
    content: string,
    for_resume_variants: string
}

export function profilePropType(): PropTypes.Validator<PropTypes.InferType<IProfile>> {
    return PropTypes.shape({
        content: PropTypes.string.isRequired,
        for_resume_variants: PropTypes.string.isRequired
    });
};

export type ProfilePredicate = (value: IProfile) => boolean;

export class ProfilePredicates {
    public static forDefault(): ProfilePredicate {
        const parseResumeVariantsSpecifier = (value: string): string[] => value.split(",").map(j => j.trim().toLowerCase());

        return function _forDefault(i) {
            const parsedResumeVariantsSpecifier = parseResumeVariantsSpecifier(i.for_resume_variants);
            return parsedResumeVariantsSpecifier.includes("default");
        };
    }

    public static forSpecificResumeVariant(resume_variant: string): ProfilePredicate {
        const parseResumeVariantsSpecifier = (value: string): string[] => value.split(",").map(j => j.trim().toLowerCase());

        return function _forSpecificResumeVariant(i) {
            const parsedResumeVariantsSpecifier = parseResumeVariantsSpecifier(i.for_resume_variants);
            return parsedResumeVariantsSpecifier.includes(resume_variant.toLowerCase());
        };
    }
};

export function profilePredicatePropType() { return PropTypes.func; }