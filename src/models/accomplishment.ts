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

export type AccomplishmentPredicate = (value: IAccomplishment) => boolean;

export class AccomplishmentPredicates {
    public static forAll(): AccomplishmentPredicate {
        const parseResumeVariantsSpecifier = (value: string): string[] => value.split(",").map(j => j.trim().toLowerCase());

        return function _forAll(i) {
            const parsedResumeVariantsSpecifier = parseResumeVariantsSpecifier(i.for_resume_variants);
            return parsedResumeVariantsSpecifier.includes("all");
        };
    }

    public static forAllOrSpecificResumeVariant(resume_variant: string): AccomplishmentPredicate {
        const parseResumeVariantsSpecifier = (value: string): string[] => value.split(",").map(j => j.trim().toLowerCase());

        return function _forAllOrSpecificResumeVariant(i) {
            const parsedResumeVariantsSpecifier = parseResumeVariantsSpecifier(i.for_resume_variants);
            return parsedResumeVariantsSpecifier.includes("all") || parsedResumeVariantsSpecifier.includes(resume_variant.toLowerCase());
        };
    }

    public static forSpecificResumeVariant(resume_variant: string): AccomplishmentPredicate {
        const parseResumeVariantsSpecifier = (value: string): string[] => value.split(",").map(j => j.trim().toLowerCase());

        return function _forSpecificResumeVariant(i) {
            const parsedResumeVariantsSpecifier = parseResumeVariantsSpecifier(i.for_resume_variants);
            return parsedResumeVariantsSpecifier.includes(resume_variant.toLowerCase());
        };
    }
};

export function accomplishmentPredicatePropType() { return PropTypes.func; }