import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/Layout/layout.js"
import { graphql } from 'gatsby'
import SEO from "../components/seo"


import Img from "gatsby-image"


const PostsTemplate = (props) => {
    
  
  const data = props.data
  return(
            <Layout>
                 <SEO title="Home" />
                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        {node.featured_media && node.featured_media.localFile.childImageSharp.fixed &&
                            <div>
                                <Img fixed={node.featured_media.localFile.childImageSharp.fixed} />
                            </div>
                        }
                    
                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}

            </Layout>
        )
    }


PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    featured_media {
                      localFile {
                        childImageSharp {
                          fixed {
                            src
                            height
                            width
                          }
                        }
                      }
                     }
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`