import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"

export default () => (
 <StaticQuery
	query={graphql`

	query LayoutQuery {
		allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
		  edges {
			node {
			  id
			  name
			  items {
				title
				url
				object_slug
			  }
			}
		  }
		}
	  }
	  
	  
	`}

	render={ data => (
		<>
			<nav>
				<ul>
					{ data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) =>
						<li key={item.object_slug}>
							<Link to={item.url}>
								{item.title}
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</>
	)}
 />
)
