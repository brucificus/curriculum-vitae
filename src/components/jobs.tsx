import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { IJob } from "../models/job";
import JobItem from "./job-item";
import Accomplishments from "./accomplishments";

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
          accomplishments {
            description
            for_resume_variants
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  return data.allJobsYaml.nodes.map(({ job }: { job: IJob }) =>
    <JobItem job={job}>
      <Accomplishments accomplishments={job.accomplishments} />
    </JobItem>
  );
};

export default Jobs;