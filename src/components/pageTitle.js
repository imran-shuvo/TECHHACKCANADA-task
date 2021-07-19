import React from 'react'


const PageTitle=(props)=>{

    return(
		<div style={{backgroundColor:"grey", fontSize:"20px"}}> 
           <p style={{color:"white",padding:"10px 0px",marginLeft:"40%"}}> {props.titleText}</p>

            
  		</div>

    )
}

export default PageTitle