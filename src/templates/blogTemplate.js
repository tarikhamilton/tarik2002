import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  const {
    mdx: { frontmatter, body },
  } = data // data.markdownRemark holds our post data

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {/* <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2> */}
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
