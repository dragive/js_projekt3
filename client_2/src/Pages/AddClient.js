import React, { useState } from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";



function AddClient(){

    function AddToDB(e){
        e.preventDefault();
        console.log({name,nip,email,number,address})


        fetch("http://localhost:3001/klient/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nazwaFirmy:name,nip:nip,email:email,telefon:number,adres:address}),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)

                //powiodlo się to moze warto wyczyścić formularz
            })
            .catch((err) => console.log(err))

    }

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [nip,setNip] = useState("")
    const [number,setNumber] = useState("")
    const [address,setAddress] = useState("")

    return(
            <div class="popupramka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowego klienta</div>
                    <div class="margines">
                    <form onSubmit={AddToDB}>
                    <table class="tabela">
                            <tr>
                                <td>Nazwa firmy: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setName(e.target.value)}  name="companyname" id="nazwaFirmy"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>NIP: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setNip(e.target.value)} name="companynip" id="nip"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Email: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setEmail(e.target.value)} name="companyemail"  id="email"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Telefon: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setNumber(e.target.value)} name="companynuumber"  id="number"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Adres: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setAddress(e.target.value)} name="companyaddress"  id="address"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>

                            <tr>
                                <td><Link to="/clients" class="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link></td> <td><input type="submit" class="przyciskFunkcyjny" value="<Zapisz>"/></td>
                            </tr>

                        </table>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default AddClient;