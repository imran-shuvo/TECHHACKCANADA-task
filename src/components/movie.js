import React from 'react'
import PageTitle from './pageTitle'
import Content from './content'


const Movie=(props)=>{

    return(
		<div>
            <PageTitle titleText="Popular Movies"  />
            <Content type="movie" />
        </div>

    )
}

export default Movie