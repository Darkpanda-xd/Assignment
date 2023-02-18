import React from 'react'
import './Schedule.css'
import { BsFileText } from "react-icons/bs";



const Schedule = (props) => {
    console.log(props)
  return (
    <> 
    <div className="s-header">
        <span >Root Canal Treatment</span>
        <span >Show Previous Treatment</span>
    </div>
  
        {    props.schedules.map(({id,date,timeSpan,treatment,dentist,nurse}) =>{
                return(
                   <table className="s-table">
                    <tr key="id">
                      <th className="t-header">{date}</th>
                      <th>Treatment</th>
                      <th>Dentist</th>
                      <th>Nurse</th>
                    </tr>
                    <tr key={id}>
                        <td className="t-data">{timeSpan}</td>
                        <td className="t-data">{treatment}</td>
                        <td className="t-data"> {dentist}</td>
                        <td className="t-data">{nurse}</td>
                        <td className="t-data"><BsFileText/> Note</td>
                    </tr>

                   </table>
                )
            })}
    
    </>
  )
}

export default Schedule