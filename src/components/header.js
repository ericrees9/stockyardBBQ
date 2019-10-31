import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fcce09`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        justifyContent: 'space-between',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Stockyard BBQ
        </Link>
      </h1>
      <div 
        style={{
          display: `flex`,
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            margin: `.5em`,
          }}
        >
          Email
        </div>
        <div
          style={{
            margin: `.5em`,
          }}
        >
          Phone number
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stockyard BBQ`,
}

export default Header
