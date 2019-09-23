import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import JobItem from "./job-item"

const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(jobs)/"}},
      sort: {fields: frontmatter___employment_start, order: DESC}) {
      edges {
        node {
          frontmatter {
            employer_name
            employer_location
            employment_start
            employment_end
            job_title_final
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
        <JobItem
            employerName={node.frontmatter.employer_name}
            employerLocation={node.frontmatter.employer_location}
            employmentStart={node.frontmatter.employment_start}
            employmentEnd={node.frontmatter.employment_end}
            jobTitleFinal={node.frontmatter.job_title_final}
            overviewHtml={node.html}
        />
    ));
};

export default Jobs;