import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AccomplishmentPredicate, accomplishmentPredicatePropType } from "../models/accomplishment";
import { IProject } from "../models/project";
import ProjectsListItem from "./projects-list-item";
import AccomplishmentsList from "./accomplishments-list";

const query = graphql`
  query {
    allProjectsYaml(sort: {fields: project___project_start, order: DESC}) {
      nodes {
        project {
          project_name
          project_location
          project_start
          project_end
          role_final
          accomplishments {
            description
            for_resume_variants
          }
        }
      }
    }
  }
`

interface IProjectsListProps {
  accomplishmentFilter: AccomplishmentPredicate
}

const ProjectsList = (props: IProjectsListProps) => {
  const data = useStaticQuery(query);
  
  return data.allProjectsYaml.nodes.map(function ({ project }: { project: IProject }) {
    const accomplishments = project.accomplishments.filter(props.accomplishmentFilter);
    
    if (accomplishments.length) {
      return (
        <ProjectsListItem project={project}>
          <AccomplishmentsList accomplishments={accomplishments} />
        </ProjectsListItem>
      );
    } else {
      return <></>;
    }
  });
};

ProjectsList.propTypes = {
  accomplishmentFilter: accomplishmentPredicatePropType().isRequired
}

export default ProjectsList;