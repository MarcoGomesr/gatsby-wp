'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
					format
					title
					date(formatString: "MMMM DD, YYYY")
					excerpt
					
                }
            }
        }
    }
`