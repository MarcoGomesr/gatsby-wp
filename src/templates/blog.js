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

					{node.featured_media && node.featured_media.localFile.childImageSharp.fixed &&
                        <div>
                            <Img fixed={node.featured_media.localFile.childImageSharp.fixed} />
                        </div>
                    }

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
			))}
            <div className="previousLink">
                <NavLink test={first} url={"/blog/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page" />
            </div>
        </Layout>
    );
};
export default IndexPage;