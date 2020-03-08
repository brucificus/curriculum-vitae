import React from "react"

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Section from "../components/section";
import ProfileText from "../components/profile-text";
import Jobs from "../components/jobs";
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Bruce Markham, Senior Software Engineer" />

    <Header/>

    <main>
      <Section caption="Profile">
        <ProfileText/>
      </Section>

      <Section caption="Professional Experience">
        <Jobs />
      </Section>

      <Section caption="Additional Projects">
        <Projects />
      </Section>
    </main>
  </Layout>
)

export default IndexPage
