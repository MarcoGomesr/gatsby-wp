
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
		<div>
			<h1>About Us</h1>
			<p>lorem30	</p>
		</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage