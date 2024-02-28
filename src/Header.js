import React from 'react'

const Header = (props) => {
  return (
    <header>
        <nav>
            {props.headers}
        </nav>
    </header>
  )
}

export default Header