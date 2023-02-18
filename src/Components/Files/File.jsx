import React from 'react'
import {BsFileText} from "react-icons/bs"
import "./File.css"
const file=[
    {
        id:1,
        file:"Check Up Results.pdf"
    },
    {
        id:2,
        file:"Check Up Results.pdf"
    },
    {
        id:3,
        file:"Check Up Results.pdf"
    },
    {
        id:4,
        file:"Check Up Results.pdf"
    },
]
const File = () => {
  return (
    <>
        {file.map(({id, file})=>{
            return <div className="file" key={id}>
                <a href="#" >
                    <BsFileText />
                    <span>{file}</span>
                    </a>
            </div>
        })}
    </>
  )
}

export default File