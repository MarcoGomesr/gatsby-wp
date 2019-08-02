import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
		const post = this.props.data.wordpressPost
		const resolutions = ( post.featured_media ) ? post.featured_media.localFile.childImageSharp.resolutions : null
		
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
					{ resolutions && 
						<Img resolutions ={resolutions} alt="" />
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
			featured_media {
				localFile {
					childImageSharp {
						fixed {
						  width
						  height
						  src
						  srcSet
						}
					}
				}
			  }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`