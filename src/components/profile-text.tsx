import React from "react";
import { StaticQuery, graphql } from "gatsby";

const ProfileText = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(attributes)\\/(profile)/"}}) {
          edges {
            node {
              html
            }
          }
        }
      }
    `}
    render={data => <span dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />}
  ></StaticQuery>
);

export default ProfileText;
