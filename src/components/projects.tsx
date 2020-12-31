import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectItem from "./project-item"

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
          accomplishments
        }
      }
    }
  }
`
const Jobs = () => {
    const data = useStaticQuery(query);
    return data.allProjectsYaml.nodes.map(({ project }) => (
        <ProjectItem
            projectName={project.project_name}
            projectLocation={project.project_location}
            projectStart={project.project_start}
            projectEnd={project.project_end}
            roleFinal={project.role_final}
            accomplishments={project.accomplishments}
        />
    ));
};

export default Jobs;