import React from 'react'

const Footer = () => {
  let footerStyle = {
    padding: "20px"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; 2025 MyTodoList
      </p>
    </footer>
  )
}

export default Footer
