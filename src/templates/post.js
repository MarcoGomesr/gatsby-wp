import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout.js"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
		const post = this.props.data.wordpressPost
		const fixed = ( post.featured_media ) ? post.featured_media.localFile.childImageSharp.fixed : null
		
		let facebook = ''
        let twitter = ''
		

		if(post.acf !== null) {
			
            if(post.acf.facebook !== null ) {
                facebook = `<h3>Facebook</h3> ${post.acf.facebook}`
            }

            if(post.acf.twitter !== null ) {
                twitter = `<h3>Twitter</h3><span>${post.acf.twitter}`
            }

        }
		
        return (
			<Layout>
				<div>
					<h1 dangerouslySetInnerHTML={{ __html: post.title }} />
					{ fixed && 
						<Img fixed ={fixed} alt="" />
					}
					
					
					<div dangerouslySetInnerHTML={{ __html: post.content }} />

					<div dangerouslySetInnerHTML={{__html: facebook}}></div>
					<div dangerouslySetInnerHTML={{__html: twitter}}></div>


				</div>
			</Layout>
        )
    }
}


export default PostTemplate


export const pageQuery = graphql`

    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id } ) {
            title
			content
			acf{
				facebook
				twitter
			}
		
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`