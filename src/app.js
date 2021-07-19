import React from 'react'
import Header from "./components/header"
import Footer from './components/footer'

import Movie from './components/movie'
import Home from './components/home'
import Series  from './components/series'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = ()=>{

    return(
        <BrowserRouter>

            <div>
                <Header />
                
                    {/* <Home /> */}

                <Footer />

            </div>

            <Switch>
                <Route exact path="/series/">
                    <Series/> 
                </Route>

                <Route exact path="/movies/">
                    <Movie/> 
                </Route>
                <Route exact path={["/","/Home/"]}>
                    <Home/> 
                </Route>
            </Switch>
        </BrowserRouter>
        
      
    )

}

export default App