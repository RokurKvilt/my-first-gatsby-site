import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/styles.css'; // Import your CSS file



const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about" className="link">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage