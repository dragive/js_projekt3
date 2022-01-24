import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";

function ModifyProducts(){
        return(
            <div class="popupramka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowy produkt</div>
                    <div class="margines">
                    <table class="tabela">
                            <tr>
                                <td>Nazwa: </td> <td> <input class="poleDoWpisywania" type="text" name="productname"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Cena: </td> <td> <input class="poleDoWpisywania" type="text" name="productprice"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Ilość: </td> <td> <input class="poleDoWpisywania" type="text" name="productamount"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Opis: </td> <td> <input class="poleDoWpisywania" type="text" name="productdescription"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td><Link to="/products" class="przyciskFunkcyjny"> &lt;Anuluj&gt; </Link></td> <td><button class="przyciskFunkcyjny">&lt;Modyfikuj&gt;</button></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        )
}

export default ModifyProducts;