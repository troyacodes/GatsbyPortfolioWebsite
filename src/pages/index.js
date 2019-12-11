import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BannerSection from "../components/sections/BannerSection"
import AboutSection from "../components/sections/AboutSection"
import WorkSection from "../components/sections/WorkSection"
import SkillsSection from "../components/sections/SkillsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
    </Layout>
  )
}

export default IndexPage
