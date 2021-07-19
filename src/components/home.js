import React from 'react'
import PageTitle from './pageTitle'



const Home=(props)=>{

    return(
        <div>
            <PageTitle titleText="Home Page"  />
            <a href="/series/">Series</a>
            <a href="/movies/">Movie</a>
        </div>  
      

    )
}

export default Home