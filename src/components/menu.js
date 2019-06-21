import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
	<div style={{
		background: '#f4f4f4',
		paddingTop: '10px'
	}}>
		<ul style={{
			listStyle: 'none',
			display: 'flex',
			justifyContent: 'space-evenly'
		}}>

			<li>
				<Link to="/" >Home</Link>
				<Link to="/about" >About</Link>
				<Link to="/services" >Services</Link>
				<Link to="/blog" >Blog</Link>
			</li>
		</ul>
		
	</div>
)

export default Menu