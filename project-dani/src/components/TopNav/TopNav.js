import "./topnav.css";


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
                                        <li class="active"><a href="index.html">Home</a></li>
                                        <li><a href="work.html">Work</a></li>
                                        <li class="has-dropdown">
                                            <a href="blog.html">Blog</a>
                                            <ul class="dropdown">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">eCommerce</a></li>
                                                <li><a href="#">Branding</a></li>
                                                <li><a href="#">API</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>   
        </div>
    )
}

export default TopNav;