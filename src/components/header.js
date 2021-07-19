import React from 'react'
import './header.css'


const Header = ()=>{

    return(
      
            <div className="header">
                <a href="#default" className="logo">Demo Streaming</a>
                <div className="header-right">
                    
                  
                    <a className="active" href="/Home/">Home</a>
                    <a href="/series/">Series</a>
                    <a href="/movies/">Movies</a>
                </div>
            </div>
       
        
    )

}

export default Header