import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {
    mdx: { frontmatter, body },
  } = data // data.markdownRemark holds our post data

  return (
    <>
      <h1 className="text-center">{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`
