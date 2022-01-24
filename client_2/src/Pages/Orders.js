import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";

function Orders(){
        return(
                <div class="produktyRamka">
                    <div class="nazwaRamka">
                        <div class="tekstNazwaRamka">Zarządzanie zamówieniami</div>
                        <div class="margines">
                            <table class="tabela">
                                <tr>
                                    <td>
                                        <div>
                                            <Link to="/addorders" class="przycisk"> Dodaj </Link>
                                            <Link to="/modiforders" class="przycisk"> Modyfikuj </Link>
                                            <Link to="/deleteorderst" class="przycisk"> Usuń </Link>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Wyszukiwanie</div>
                                            <div class="margines">
                                                <table class="tabela">
                                                <tr> 
                                                    <td><input class="poleDoWpisywania" type="text" name="search"/></td> <td><button class="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                </tr>
                                                </table>
                                            </div>   
                                        </div>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <br/>
                                        <Link to="/detailsproducts" class="przycisk"> Produkty </Link>
                                    </td>
                                    <td>
                                        <br></br>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Elementy</div>
                                            <div class="margines">
                                                <table class="tabela">
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                </table>
                                                <table>
                                                <tr> 
                                                    <td><button class="przyciskStrzalka"> &lt; </button> </td> <td><button class="przyciskStrzalka"> &gt; </button> </td>
                                                </tr>
                                                </table>
                                                 
                                            </div>   
                                        </div>                             
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        
                                        <Link to="/" class="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link>
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                    </div>
                </div>
        )
}




export default Orders;