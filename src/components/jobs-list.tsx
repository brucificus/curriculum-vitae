import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AccomplishmentPredicate, accomplishmentPredicatePropType } from "../models/accomplishment";
import { IJob } from "../models/job";
import JobsListItem from "./jobs-list-item";
import AccomplishmentsList from "./accomplishments-list";

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

interface IJobsListProps {
  accomplishmentFilter: AccomplishmentPredicate
}

const JobsList = (props: IJobsListProps) => {
  const data = useStaticQuery(query);
  return data.allJobsYaml.nodes.map(function ({ job }: { job: IJob }) {
    const accomplishments = job.accomplishments.filter(props.accomplishmentFilter);
    if (accomplishments.length) {
      return (
        <JobsListItem job={job}>
          <AccomplishmentsList accomplishments={accomplishments} />
        </JobsListItem>
      );
    } else {
      return <></>;
    }
  });
};

JobsList.propTypes = {
  accomplishmentFilter: accomplishmentPredicatePropType().isRequired
}

export default JobsList;