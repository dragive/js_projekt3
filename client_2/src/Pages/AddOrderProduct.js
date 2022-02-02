import React, { useState } from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link } from "react-router-dom";

const textfield = {
    backgroundColor: "#CCCCCC",
    padding: "3px",
};


function AddOrderProduct() {

    function AddToDB(e) {
        e.preventDefault();
        console.log({ name, amount, price })


        fetch("http://localhost:3001/produkt/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nazwa: name, ilosc: amount, cena: price }),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)

                //powiodlo się to moze warto wyczyścić formularz
            })
            .catch((err) => console.log(err))

    }

    const [produkty,setProdukty] = useState([])

    const [ProductId,setProductId] = useState(0)
    let arr = []
    for(let i =0;i<produkty.length;i++){
        let element = produkty[i]
        arr.push((<option value={element.id}>{element.nazwa_firmy} {element.nip}</option>))
    
    }


    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)

    return (
        <div class="popupramka">
            <div class="nazwaRamka">
                <div class="tekstNazwaRamka">Dodaj nowy produkt</div>
                <div class="margines">
                    <form onSubmit={AddToDB}>
                        <table class="tabela">
                            <tr>
                                <td>Nazwa: </td>
                                <td>
                                    <select style={textfield} onChange={(e) => { setProductId(e.target.value); }}>
                                        {arr}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr>
                                <td>Ilość: </td> <td> <input class="poleDoWpisywaniaProdukty" type="text" onInput={e => setAmount(e.target.value)} name="productamount" /></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>

                            <tr>
                                <td><Link to="/orderproducts" class="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link></td> <td><input type="submit" class="przyciskFunkcyjny" value="<Zapisz>" /></td>
                            </tr>

                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddOrderProduct;