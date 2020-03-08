import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectItem from "./project-item"

const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(projects)/"}},
      sort: {fields: frontmatter___project_start, order: DESC}) {
      edges {
        node {
          frontmatter {
            project_name
            project_location
            project_start
            project_end
            role_final
          }
          html
        }
      }
    }
  }
`
const Jobs = () => {
    const data = useStaticQuery(query);
    return data.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectItem
            projectName={node.frontmatter.project_name}
            projectLocation={node.frontmatter.project_location}
            projectStart={node.frontmatter.project_start}
            projectEnd={node.frontmatter.project_end}
            roleFinal={node.frontmatter.role_final}
            overviewHtml={node.html}
        />
    ));
};

export default Jobs;