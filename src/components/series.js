import React from 'react'
import PageTitle from './pageTitle'
import Content from './content'


const Series=(props)=>{

    return(
		<div>
            <PageTitle titleText="Popular Series"  />
            <Content type="series" />
        </div>

    )
}

export default Series