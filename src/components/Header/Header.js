import React from 'react'
import "./header-style.css"


function Header({title}) {
    return (
       <>
       <h1 className="header" title="Header">{title}</h1>
       </>
    )
}

export default Header
