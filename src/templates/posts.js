import React from "react";
import Link from "gatsby-link";
import Layout from '../layouts';
import Img from 'gatsby-image'

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const checkifImageExist = (node) => {

	let content = '';

	if ( node.featured_media  ){
		if ( node.featured_media.localFile.childImageSharp.resolutions  ){
			content = <div> <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} /></div>
		}
	}

	return content

	
	
}



const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
	
	
    return (
        <Layout>
            {group.map(({ node }) => (

                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
				
                    <Link to={ node.slug}>
                        <h3>{node.title}</h3>
                    </Link>

					{ checkifImageExist(node) }

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
			))}
            <div className="previousLink">
                <NavLink test={first} url={"/posts/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/posts/" + nextUrl} text="Go to Next Page" />
            </div>
        </Layout>
    );
};
export default IndexPage;