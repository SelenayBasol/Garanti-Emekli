
import {BrowserRouter as Router, useRouteMatch} from "react-router-dom";
import React from 'react'
import "./css/Sidebar.css"
import {Link} from "react-router-dom"


function Sidebar() {
  let match = useRouteMatch();
    return (
               <div className="col-md-4 my-4">
                    <div className="border">
                        <h5 className="my-3">Hakkımızda</h5>
                        <ul>
                           <li>Vakfın Tarihçesi</li>
                           <Link to={`${match.url}/organizasyon`}><li>Organizasyon Yapısı</li> </Link>
                           <li>Sosyal Tesisler</li>
                        </ul>
                    </div>
                </div>
    
    )
}

export default Sidebar
