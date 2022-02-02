import React,{useEffect} from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link } from "react-router-dom";
import logo from './logo.png'

function About() {

    useEffect(() => {
        setInterval(function () {
            if(document.getElementById("about")!=null){
            // use local_i instead of i inside this function for the results you expect
            document.getElementById("about").style.WebkitTransitionDuration='1s';
            document.getElementById("about").style.webkitTransform = 'rotate(360deg)';
        }
          }, 100)
    }, []);    
    return (
        <div class="onasRamka" id="about">
            <script>

            </script>
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