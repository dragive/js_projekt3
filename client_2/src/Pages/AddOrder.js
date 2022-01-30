import React, { useState } from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";

function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

function AddProduct(){

    function AddToDB(e){
        e.preventDefault();
        console.log({pracownikId,klientId})


        fetch("http://localhost:3001/zamowienie/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({pracownikId:parseInt(pracownikId),klientId:parseInt(klientId),stan:"'Zaakceptowane'",dataZalozenia:getCurrentDate(),dataRealizacji:""}),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)

                //powiodlo się to moze warto wyczyścić formularz
            })
            .catch((err) => console.log(err))

    }

    const [pracownikId,setPracownikId] = useState(0)
    const [klientId,setKlientId] = useState(0)

    return(
            <div class="popupramka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowe zamówienie</div>
                    <div class="margines">
                    <form onSubmit={AddToDB}>
                    <table class="tabela">
                            <tr>
                                <td>Pracownik ID: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setPracownikId(e.target.value)}  name="productname" id="name"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Klient ID: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setKlientId(e.target.value)} name="productprice" id="price"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td><Link to="/orders" class="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link></td> <td><input type="submit" class="przyciskFunkcyjny" value="<Zapisz>"/></td>
                            </tr>

                        </table>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default AddProduct;