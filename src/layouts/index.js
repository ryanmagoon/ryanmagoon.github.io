import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Footer, Header } from '../components'
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{ overflow: 'hidden' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'viewport', content: 'width=device-width' },
        { name: 'keywords', content: 'javascript, react native, react' },
      ]}
    >
      <meta name="viewport" content="width=device-width" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
