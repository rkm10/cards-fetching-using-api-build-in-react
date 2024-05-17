import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const header = ["Mobile", "Audio", "Gaming", "TV"]

export default function NavBar({ setCatagory }) {

      const navigate = useNavigate();

      const handleClick = (element) => {
            setCatagory(element.toLocaleLowerCase());
            navigate('/');
      }

      return (
            <div className="menu">
                  {header.map((element) => {
                        return (
                              <h2 style={{ textDecoration: "none", color: "black", cursor: "pointer" }} onClick={() => { handleClick(element) }} key={element}>{element}</h2>
                        )
                  })}
            </div>
      )
}
