/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import * as path from "path";
import { Actions } from "gatsby";

export function createPages({ graphql, actions }: { graphql: any, actions: Actions }) {
    const { createPage } = actions;
    const displayResumeTemplate = path.resolve('src/templates/display-resume.tsx');

    createPage({
        path: '/',
        component: displayResumeTemplate,
        context: {
            resumeVariant: "srsweng",
            professionText: "Senior Software Engineer"
        }
    });
};