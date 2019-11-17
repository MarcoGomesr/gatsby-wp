import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"

export default () => (
 <StaticQuery
	query={graphql`

	query LayoutQuery {
		allWordpressMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
		  edges {
			node {
			  id
			  name
			  items {
				title
				url
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
					{ data.allWordpressMenusMenusItems.edges[0].node.items.map((item) =>
						<li key={item.url}>
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