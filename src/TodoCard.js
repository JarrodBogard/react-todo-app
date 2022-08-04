import React from "react"

const buttonStyle = {
    cursor: "pointer",
    margin: "10px 5px",
    borderRadius: "5px",
    padding: "5px 30px",
    fontSize: "1.5rem",
    backgroundColor: "#61DAFB",
    color: "white"
}

function TodoCard(props) {
    const {title, removeItem, index} = props
    return (
        <li>{title}
        <button style={buttonStyle} onClick={()=>{removeItem(index)}}>Delete</button>
        </li>
    )
}

export default TodoCard