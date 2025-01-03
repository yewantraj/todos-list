import React from 'react'

const About = () => {
    let aboutStyle = {
        minHeight: "80vh",
        margin: "20px 115px"
      }
    return (
        <div style={aboutStyle}>
            <h3>About</h3>
            <p>
            Welcome to Todo List App, a simple and efficient tool to help you stay organized! Built using React, this app focuses on the essentials of task management, allowing you to easily create and delete tasks. With its clean and intuitive interface, Todo List App ensures a seamless experience for managing your daily to-dos. Whether you're jotting down quick reminders or organizing your tasks, this app keeps things straightforward and hassle-free. Start using Todo List App today and bring clarity to your day, one task at a time!</p>
        </div>
    )
}

export default About
