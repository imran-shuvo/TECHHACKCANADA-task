import React, { useState } from "react"

import axios from "axios"
import './content.css'


const Content=(props)=>{
    const [getData,setData]= useState(null)
    const url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  
    axios.get(url)
    .then(res=>res)
    .then((response)=>{
        const data = response.data.entries
        const seriesArray = data.filter(
           function (item){ 
 
                if(this.count<21 && item.programType ==props.type &&item.releaseYear>=2010){
                    this.count++;
                    return true;
                }
                return false;
             
             
             },{count:0});

        seriesArray.sort((a,b)=>(a.title>b.title?1:-1))
       
        const arr = [];
        for(let i=0;i<seriesArray.length;i++)
        {
            const url = seriesArray[i].images["Poster Art"].url;
            
            arr.push(
                <div className="row">
                    <div className="column">
                        <img src={url} alt="Nature" style={{width:"100%",float:"right"}} />
                        <li>{seriesArray[i].title}</li>
                    </div>

 
                 </div>
            

        
            )
        }
        setData(arr)
     
     
     })
 





    return(
		<div >    
            
            {getData}
            

           
  		</div>

    )
}

export default Content