import React from "react"

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Section from "../components/section";
import ProfileText from "../components/profile-text";
import JobsList from "../components/jobs-list";
import ProjectsList from "../components/projects-list";
import { AccomplishmentPredicates } from "../models/accomplishment";

const IndexPage = function() {
  const accomplishmentFilter = AccomplishmentPredicates.forAllOrSpecificResumeVariant("srsweng");
  const profession_text = "Senior Software Engineer";

  return (
    <Layout>
      <SEO title={`Bruce Markham, ${profession_text}`} />

      <Header profession_text={profession_text} />

      <main>
        <Section caption="Profile">
          <ProfileText/>
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

export default IndexPage
