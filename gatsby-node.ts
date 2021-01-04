/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import * as path from "path";
import { Actions } from "gatsby";

import { IProfile, ProfilePredicates } from "./src/models/profile";

type GraphqlDirectQuery = <TResult>(query: TemplateStringsArray | string) => Promise<TResult>;

async function getAllResumeProfileVariants(graphql: GraphqlDirectQuery): Promise<IProfile[]> {
    interface IProfileVariantsYamlQueryResult {
        data: {
            allProfileVariantsYaml: {
                edges: [
                    {
                        node: IProfile
                    }
                ]
            }
        }
    }

    const allResumeProfileVariantsQueryResult = await graphql<IProfileVariantsYamlQueryResult>(`
    query {
        allProfileVariantsYaml(filter: {}) {
          edges {
            node {
              content
              for_resume_variants
            }
          }
        }
      }
    `);
    
    return allResumeProfileVariantsQueryResult.data.allProfileVariantsYaml.edges.map(e => e.node);
}

export async function createPages({ graphql, actions }: { graphql: GraphqlDirectQuery, actions: Actions }): Promise<void> {
    const { createPage } = actions;
    const displayResumeTemplate = path.resolve('src/templates/display-resume.tsx');

    const allResumeProfileVariants = await getAllResumeProfileVariants(graphql);
    const getResumeProfileVariantOrDefault = function (resumeVariant: string): IProfile {
        const specificIfFound = allResumeProfileVariants.filter(ProfilePredicates.forSpecificResumeVariant(resumeVariant))[0];
        const defaultIfFound = allResumeProfileVariants.filter(ProfilePredicates.forDefault())[0];
        return specificIfFound || defaultIfFound;
    }

    const resumeVariant = "srsweng";
    createPage({
        path: '/',
        component: displayResumeTemplate,
        context: {
            resumeVariant: resumeVariant,
            professionText: "Senior Software Engineer",
            profileContentMarkdown: getResumeProfileVariantOrDefault(resumeVariant).content
        }
    });
};