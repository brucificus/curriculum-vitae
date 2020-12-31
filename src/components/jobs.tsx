import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import JobItem from "./job-item"

const query = graphql`
  query {
    allJobsYaml(sort: {fields: job___employment_start, order: DESC}) {
      nodes {
        job {
          employer_name
          employer_location
          employment_start
          employment_end
          job_title_final
          accomplishments
        }
      }
    }
  }
`
const Jobs = () => {
    const data = useStaticQuery(query);
    return data.allJobsYaml.nodes.map(({ job }) => (
        <JobItem
            employerName={job.employer_name}
            employerLocation={job.employer_location}
            employmentStart={job.employment_start}
            employmentEnd={job.employment_end}
            jobTitleFinal={job.job_title_final}
            accomplishments={job.accomplishments}
        />
    ));
};

export default Jobs;