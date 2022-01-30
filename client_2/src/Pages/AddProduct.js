import React, { useState } from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";



function AddProduct(){

    function AddToDB(e){
        e.preventDefault();
        console.log({name,amount,price})


        fetch("http://localhost:3001/produkt/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nazwa:name,ilosc:amount,cena:price}),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)

                //powiodlo się to moze warto wyczyścić formularz
            })
            .catch((err) => console.log(err))

    }

    const [name,setName] = useState("")
    const [amount,setAmount] = useState(0)
    const [price,setPrice] = useState(0)

    return(
            <div class="popupramka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Dodaj nowy produkt</div>
                    <div class="margines">
                    <form onSubmit={AddToDB}>
                    <table class="tabela">
                            <tr>
                                <td>Nazwa: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setName(e.target.value)}  name="productname" id="name"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Cena: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setPrice(e.target.value)} name="productprice" id="price"/></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Ilość: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e=> setAmount(e.target.value)} name="productamount" /></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td><Link to="/products" class="przyciskFunkcyjny"> &lt;Anuluj&gt; </Link></td> <td><input type="submit" class="przyciskFunkcyjny" value="<Dodaj>"/></td>
                            </tr>

                        </table>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default AddProduct;