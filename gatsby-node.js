const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, actions  }) => {
    const { createPage } = actions ;

    return new Promise((resolve, reject) => {
        // Templates
        const pageTemplate = path.resolve("./src/templates/page.js");
        const postTemplate = path.resolve("./src/templates/post.js");

        resolve(
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)

                // Pages detail
                const pages = result.data.allWordpressPage.edges
                console.log("pages", pages)
                pages.forEach(edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

                // Posts detail
                const posts = result.data.allWordpressPost.edges

				createPaginatedPages({
					edges: posts,
					createPage: createPage,
					pageTemplate: 'src/templates/blog.js',
					pageLength: 5,
					pathPrefix: 'blog',
				  })
				
                posts.forEach(edge => {
                    createPage({
                        path: `${edge.node.slug}/`,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                })

            })
        )
    });
};