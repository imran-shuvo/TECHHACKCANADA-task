import React from 'react'


const PageTitle=(props)=>{

    return(
		<div style={{backgroundColor:"grey", fontSize:"20px"}}> 
           <p style={{color:"rgb(0, 191, 255)",padding:"15px",marginLeft:"40%"}}> {props.titleText}</p>

            
  		</div>

    )
}

export default PageTitle