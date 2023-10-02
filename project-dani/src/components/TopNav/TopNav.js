import Register from "../Register/Register";
import "./topnav.css";
import { Routes, Route, Link } from "react-router-dom";


const TopNav=()=>{
    return(
        <div>

            <div class="fh5co-loader"></div>
            <div id="page">
                <nav class="fh5co-nav" role="navigation">
                    <div class="container-wrap">
                        <div class="top-menu">
                            <div class="row">
                                <div class="col-xs-2">
                                    <div id="fh5co-logo"><a href="index.html">PROJECT DANI</a></div>
                                </div>
                                <div class="col-xs-10 text-right menu-1">
                                    <ul>
                                        <li class="active"><Link to="#">Home</Link></li>
                                        <li><a href="#">Work</a></li>
                                        <li class="has-dropdown">
                                            <a href="#">Blog</a>
                                            <ul class="dropdown">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">eCommerce</a></li>
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">API</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li id="register"><Link to="/register">Register</Link></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>   

            <Routes>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </div>
    )
}

export default TopNav;