import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AccomplishmentPredicate, accomplishmentPredicatePropType } from "../models/accomplishment";
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

interface IJobsProps {
  accomplishmentFilter: AccomplishmentPredicate
}

const Jobs = (props: IJobsProps) => {
  const data = useStaticQuery(query);
  return data.allJobsYaml.nodes.map(function ({ job }: { job: IJob }) {
    const accomplishments = job.accomplishments.filter(props.accomplishmentFilter);
    if (accomplishments.length) {
      return (
        <JobItem job={job}>
          <Accomplishments accomplishments={accomplishments} />
        </JobItem>
      );
    } else {
      return <></>;
    }
  });
};

Jobs.propTypes = {
  accomplishmentFilter: accomplishmentPredicatePropType().isRequired
}

export default Jobs;