import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    padding: "20px"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}

export default Footer
