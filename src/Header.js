import React from 'react'

const Header = (props) => {
  return (
    <header>
        <nav>
            <h1>{props.headers}</h1>
        </nav>
    </header>
  )
}

export default Header