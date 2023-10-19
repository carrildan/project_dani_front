import "./site-plan.css";

const SitePlan=()=>{
    return(
        <div>
             <header>
                <h1>Project Dani: Pequeña plataforma de empleo de prácticas</h1>
            </header>

            <main>
                <h2 id="overview">Descripción</h2>
                <hr/>
                <h3>Propósito</h3>
                <p>Conectar recién graduados o estudiantes que buscan ofertas de prácticas en sus áreas y empresas que quieren postar vacantes de prácticas. Empresas pueden postar sus vacantes y encontrar usuarios que buscan por estas vacantes. Plataforma limitada a vagas de prácticas.</p> 

                <h3>Audience</h3>
                <p>Estudiantes que van graduarse en una área específica y buscan por vacantes de prácticas. Recién graduados que buscan por vacantes de prácticas. Empresas que buscan estudiantes y/o recién graduados para aplicar a sus vacantes de prácticas.  
                </p> 


                <h2>Marca</h2>
                <h3>Logo de la Página web</h3>
                <img src="#" alt="Logo image"/>
                <hr/>
                <h2>
                    Style Guide
                </h2>

                <h3>
                    Color Palette
                </h3>
                
                <p>Palette URL: <a href="https://coolors.co/user/palettes/6511d05f83817a000bf9aa98" target="_blank">https://coolors.co/user/palettes/6511d05f83817a000bf9aa98</a></p>


                <table class="colors">
                    <tr><th>Primary</th><th>Secondary</th><th>Accent 1</th><th>Accent 2</th><th>Accent 3</th><th>Accent 4</th></tr>
                    <tr><td class="primary">[#66D37E]</td><td class="secondary">[#E1E0DF]</td><td class="accent1">[#FFFFFF]</td><td class="accent2">[#ECA72C]</td><td class="accent3">[#221E22]</td><td class="accent4">[#d7d5d2]</td></tr>
                </table>


                <h3 id="typography">
                    Typography
                </h3>

                <h4>
                    Paragraph Font: "Oxygen", sans-serif 
                </h4>
                <p>
                    It looks fashion and new. 
                </p>

                <h4>
                    Normal paragraph example
                </h4>
                <p>
                    The best Whitewater Rafting in Colorado, White Water Rafting Company offers rafting on the Colorado and Roaring Fork Rivers in Glenwood Springs.  Since 1974, we have been family owned and operated, rafting the Shoshone section of Glenwood Canyon and beyond.
                </p>
                <h4>
                    Colored paragraph example
                </h4>
                <p class="colored">
                    Trips vary from mild and great for families, to trips exclusively for physically fit and experienced rafters.  No matter what type of river adventures you are seeking, White Water Rafting Company can make it happen for you. 
                </p>

                

                <h3>
                    Navigation
                </h3>
                <nav><ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Internships</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    
                    <li><a href="#">Register</a>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Student</a></li>
                    </li>
                    
                    
                    
                    </ul></nav>
                <hr/>
            
               
      
                    <hr/>
                    <h2>
                        Wireframes
                    </h2>
                    <p>
                        Wireframes are like blueprints for making webpages.  They should show the major sections of content that will be on the page and the relative locations of each element.  In the wireframe below you can see there will be 6 sections to our page:</p>
                    <ol>
                        <li>At the top we have a section with the logo (the box with the mountain means an image) and the navigation bar.</li>
                        <li>Then there is a banner image that stretches all the way across the screen.</li>
                        <li>Next we have some text and an image </li>
                        <li>...followed by another row made up of an image and some text.</li>
                        <li>Then one more section of text with no image.</li>
                        <li>Lastly, a footer containing a copyright/name line and 3  social media icons. </li>

                    </ol>
                
                <img src="#" alt="home page wireframe"/>
            </main>
        </div>
    )
}

export default SitePlan;