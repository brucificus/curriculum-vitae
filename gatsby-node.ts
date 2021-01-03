/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import * as path from "path";
import { Actions } from "gatsby";

type GraphqlDirectQuery = <TResult>(query: TemplateStringsArray | string) => Promise<TResult>;
interface IMarkdownRemarkQueryResult {
    data: {
        allMarkdownRemark: {
            edges: [
                {
                    node: {
                        html: string
                    }
                }
            ]
        }
    }
}

export async function createPages({ graphql, actions }: { graphql: GraphqlDirectQuery, actions: Actions }): Promise<void> {
    const { createPage } = actions;
    const displayResumeTemplate = path.resolve('src/templates/display-resume.tsx');

    const profileContentHtmlQueryResult = await graphql<IMarkdownRemarkQueryResult>(`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(attributes)\\/(profile)/"}}) {
          edges {
            node {
              html
            }
          }
        }
    }`);
    const profileContentHtml = profileContentHtmlQueryResult.data.allMarkdownRemark.edges[0].node.html;

    createPage({
        path: '/',
        component: displayResumeTemplate,
        context: {
            resumeVariant: "srsweng",
            professionText: "Senior Software Engineer",
            profileContentHtml: profileContentHtml
        }
    });
};