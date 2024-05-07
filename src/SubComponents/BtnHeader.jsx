import React from 'react'

const BtnHeader = (props) => {
  return (
    <a className="header__nav-link" href="#">
    {props.textContent}
  </a>
  )
}

export default BtnHeader