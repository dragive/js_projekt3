import './Components.css';
import { BrowserRouter as useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import React, { useEffect, useState } from "react";




function Products2() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:3001/produkt/getAll")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    //console.log(result);

                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    // useEffect(() => {
    //     if(isLoaded)tableGeneratotr(items.data)()

    // })

    window.addEventListener('DOMContentLoaded', () => {
        console.log("page is loaded")
    })

    function tableGeneratotr(dan) {
        var dane = dan;
        console.log(dane)
        window.addEventListener('DOMContentLoaded', () => {
            console.log(dane + "#")

            const tableBody = document.querySelector("#tbodyID");
            console.log(dane + "#")
            //console.log(window.)
            dane.forEach((row) => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.innerHTML = row.id;
                tr.appendChild(td1);
                const td2 = document.createElement("td");
                td2.innerHTML = row.nazwa;
                tr.appendChild(td2);
                const td3 = document.createElement("td");
                td3.innerHTML = row.ilosc;
                tr.appendChild(td3);
                const td4 = document.createElement("td");
                td4.innerHTML = row.cena;
                tr.appendChild(td4);
                console.log(row);
                tableBody.appendChild(tr);
            })
        });
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded || items.data == undefined) {
        return (        
            <div class="menuRamka">
            <div class="nazwaRamka">
                <div class="tekstNazwaRamka">Error 404</div>
                <div class="margines">
                  <div>Loading: ...</div>
                </div>
            </div>
          </div>
            );
    } else {
        var rows = [];
        for (var i = 0; i < items.data.length; i++) {
            rows.push(
                <tr>
                    <td>{items.data[i].id}</td>
                    <td>{items.data[i].nazwa}</td>
                    <td>{items.data[i].ilosc}</td>
                    <td>{items.data[i].cena}</td>
                </tr>
            );
        }
        return (
            <div class="produktyRamka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka" >Zarządzanie produktami</div>
                    <div class="margines">
                        <table class="tabela">
                            <tr>
                                <td>
                                    <div>
                                        <Link to="/addproducts" class="przycisk"> Dodaj </Link>
                                        <Link to="/modifyproduct" class="przycisk"> Modyfikuj </Link>
                                        <Link to="/deleteproduct" class="przycisk"> Usuń </Link>
                                    </div>
                                </td>
                                <td>
                                    <div class="nazwaRamka">
                                        <div class="tekstNazwaRamka">Wyszukiwanie</div>
                                        <div class="margines">
                                            <table class="tabela">
                                                <tr>
                                                    <td><input class="poleDoWpisywania" type="text" name="search" /></td> <td><button class="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <br></br>
                                    <div class="nazwaRamka">
                                        <div class="tekstNazwaRamka">Elementy</div>
                                        <div class="margines">
                                            <table id="tabela" class="tabela">
                                                <tr>
                                                    <td>ID</td> <td>Nazwa</td> <td>Ilość</td> <td>Cena</td>
                                                </tr>
                                                <tbody id="tbodyID">{rows}</tbody>
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
                <script>{

                    //tableGeneratotr(items.data)
                    //console.log(items)


                }</script>

            </div>
        )
    }
}

export default Products2;