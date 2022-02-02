import React, { useState, useEffect } from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
import {getCurrentDate} from "../Services/CommonServices"

const textfield = {
    backgroundColor: "#CCCCCC",
    padding: "3px",
};

function AddProduct(){

    function AddToDB(e){
        e.preventDefault();
        console.log({klientId})


        fetch("http://localhost:3001/zamowienie/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({pracownikId:1,klientId:parseInt(klientId),stan:"Zaakceptowane",dataZalozenia:getCurrentDate(),dataRealizacji:""}),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)

                //powiodlo się to moze warto wyczyścić formularz
            })
            .catch((err) => console.log(err))

    }

    const [klienci,setKlienci] = useState([])

    useEffect(getKlientsData,[])

    function getKlientsData(){
        fetch("http://localhost:3001/klient/getAll", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {

                setKlienci(data.data)
            

                console.log("klienci")
                console.log(klienci)

            })
            .catch((err) => console.log(err))
    }


    function getKlientById(id){
        for(let i =0;i<klienci.length;i++){
            if(klienci[i].id == id)
            {
                return klienci[i]
            }
        }
    }

    // const [pracownikId,setPracownikId] = useState(0)
    const [klientId,setKlientId] = useState(0)
    let arr = []
    for(let i =0;i<klienci.length;i++){
        let element = klienci[i]
        arr.push((<option value={element.id}>{element.nazwa_firmy} {element.nip}</option>))
    
    }
    return(
            <div class="menuRamka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowe zamówienie</div>
                    <div class="margines">
                    <form onSubmit={AddToDB}>
                    <table class="tabela">
                            {/* <tr>
                                <td>Pracownik ID: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setPracownikId(e.target.value)}  name="productname" id="name"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr> */}
                            {/* <tr>
                                <td>Klient ID: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" name="productprice" id="price" disabled/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr> */}
                            <tr>
                                <td>Dane Klienta: &nbsp; &nbsp; &nbsp; </td> 
                                <td> 
                                <select style={textfield} onChange={(e) => { setKlientId(e.target.value);  }}>
                                    {arr}
                                </select>
                                </td>
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