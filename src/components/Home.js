import React from "react";
import companyLogo3 from './ps5.jpg';
import companyLogo1 from './xbox.large';
import companyLogo2 from './switch.jpg';
import companyLogo from './3ds.jpg';
import companyLogo4 from './wiiu.jpg';
import companyLogo5 from './micro.jpg';
import companyLogo6 from './ps4.jpg';
import companyLogo7 from './psvita.jpg';
import companyLogo8 from './psp.jpg';
import companyLogo9 from './gb.webp';
import companyLogo10 from './ds.jpg';
import companyLogo11 from './snes.jpg';
import companyLogo12 from './n64.jpg';
export default function Home(props) {
    return(
        <class id="pcs">
            <div id="most">
            <h1>Most Popular Today</h1>
            </div>
        <div id="card">
        
            <div id="card1">
                    <img img src={companyLogo} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                        <div id="titre1">
                            <h3>{props.console.co1}</h3>
                            <p1>$299.99</p1>
                            <p>$199.99</p>
                            <button>Buy now</button>
                        </div>
                        
                </div>

                <div id="card1">
                    <img img src={companyLogo2} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                        <div id="titre2">
                            <h3>{props.console.co2}</h3>
                            <p1>$499.99</p1>
                            <p>$349.99</p>
                            <button>Buy now</button>
                        </div>
                </div>

                <div id="card1">        
                    <img img src={companyLogo3} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                        <div id="titre3">
                            <h3>{props.console.co3}</h3>
                            <p1>$999.99</p1>
                            <p>$699.99</p>
                            <button>Buy now</button>
                        </div>
                </div>
                <div id="card1">        
                    <img img src={companyLogo1} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                        <div id="titre4">
                            <h3>{props.console.co4}</h3>
                            <p1>$599.99</p1>
                            <p>$499.99</p>
                            <button>Buy now</button>
                        </div>
                </div>
        </div>

        
            <h1>Nintendo consoles</h1>


            <div id="card">
        
        <div id="card1">
                <img img src={companyLogo} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre1">
                        <h3>{props.console.co1}</h3>
                        <p1>$299.99</p1>
                        <p>$199.99</p>
                        <button>Buy now</button>
                    </div>
                    
            </div>

            <div id="card1">
                <img img src={companyLogo2} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre2">
                        <h3>{props.console.co2}</h3>
                        <p1>$499.99</p1>
                        <p>$349.99</p>
                        <button>Buy now</button>
                    </div>
            </div>

            <div id="card1">        
                <img img src={companyLogo4} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre3">
                        <h3>{props.console.con1}</h3>
                        <p1>$299.99</p1>
                        <p>$199.99</p>
                        <button>Buy now</button>
                    </div>
            </div>
            <div id="card1">        
                <img img src={companyLogo5} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre4">
                        <h3>{props.console.con2}</h3>
                        <p1>$199.99</p1>
                        <p>$99.99</p>
                        <button>Buy now</button>
                    </div>
            </div>
    </div>


        <h1>Sony consoles</h1>


        <div id="card">
        
        <div id="card1">
                <img img src={companyLogo3} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre1">
                        <h3>{props.console.co3}</h3>
                        <p1>$999.99</p1>
                        <p>$699.99</p>
                        <button>Buy now</button>
                    </div>
                    
            </div>

            <div id="card1">
                <img img src={companyLogo6} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre2">
                        <h3>{props.console.cos1}</h3>
                        <p1>$399.99</p1>
                        <p>$299.99</p>
                        <button>Buy now</button>
                    </div>
            </div>

            <div id="card1">        
                <img img src={companyLogo7} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre3">
                        <h3>{props.console.cos2}</h3>
                        <p1>$299.99</p1>
                        <p>$149.99</p>
                        <button>Buy now</button>
                    </div>
            </div>
            <div id="card1">        
                <img img src={companyLogo8} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre4">
                        <h3>{props.console.cos3}</h3>
                        <p1>$199.99</p1>
                        <p>$89.99</p>
                        <button>Buy now</button>
                    </div>
            </div>

            <h1>Retro consoles</h1>

            <div id="card">
        
        <div id="card1">
                <img img src={companyLogo9} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre1">
                        <h3>{props.console.cor1}</h3>
                        <p1>$999.99</p1>
                        <p>$169.99</p>
                        <button>Buy now</button>
                    </div>
                    
            </div>

            <div id="card1">
                <img img src={companyLogo10} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre2">
                        <h3>{props.console.cor2}</h3>
                        <p1>$999.99</p1>
                        <p>$89.99</p>
                        <button>Buy now</button>
                    </div>
            </div>

            <div id="card1">        
                <img img src={companyLogo11} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre3">
                        <h3>{props.console.cor3}</h3>
                        <p1>$999.99</p1>
                        <p>$199.99</p>
                        <button>Buy now</button>
                    </div>
            </div>
            <div id="card1">        
                <img img src={companyLogo12} alt="BigCo Inc. logo" style={{"width": "200px", "height" : "150px"}}></img>
                    <div id="titre4">
                        <h3>{props.console.cor4}</h3>
                        <p1>$999.99</p1>
                        <p>$149.99</p>
                        <button>Buy now</button>
                    </div>
            </div>
    </div>
    </div>
    <footer>
        <div id="cr">
            
            <p>Copyright @2022-2023</p>
            <p>Youssef Amerzag</p>
        </div>
    </footer>
        </class>
    )
}