import React from "react";
import * as PropTypes from "prop-types";

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Section from "../components/section";
import JobsList from "../components/jobs-list";
import ProjectsList from "../components/projects-list";
import Markdown from "../components/markdown";
import { AccomplishmentPredicates } from "../models/accomplishment";

interface IDisplayResumeProps {
  pageContext: {
    resumeVariant: string,
    professionText: string,
    profileContentMarkdown: string
  }
}

const DisplayResume = function(props: IDisplayResumeProps) {
  const accomplishmentFilter = AccomplishmentPredicates.forAllOrSpecificResumeVariant(props.pageContext.resumeVariant);

  return (
    <Layout>
      <SEO title={`Bruce Markham, ${props.pageContext.professionText}`} />

      <Header professionText={props.pageContext.professionText} />

      <main>
        <Section caption="Profile">
          <span><Markdown content={props.pageContext.profileContentMarkdown} /></span>
        </Section>

        <Section caption="Professional Experience">
          <JobsList accomplishmentFilter={accomplishmentFilter} />
        </Section>

        <Section caption="Additional Projects">
          <ProjectsList accomplishmentFilter={accomplishmentFilter} />
        </Section>
      </main>
    </Layout>
  );
}

DisplayResume.propTypes = {
  pageContext: {
    resumeVariant: PropTypes.string.isRequired,
    professionText: PropTypes.string.isRequired,
    profileContentMarkdown: PropTypes.string.isRequired
  }
};

export default DisplayResume;
