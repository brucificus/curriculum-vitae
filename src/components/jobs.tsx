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
            employer_name={job.employer_name}
            employer_location={job.employer_location}
            employment_start={job.employment_start}
            employment_end={job.employment_end}
            job_title_final={job.job_title_final}
            accomplishments={job.accomplishments}
        />
    ));
};

export default Jobs;