import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AccomplishmentPredicate, accomplishmentPredicatePropType } from "../models/accomplishment";
import { IProject } from "../models/project";
import ProjectItem from "./project-item";
import Accomplishments from "./accomplishments";

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

interface IProjectsProps {
  accomplishmentFilter: AccomplishmentPredicate
}

const Projects = (props: IProjectsProps) => {
  const data = useStaticQuery(query);
  
  return data.allProjectsYaml.nodes.map(function ({ project }: { project: IProject }) {
    const accomplishments = project.accomplishments.filter(props.accomplishmentFilter);
    
    if (accomplishments.length) {
      return (
        <ProjectItem project={project}>
          <Accomplishments accomplishments={accomplishments} />
        </ProjectItem>
      );
    } else {
      return <></>;
    }
  });
};

Projects.propTypes = {
  accomplishmentFilter: accomplishmentPredicatePropType().isRequired
}

export default Projects;