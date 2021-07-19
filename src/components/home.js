import React from 'react'
import PageTitle from './pageTitle'



const Home=(props)=>{

    return(
        <div>
        <PageTitle titleText="Home Page"  />
        <div >
           
            <i style={{color:"blue", margin:"50px", fontSize:"100px"}} className="film icon"> <a style={{fontSize:"20px",color:"black"}}  href="/series/">Series</a></i>
            <i style={{ margin:"50px", fontSize:"100px"}} className="film icon"> <a style={{fontSize:"20px"}}  href="/movies/">Movies</a></i>

           
        </div>  
      </div>

    )
}

export default Home