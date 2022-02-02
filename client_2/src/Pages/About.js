import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link } from "react-router-dom";
import logo from './logo.png'

function About() {
    return (
        <div class="onasRamka">
            <div class="nazwaRamka">
                <div class="tekstNazwaRamka">O nas</div>
                <div class="margines">
                    <img src={logo} alt="Logo" />
                    <Link to="/" className="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link>
                </div>
            </div>
        </div>
    )
}




export default About;