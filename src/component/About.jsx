import React from 'react'
import "./css/About.css"
import Sidebar from './Sidebar'
import Tarihce from "./Tarihce"
import Organization from './Organization'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 function About() {
    return (
        <div className="about container">
            <div className="row mx-4">
         <Sidebar />


                <div className=" col-md-8 border rounded my-4 p-4 date">
                 <Router>
                  <Switch>
                   <Route path="/hakkimizda" exact>
                    <Tarihce />
                  </Route>
                  <Route path="/hakkimizda/organizasyon" >
                    <Organization />
                  </Route>
                 </Switch>
                 </Router>
                </div>
            </div>
        </div>
    )
}

export default About



