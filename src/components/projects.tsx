import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const Projects = () => {
  const data = useStaticQuery(query);
  return data.allProjectsYaml.nodes.map(({ project }: { project: IProject }) =>
    <ProjectItem project={project}>
      <Accomplishments accomplishments={project.accomplishments} />
    </ProjectItem>
  );
};

export default Projects;