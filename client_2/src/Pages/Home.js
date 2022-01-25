import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";

function Home(){

    let name = "Jan Nowak";
        return(
            <div class="menuRamka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Menu</div>
                    <div class="margines">
                        <table class="tabela">
                            <tr>
                                <td>Zalogowano jako:</td> <td> &nbsp;&nbsp; {name}</td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>  
                                <td><Link to="/products" class="przycisk" id="get-produkts"> Produkty </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/clients" class="przycisk"> Klienci </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/orders" class="przycisk"> Zamówienia </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/category" class="przycisk"> Kategorie </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/supplys" class="przycisk"> Dostawy </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/employees" class="przycisk"> Pracownicy </Link></td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/position" class="przycisk"> Stanowiska </Link></td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/about" class="przycisk"> O nas </Link> </td> <td></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr> 
                                <td></td><td><button  class="przyciskFunkcyjny">&lt;Wyloguj&gt;</button> </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
}

export default Home;