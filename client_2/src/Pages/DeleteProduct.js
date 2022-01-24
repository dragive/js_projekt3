import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";

function DeleteProduct(){
        return(
            <div class="minipopupramka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowy produkt</div>
                    <div class="margines">
                    <div>Czy na pewno chcesz usunąć?</div>
                    <br/>
                    <table>
                        <tr> 
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td><Link to="/products" class="przyciskFunkcyjny"> &lt;Anuluj&gt; </Link> </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
                            <td><Link to="/products" class="przyciskFunkcyjny"> &lt;Usuń&gt; </Link> </td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        )
}

export default DeleteProduct;