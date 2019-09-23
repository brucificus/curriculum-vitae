import React from "react"

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";
import Section from "../components/section";
import ProfileText from "../components/profile-text";
import Jobs from "../components/jobs";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header/>

    <Section caption="Profile">
      <ProfileText/>
    </Section>

    <Section caption="Professional Experience">
      <Jobs />
    </Section>
  </Layout>
)

export default IndexPage
