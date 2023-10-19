import Register from "../Register/Register";
import "./topnav.css";
import { Routes, Route, Link } from "react-router-dom";
import Test from "../Register/test";


const TopNav=()=>{
    return(
        <div>

            <div className="fh5co-loader"></div>
            <div id="page">
                <nav className="fh5co-nav" role="navigation">
                    <div className="container-wrap">
                        <div className="top-menu">
                            <div className="row">
                                <div className="col-xs-2">
                                    <div id="fh5co-logo"><a href="#">PROJECT DANI</a></div>
                                </div>
                                <div className="col-xs-10 text-right menu-1">
                                    <ul>
                                        <li className="active"><Link to="#">Home</Link></li>
                                        <li><a href="#">Work</a></li>
                                        <li className="has-dropdown">
                                            <a href="#">Blog</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">eCommerce</a></li>
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">API</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li id="register"><Link to="/register">Register</Link></li>
                                        <li id="test"><Link to="/test">Test</Link></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>   

            <Routes>
                <Route path="/register" element={<Register />}/>
                <Route path="/test" element={<Test />}/>
            </Routes>
        </div>
    )
}

export default TopNav;